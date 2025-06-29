import overload from "@jyostudio/overload";
import Mode from "./mode.js";

/**
 * 共享样式：用于在适配过程中隐藏元素，避免闪烁
 */
const SHARED_STYLE = `
[sa-cloak] {
    display: none !important;
}
`;

/**
 * 检查是否在客户端渲染环境（浏览器环境）
 */
const IS_CSR = typeof document !== "undefined" && typeof document.documentElement !== "undefined";

/**
 * 确保 Symbol.dispose 可用，用于资源清理
 */
Symbol.dispose ??= Symbol.for("Symbol.dispose");

export default class Adapter {
    /**
     * 计数器
     * @type {number}
     */
    static #counter = 0;

    /**
     * 适配器是否有错误
     * @type {boolean}
     */
    #hasError = false;

    /**
     * 适配器是否已被销毁
     * @type {boolean}
     */
    #isDisposed = false;

    /**
     * 适配器的唯一标识符
     * @type {string}
     */
    #symbol = `sa-${++Adapter.#counter}`;

    /**
     * 绑定的元素
     * @type {HTMLElement}
     */
    #element;

    /**
     * 适配模式
     * @type {Mode}
     */
    #mode = Mode.none;

    /**
     * 样式元素
     * @type {HTMLStyleElement}
     */
    #styleElement;

    /**
     * 设计稿的宽度
     * @type {number}
     */
    #sourceWidth = 0;

    /**
     * 设计稿的高度
     * @type {number}
     */
    #sourceHeight = 0;

    /**
     * 重排回调函数
     * @type {Function}
     */
    #relayoutCallback;

    /**
     * 防抖定时器
     * @type {number}
     */
    #debounceTimer;

    static #_constructor = function (...params) {
        Adapter.#_constructor = overload()
            .add([String], function (selector) {
                if (!selector.trim()) throw new Error("选择器不能为空");

                const ELEMENT = document.querySelector(selector);
                if (!ELEMENT) throw new Error(`未找到选择器为 "${selector}" 的元素`);

                return Adapter.#_constructor.call(this, ELEMENT);
            })
            .add([HTMLElement], function (element) {
                this.#element = element;
                // 为元素添加唯一标识属性
                element.setAttribute(`${this.#symbol}`, "");

                // 创建或获取样式元素
                const STYLE_ID = `style-${this.#symbol}`;
                this.#styleElement = document.getElementById(STYLE_ID) || document.createElement("style");
                this.#styleElement.id = STYLE_ID;
                this.#styleElement.innerHTML = SHARED_STYLE;
                document.head.appendChild(this.#styleElement);

                // 安全检查：确保父元素不是body
                if (this.#element.parentNode === document.body) {
                    throw new Error("屏幕适配器的父元素不能是 body 元素，请使用其他元素作为父元素。");
                }
            });

        return Adapter.#_constructor.apply(this, params);
    }

    constructor(...params) {
        if (this.#checkError()) return;
        Adapter.#_constructor.apply(this, params);
    }

    /**
     * 检查适配器是否有错误
     * @returns {boolean} 如果适配器有错误，则返回 true
     */
    #checkError() {
        if (!IS_CSR) {
            console.error("屏幕适配器无法使用，请确保在客户端环境中使用。");
            this.#hasError = true;
        }

        return this.#hasError;
    }

