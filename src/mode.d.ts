import Enum from "@jyostudio/enum";

/**
 * 屏幕适配模式
 * @enum
 */
export default class Mode extends Enum {
    /**
     * 无适配  
     * 适配模式为 none 时，屏幕尺寸不受限制，宽高比不受限制。
     */
    static readonly none: Mode;

    /**
     * 剪裁模式  
     * 同比缩放，保证短边填满父元素，但长边可能会被剪裁。
     */
    static readonly cover: Mode;

    /**
     * 同比缩放  
     * 同比缩放，保证长边填满父元素，使元素完整显示。
     */
    static readonly contain: Mode;

    /**
     * 填充模式  
     * 使元素完全拉伸至填满父元素。
     */
    static readonly fill: Mode;

    /**
     * 固定宽度  
     * 同比缩放，固定宽度，高度自动变化。
     */
    static readonly fixedWidth: Mode;
}