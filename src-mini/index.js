var Mode = (function () {
    function Mode() { }
    // 使用forEach替代map，因为不需要返回值
    ["none", "cover", "contain", "fill", "fixedWidth"].forEach(function (v) {
        Mode[v] = new Mode();
    });
    return Mode;
})();

var Adapter = (function (w, d) {
    /**
     * 共享样式：用于在适配过程中隐藏元素，避免闪烁
     */
    var SS = "[sa-cloak]{display:none !important;}";

    /**
     * 检查是否在客户端渲染环境（浏览器环境）
     */
    var CSR = !!d;

    // Symbol.dispose 支持
    typeof Symbol === "function" && !Symbol.dispose && (Symbol.dispose = Symbol.for("Symbol.dispose"));

    // 计数器
    var c = 0;

    function Adapter(selector) {
        this._iD = false; // 适配器是否已被释放
        this._s = "sa-" + ++c; // 适配器的唯一标识符
        this._el = null; // 绑定的元素
        this._se = null; // 样式元素
        this._rc = null; // 重排回调函数
        this._dt = null; // 防抖定时器
        this.mode = Mode.none; // 适配模式
        this.sourceWidth = 0; // 设计稿的宽度
        this.sourceHeight = 0; // 设计稿的高度
        this.scaleVector = { x: 1, y: 1 }; // 缩放向量

        // 检查参数是否存在
        if (!selector) throw new Error("Selector parameter is required");

        // 非客户端渲染环境直接返回
        if (!CSR) return;

        var el;
        // 处理字符串选择器
        if (typeof selector === "string") {
            el = d.querySelector(selector);
            if (!el) throw new Error("Element not found for selector: " + selector);
        } 
        // 处理DOM元素
        else if (typeof selector === "object" && selector instanceof HTMLElement) {
            el = selector;
        } 
        // 无效参数类型
        else {
            throw new Error("Invalid selector type. Expected string or HTMLElement");
        }

        this._el = el;
        // 为元素添加唯一标识属性
        el.setAttribute(this._s, "");

        // 创建样式元素
        var sid = "style-" + this._s;
        this._se = d.getElementById(sid);
        if (!this._se) {
            this._se = d.createElement("style");
            this._se.id = sid;
            this._se.innerHTML = SS;
            d.head.appendChild(this._se);
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
            if (!d.body) {
                var fn = function() {
                    if (!self._iD) self._relayout();
                    d.removeEventListener("DOMContentLoaded", fn);
                };
                d.addEventListener("DOMContentLoaded", fn);
                return;
            }

            var sw = this.sourceWidth;
            var sh = this.sourceHeight;

            // 获取当前屏幕尺寸
            var de = d.documentElement;
            var SW = de.clientWidth;
            var SH = de.clientHeight;

            // 计算缩放比例向量
            var sv = {
                x: SW / sw,
                y: SH / sh
            };

            // 根据不同模式计算缩放比例
            var s;
            switch (this.mode) {
                case Mode.cover:
                    // 覆盖模式：使用较大的缩放比例，可能会裁剪内容
                    s = Math.max(sv.x, sv.y);
                    sv.x = sv.y = s;
                    break;
                case Mode.contain:
                    // 包含模式：使用较小的缩放比例，确保内容完全可见
                    s = Math.min(sv.x, sv.y);
                    sv.x = sv.y = s;
                    break;
                case Mode.fixedWidth:
                    // 固定宽度模式：Y轴缩放跟随X轴
                    sv.y = sv.x;
                    break;
            }

            // 计算居中偏移量
            var ml = (SW - sw) / 2;
            var mt = (SH - sh) / 2;
            var fw = this.mode === Mode.fixedWidth;

            // CSS前缀添加辅助函数
            function ap(p) {
                return "-webkit-" + p + " -moz-" + p + " -ms-" + p + " " + p;
            }

            // 构建样式规则
            var to = "transform-origin: center " + (fw ? "top;" : "center;");
            var es = [
                "left:" + ml + "px",
                "top:" + (fw ? 0 : mt) + "px",
                "width:" + sw + "px",
                "height:" + (sh || fw ? sh + "px" : "auto"),
                "min-height:" + (fw ? ((1 / sv.y * 100) + "%") : (sh ? "auto" : "100%")),
                ap(to)
            ].join("; ");

            var ts = ap("transform: scale(" + sv.x + ", " + sv.y + ");");

            // 应用计算出的样式到元素
            this._se.innerHTML = SS + "[" + this._s + "]{position:absolute;display:block;" + es + ts + "}";

            // 设置元素的缩放向量
            this.scaleVector = { x: sv.x, y: sv.y };

            // 异步移除遮罩，避免样式应用前的闪烁
            setTimeout(function () {
                self._el && self._el.removeAttribute("sa-cloak");
            }, 33.33);

            // 初始化resize事件监听器（仅执行一次）
            if (!this._rc) {
                this._rc = function() {
                    // 使用防抖机制，避免频繁的重排操作
                    clearTimeout(self._dt);
                    self._dt = setTimeout(function () {
                        self._relayout();
                    }, 33.33);
                };
                w.addEventListener("resize", this._rc);
            }
        },
        /**
         * 设置适配模式
         * @param {Object} mode - 适配模式
         * @param {Object} options - 配置选项，包含width和height
         */
        setMode(mode, options) {
            if (this._iD) throw new Error("Adapter has been disposed");

            // 确保options是对象
            options = options || {};

            // 重置当前状态
            this.reset();

            // 如果是none模式，直接移除遮罩并返回
            if (mode === Mode.none) {
                var self = this;
                setTimeout(function () {
                    self._el && self._el.removeAttribute("sa-cloak");
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
        /**
         * 重置适配器状态
         */
        reset() {
            if (this._iD) throw new Error("Adapter has been disposed");

            // 重置模式和尺寸参数
            this.mode = Mode.none;
            this.sourceWidth = 0;
            this.sourceHeight = 0;
            this.scaleVector = { x: 1, y: 1 };

            // 移除resize事件监听器
            if (this._rc) {
                w.removeEventListener("resize", this._rc);
                this._rc = null;
            }

            // 清除防抖定时器
            if (this._dt) {
                clearTimeout(this._dt);
                this._dt = null;
            }

            // 重置样式为初始状态
            this._se && (this._se.innerHTML = SS);
        },
        /**
         * 销毁适配器，释放所有资源
         */
        dispose() {
            // 防止重复销毁
            if (this._iD) return;

            this._iD = true;

            // 清理状态
            this.mode = null;

            // 清理DOM元素相关
            if (this._el) {
                this._el.removeAttribute(this._s);
                this._el = null;
            }

            // 移除样式元素
            if (this._se) {
                this._se.remove();
                this._se = null;
            }

            // 移除事件监听器
            if (this._rc) {
                w.removeEventListener("resize", this._rc);
                this._rc = null;
            }

            // 清除防抖定时器，防止内存泄漏
            if (this._dt) {
                clearTimeout(this._dt);
                this._dt = null;
            }
        }
    };

    // 确保适配器支持 Symbol.dispose 方法
    typeof Symbol === "function" && Symbol.dispose && (Adapter.prototype[Symbol.dispose] = function () {
        this.dispose();
    });

    return Adapter;
})(window, document);

export { Adapter as ScreenAdapter, Mode as ScreenAdapterMode };