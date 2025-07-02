var Mode = (function () {
    function Mode() { }
    ["none", "cover", "contain", "fill", "fixedWidth"].map(function (v) {
        Mode[v] = new Mode();
    });
    return Mode;
})();

var Adapter = (function (win, doc) {
    /**
     * 共享样式：用于在适配过程中隐藏元素，避免闪烁
     */
    var SHARED_STYLE = "[sa-cloak]{display:none !important;}";

    /**
     * 检查是否在客户端渲染环境（浏览器环境）
     */
    var IS_CSR = !!doc;

    if (typeof Symbol === "function") {
        /**
         * 确保 Symbol.dispose 可用，用于资源清理
         */
        Symbol.dispose = Symbol.dispose || Symbol.for("Symbol.dispose");
    }

    // 计数器
    var counter = 0;

    function Adapter() {
        this._iD = false; // 适配器是否已被释放
        this._s = "sa-" + ++counter; // 适配器的唯一标识符
        this._el = null; // 绑定的元素
        this._se = null; // 样式元素
        this._rc = null; // 重排回调函数
        this._dt = null; // 防抖定时器
        this.mode = Mode.none; // 适配模式
        this.sourceWidth = 0; // 设计稿的宽度
        this.sourceHeight = 0; // 设计稿的高度
        this.scaleVector = { x: 1, y: 1 }; // 缩放向量

        var arg = arguments[0];

        if (!arg) throw new Error();

        if (!IS_CSR) return;

        if (typeof arg === "string") arg = doc.querySelector(selector);

        if (typeof arg === "object" && arg instanceof HTMLElement) {
            this._el = arg;
            // 为元素添加唯一标识属性
            element.setAttribute(this._s, "");

            // 创建或获取样式元素
            var STYLE_ID = "style-" + this._s;
            this._se = doc.getElementById(STYLE_ID) || doc.createElement("style");
            this._se.id = STYLE_ID;
            this._se.innerHTML = SHARED_STYLE;
            doc.head.appendChild(this._se);
        }
    }

    Adapter.prototype = {
        /**
         * 核心重排方法：根据当前模式和尺寸计算缩放比例并应用样式
         * @private
         */
        _relayout() {
            // 如果适配器已销毁或模式为none，则不执行重排
            if (this._iD || this.mode === Mode.none) return;

            var self = this;

            // 等待DOM加载完成
            if (!doc.body) {
                var s = "DOMContentLoaded";
                doc.addEventListener(s, function fn() {
                    if (!self._iD) self._relayout();
                    doc.removeEventListener(s, fn);
                });
                return;
            }

            var sw = this.sourceWidth;
            var sh = this.sourceHeight;

            // 获取当前屏幕尺寸
            var de = doc.documentElement;
            var SW = de.clientWidth;
            var SH = de.clientHeight;

            // 计算居中偏移量
            var ML = (SW - sw) / 2;
            var MT = (SH - sh) / 2;

            // 计算缩放比例向量
            var SV = {
                x: SW / sw,
                y: SH / sh
            };

            // 统一缩放比例的辅助函数
            var us = function (fn) {
                var scale = fn(SV.x, SV.y);
                SV.x = SV.y = scale;
            };

            // 根据不同模式计算缩放比例
            switch (this.mode) {
                case Mode.cover:
                    // 覆盖模式：使用较大的缩放比例，可能会裁剪内容
                    us(Math.max);
                    break;
                case Mode.contain:
                    // 包含模式：使用较小的缩放比例，确保内容完全可见
                    us(Math.min);
                    break;
                case Mode.fixedWidth:
                    // 固定宽度模式：Y轴缩放跟随X轴
                    SV.y = SV.x;
                    break;
            }

            // CSS前缀添加辅助函数
            function addPrefix(prop) {
                return "-webkit-" + prop + " -moz-" + prop + " -ms-" + prop + " " + prop;
            }

            var ifw = this.mode === Mode.fixedWidth
            var to = "transform-origin: center ";
            // 默认的元素样式（居中显示）
            var rs = [
                "left:" + ML + "px",
                "top:" + (ifw ? 0 : MT) + "px",
                "width:" + sw + "px",
                "height:" + ((sh || ifw) ? `${sh}px` : "auto"),
                "min-height:" + ifw ? ((1 / SV.y * 100) + "%") : (sh ? "auto" : "100%"),
                addPrefix(to + ifw ? "top;" : "center;")
            ].join("; ");

            // 应用计算出的样式到元素
            this._se.innerHTML = [
                SHARED_STYLE,
                "[" + this._s + "]{position:absolute;display:block;" + rs + addPrefix("transform: scale(" + SV.x + ", " + SV.y + ");") + "}"
            ].join("");

            // 设置元素的缩放向量
            this.scaleVector = { x: SV.x, y: SV.y };

            // 异步移除遮罩，避免样式应用前的闪烁
            setTimeout(function () {
                self._el.removeAttribute("sa-cloak")
            }, 33.33);

            // 初始化resize事件监听器（仅执行一次）
            if (!this._rc) {
                this._rc = () => {
                    // 使用防抖机制，避免频繁的重排操作
                    clearTimeout(this._dt);
                    this._dt = setTimeout(function () {
                        self._relayout()
                    }, 33.33);
                };
                win.addEventListener("resize", this._rc);
            }
        },
        setMode(mode, options) {
            if (this._iD) throw new Error();

            // 重置当前状态
            this.reset();

            // 如果是none模式，直接移除遮罩并返回
            if (mode === Mode.none) {
                setTimeout(function () {
                    this._el.removeAttribute("sa-cloak");
                }, 33.33);
                return;
            }

            this.mode = mode;

            // 保存设计稿尺寸
            this.sourceWidth = options.width || 0;
            this.sourceHeight = options.height || 0;

            // 执行重排
            this._relayout();
        },
        reset() {
            if (this._iD) throw new Error();

            // 重置模式和尺寸参数
            this.mode = Mode.none;
            this.sourceWidth = 0;
            this.sourceHeight = 0;
            this.scaleVector = { x: 1, y: 1 };

            // 移除resize事件监听器
            if (this._rc) {
                win.removeEventListener("resize", this._rc);
                this._rc = null;
            }

            // 重置样式为初始状态
            this._se.innerHTML = SHARED_STYLE;
        },
        dispose() {
            // 防止重复销毁
            if (this._iD) return;

            this._iD = true;

            // 清理状态
            this.mode = null;

            // 清理DOM元素相关
            this._el.removeAttribute(this._s);
            this._el = null;

            // 移除样式元素
            if (this._se) {
                this._se.remove();
                this._se = null;
            }

            // 移除事件监听器
            if (this._rc) {
                win.removeEventListener("resize", this._rc);
                this._rc = null;
            }

            // 清除防抖定时器，防止内存泄漏
            if (this._dt) {
                clearTimeout(this._dt);
                this._dt = null;
            }
        }
    };

    if (typeof Symbol === "function" && Symbol.dispose) {
        // 确保适配器支持 Symbol.dispose 方法
        Adapter.prototype[Symbol.dispose] = function () {
            this.dispose();
        };
    }

    return Adapter;
})(window, document);

export { Adapter as ScreenAdapter, Mode as ScreenAdapterMode };