    /**
     * 核心重排方法：根据当前模式和尺寸计算缩放比例并应用样式
     * @private
     */
    #relayout() {
        // 如果适配器已销毁或模式为none，则不执行重排
        if (this.#isDisposed || this.#mode === Mode.none) return;

        // 等待DOM加载完成
        if (!document?.body) {
            document?.addEventListener("DOMContentLoaded", () => {
                if (!this.#isDisposed) this.#relayout();
            }, { once: true });
            return;
        }

        // 获取当前屏幕尺寸
        const [SCREEN_WIDTH, SCREEN_HEIGHT] = [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ];
        
        // 计算居中偏移量
        const MARGIN_LEFT = (SCREEN_WIDTH - this.#sourceWidth) / 2;
        const MARGIN_TOP = (SCREEN_HEIGHT - this.#sourceHeight) / 2;
        
        // 获取父元素的overflow样式，用于模式检查
        const PARENT_OVERFLOW = document.defaultView
            .getComputedStyle(this.#element.parentNode).overflow;

        // 计算缩放比例向量
        const SCALE_VEC = {
            x: SCREEN_WIDTH / this.#sourceWidth,
            y: SCREEN_HEIGHT / this.#sourceHeight
        };

        // 统一缩放比例的辅助函数
        const unifyScale = (fn) => {
            const scale = fn(SCALE_VEC.x, SCALE_VEC.y);
            SCALE_VEC.x = SCALE_VEC.y = scale;
        };

        // 根据不同模式计算缩放比例
        switch (this.#mode) {
            case Mode.cover:
                // 覆盖模式：使用较大的缩放比例，可能会裁剪内容
                unifyScale(Math.max);
                if (PARENT_OVERFLOW !== "hidden") {
                    console.error("在 cover 模式下，父元素的 overflow 不是 hidden 可能出现滚动条。");
                }
                break;
            case Mode.contain:
                // 包含模式：使用较小的缩放比例，确保内容完全可见
                unifyScale(Math.min);
                break;
            case Mode.fixedWidth:
                // 固定宽度模式：Y轴缩放跟随X轴
                SCALE_VEC.y = SCALE_VEC.x;
                if (PARENT_OVERFLOW === "hidden") {
                    console.error("在 fixedWidth 模式下，父元素的 overflow 为 hidden 会导致裁剪。");
                }
                break;
        }

        // CSS前缀添加辅助函数
        const addPrefix = (prop) => `-moz-${prop} -webkit-${prop} -ms-${prop} ${prop}`;
        
        // 默认的元素样式（居中显示）
        let rectStyle = `
            left: ${MARGIN_LEFT}px;
            top: ${MARGIN_TOP}px;
            width: ${this.#sourceWidth}px;
            height: ${this.#sourceHeight ? `${this.#sourceHeight}px` : "auto"};
            min-height: ${this.#sourceHeight ? "auto" : "100%"};
            ${addPrefix("transform-origin: center center;")}
        `;

        // 固定宽度模式的特殊样式处理
        if (this.#mode === Mode.fixedWidth) {
            rectStyle = `
                left: ${MARGIN_LEFT}px;
                top: 0;
                width: ${this.#sourceWidth}px;
                height: auto;
                min-height: ${1 / SCALE_VEC.y * 100}%;
                ${addPrefix("transform-origin: center top;")}
            `;
        }

        // 应用计算出的样式到元素
        this.#styleElement.innerHTML = `
            ${SHARED_STYLE}
            [${this.#symbol}] {
                position: absolute;
                display: block;
                ${rectStyle}
                ${addPrefix(`transform: scale(${SCALE_VEC.x}, ${SCALE_VEC.y});`)}
            }
        `;

        // 异步移除遮罩，避免样式应用前的闪烁
        requestAnimationFrame(() => this.#element.removeAttribute("sa-cloak"));

        // 初始化resize事件监听器（仅执行一次）
        if (!this.#relayoutCallback) {
            this.#relayoutCallback = () => {
                // 使用防抖机制，避免频繁的重排操作
                clearTimeout(this.#debounceTimer);
                this.#debounceTimer = setTimeout(() => this.#relayout(), 16); // 约60fps
            };
            window.addEventListener("resize", this.#relayoutCallback, { passive: true });
        }
    }

    setMode(...params) {
        Adapter.prototype.setMode = overload([Mode, Object], function (mode, options) {
            if (this.#isDisposed) {
                throw new Error("适配器已被销毁，无法设置模式。");
            }

            // 重置当前状态
            this.reset();

            // 如果是none模式，直接移除遮罩并返回
            if (mode === Mode.none) {
                requestAnimationFrame(() => {
                    this.#element.removeAttribute("sa-cloak");
                });
                return;
            }

            this.#mode = mode;

            // 根据不同模式验证必需的参数
            const MODE_NAME = mode.description;
            switch (mode) {
                case Mode.fill:
                case Mode.cover:
                case Mode.contain:
                    // 这些模式需要宽度和高度
                    if (!options.width || !options.height) {
                        throw new Error(`${MODE_NAME} 模式需要同时指定设计稿的宽度和高度。`);
                    }
                    if (options.width <= 0 || options.height <= 0) {
                        throw new Error(`${MODE_NAME} 模式的设计稿宽度和高度必须大于0。`);
                    }
                    break;
                case Mode.fixedWidth:
                    // 固定宽度模式只需要宽度
                    if (!options.width) {
                        throw new Error(`${MODE_NAME} 模式需要指定设计稿的宽度。`);
                    }
                    if (options.width <= 0) {
                        throw new Error(`${MODE_NAME} 模式的设计稿宽度必须大于0。`);
                    }
                    break;
                default:
                    throw new Error(`不支持的模式: ${MODE_NAME}。`);
            }

            // 保存设计稿尺寸
            this.#sourceWidth = options.width || 0;
            this.#sourceHeight = options.height || 0;

            // 执行重排
            this.#relayout();
        });

        return Adapter.prototype.setMode.apply(this, params);
    }

    reset(...params) {
        Adapter.prototype.reset = overload([], function () {
            if (this.#isDisposed) {
                throw new Error("适配器已被销毁，无法重置。");
            }

            // 重置模式和尺寸参数
            this.#mode = Mode.none;
            this.#sourceWidth = 0;
            this.#sourceHeight = 0;

            // 移除resize事件监听器
            if (this.#relayoutCallback) {
                window.removeEventListener("resize", this.#relayoutCallback);
                this.#relayoutCallback = null;
            }

            // 重置样式为初始状态
            this.#styleElement.innerHTML = SHARED_STYLE;
        });

        return Adapter.prototype.reset.apply(this, params);
    }

    dispose(...params) {
        Adapter.prototype.dispose = overload([], function () {
            // 防止重复销毁
            if (this.#isDisposed) return;

            this.#isDisposed = true;

            // 清理状态
            this.#mode = null;

            // 清理DOM元素相关
            this.#element.removeAttribute(`${this.#symbol}`);
            this.#element = null;

            // 移除样式元素
            if (this.#styleElement) {
                this.#styleElement.remove();
                this.#styleElement = null;
            }

            // 移除事件监听器
            if (this.#relayoutCallback) {
                window.removeEventListener("resize", this.#relayoutCallback);
                this.#relayoutCallback = null;
            }

            // 清除防抖定时器，防止内存泄漏
            if (this.#debounceTimer) {
                clearTimeout(this.#debounceTimer);
                this.#debounceTimer = null;
            }
        });

        return Adapter.prototype.dispose.apply(this, params);
    }

    /**
     * Symbol.dispose 实现，支持 using 语法
     */
    [Symbol.dispose]() {
        this.dispose();
    }
}