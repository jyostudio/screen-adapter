import overload from "@jyostudio/overload";
import Mode from "./mode.js";

const SHARED_STYLE = `
[sa-cloak] {
    display: none !important;
}
`;

const IS_CSR = typeof document !== "undefined" && typeof document.documentElement !== "undefined";

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
                element.setAttribute(`${this.#symbol}`, "");

                const STYLE_ID = `style-${this.#symbol}`;
                this.#styleElement = document.getElementById(STYLE_ID) || document.createElement("style");
                this.#styleElement.id = STYLE_ID;
                this.#styleElement.innerHTML = SHARED_STYLE;
                document.head.appendChild(this.#styleElement);

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
        if (this.#hasError) return true;

        if (!IS_CSR) {
            console.error("屏幕适配器无法使用，请确保在客户端环境中使用。");
            this.#hasError = true;
        }
    }

    #relayout() {
        if (this.#isDisposed) return;

        if (this.#mode === Mode.none) return;

        if (!document?.body) {
            document?.addEventListener("DOMContentLoaded", () => {
                if (this.#isDisposed) return;
                this.#relayout();
            }, { once: true });
            return;
        }

        const SCALE_VEC = {
            x: 1,
            y: 1
        };

        const [SCREEN_WIDTH, SCREEN_HEIGHT] = [document.documentElement.clientWidth, document.documentElement.clientHeight];
        const MARGIN_LEFT = (SCREEN_WIDTH - this.#sourceWidth) / 2;
        const MARGIN_TOP = (SCREEN_HEIGHT - this.#sourceHeight) / 2;

        SCALE_VEC.x = SCREEN_WIDTH / this.#sourceWidth;
        SCALE_VEC.y = SCREEN_HEIGHT / this.#sourceHeight;

        const PARENT_OVERFLOW = document.defaultView.getComputedStyle(this.#element.parentNode).overflow;
        switch (this.#mode) {
            case Mode.cover: {
                const SCALE = Math.max(SCALE_VEC.x, SCALE_VEC.y);
                SCALE_VEC.x = SCALE_VEC.y = SCALE;

                if (PARENT_OVERFLOW !== "hidden") {
                    console.error("在 cover 适配模式下，父元素的 overflow 样式如果不为 hidden 会出现滚动条。");
                }
            } break;
            case Mode.contain: {
                const SCALE = Math.min(SCALE_VEC.x, SCALE_VEC.y);
                SCALE_VEC.x = SCALE_VEC.y = SCALE;
            } break;
            case Mode.fixedWidth: {
                SCALE_VEC.y = SCALE_VEC.x;

                if (PARENT_OVERFLOW === "hidden") {
                    console.error("在 fixedWidth 适配模式下，父元素的 overflow 样式如果为 hidden 会导致内容被裁剪。");
                }
            } break;
        }

        const addPrefix = (property) => {
            return `-moz-${property} -webkit-${property} -ms-${property} ${property}`;
        }

        let rectStyle = `
            left: ${MARGIN_LEFT}px;
            top: ${MARGIN_TOP}px;
            width: ${this.#sourceWidth}px;
            height: ${this.#sourceHeight ? `${this.#sourceHeight}px` : "auto"};
            min-height: ${this.#sourceHeight ? 'auto' : "100%"};
            ${addPrefix(`transform-origin: center center;`)}
        `;

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

        this.#styleElement.innerHTML = `
            ${SHARED_STYLE}

            [${this.#symbol}] {
                position: absolute;
                display: block;
                ${rectStyle}
                ${addPrefix(`transform: scale(${SCALE_VEC.x}, ${SCALE_VEC.y});`)}
            }
        `;

        requestAnimationFrame(() => {
            this.#element.removeAttribute("sa-cloak");
        });

        if (!this.#relayoutCallback) {
            this.#relayoutCallback = () => {
                this.#relayout();
            };
            window.addEventListener("resize", this.#relayoutCallback, { passive: true });
        }
    }

    setMode(...params) {
        Adapter.prototype.setMode = overload([Mode, Object], function (mode, options) {
            if (this.#isDisposed) {
                throw new Error("适配器已被销毁，无法设置模式。");
            }

            if (this.#checkError()) return;

            this.reset();

            if (mode === Mode.none) {
                requestAnimationFrame(() => {
                    this.#element.removeAttribute("sa-cloak");
                });
                return;
            }

            this.#mode = mode;

            const MODE_NAME = mode.description;
            switch (mode) {
                case Mode.fill:
                case Mode.cover:
                case Mode.contain:
                    if (!options.width || !options.height) {
                        throw new Error(`${MODE_NAME} 模式需要同时指定设计稿的宽度和高度。`);
                    }
                    if (options.width <= 0 || options.height <= 0) {
                        throw new Error(`${MODE_NAME} 模式的设计稿宽度和高度必须大于0。`);
                    }
                    break;
                case Mode.fixedWidth:
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

            this.#sourceWidth = options.width || 0;

            this.#sourceHeight = options.height || 0;

            this.#relayout();
        });

        return Adapter.prototype.setMode.apply(this, params);
    }

    reset(...params) {
        Adapter.prototype.reset = overload([], function () {
            if (this.#isDisposed) {
                throw new Error("适配器已被销毁，无法重置。");
            }

            if (this.#checkError()) return;

            this.#mode = Mode.none;
            this.#sourceWidth = 0;
            this.#sourceHeight = 0;

            if (this.#relayoutCallback) {
                window.removeEventListener("resize", this.#relayoutCallback);
                this.#relayoutCallback = null;
            }

            this.#styleElement.innerHTML = SHARED_STYLE;
        });

        return Adapter.prototype.reset.apply(this, params);
    }

    dispose(...params) {
        Adapter.prototype.dispose = overload([], function () {
            if (this.#isDisposed) return;

            this.#isDisposed = true;

            if (this.#checkError()) return;

            this.#mode = null;

            this.#element.removeAttribute(`${this.#symbol}`);
            this.#element = null;

            if (this.#styleElement) {
                this.#styleElement.remove();
                this.#styleElement = null;
            }

            if (this.#relayoutCallback) {
                window.removeEventListener("resize", this.#relayoutCallback);
                this.#relayoutCallback = null;
            }
        });

        return Adapter.prototype.dispose.apply(this, params);
    }

    [Symbol.dispose]() {
        this.dispose();
    }
}