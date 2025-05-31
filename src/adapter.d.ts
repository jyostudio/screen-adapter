import Mode from "./mode.d.ts";

/**
 * 屏幕适配器
 * @class
 */
export default class Adapter {
    /**
     * 创建一个屏幕适配器实例
     * @param selector - 元素选择器
     */
    constructor(selector: string);

    /**
     * 创建一个屏幕适配器实例
     * @param element - 目标元素
     */
    constructor(element: HTMLElement);

    /**
     * 设置适配器的模式
     * @param mode - 适配模式
     * @param options - 适配选项
     * @param options.width - 设计稿宽度
     * @param options.height - 设计稿高度
     * @throws {Error} 如果适配器已被销毁或模式不支持
     */
    setMode(mode: Mode, options: { width?: number; height?: number }): void;

    /**
     * 重置适配器
     * @throws {Error} 如果适配器已被销毁
     */
    reset(): void;

    /**
     * 销毁适配器
     */
    dispose(): void;
}