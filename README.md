# @jyostudio/screen-adapter

屏幕适配库

## 引用

### 浏览器  

以下两个版本任选其一使用  

```HTML
<!-- 推荐版本 -->
<script type="importmap">
  {
    "imports": {
      "@jyostudio/screen-adapter": "https://esm.sh/@jyostudio/screen-adapter"
    }
  }
</script>

<!-- 极致压缩版本 -->
<script type="importmap">
  {
    "imports": {
      "@jyostudio/screen-adapter": "https://esm.sh/@jyostudio/screen-adapter/dist/index-mini.js"
    }
  }
</script>
```

### npm

```BASH
npm i @jyostudio/screen-adapter
```

## 使用方法

```JAVASCRIPT
// 标准版
import { ScreenAdapter, ScreenAdapterMode } from "@jyostudio/screen-adapter";
/**
 * 迷你版  
 * 请注意，如果遇到 ESLint 报错 unable to resolve path to module xxxx 错误，请将文件末尾的 .js 删掉再试
 */
// import { ScreenAdapter, ScreenAdapterMode } from "@jyostudio/screen-adapter/dist/index-mini.js";

window.onload = function () {
  // 创建一个适配器实例，可以传入 selector 或 DOM 元素
  const screenAdapter = new ScreenAdapter("#el" || document.getElementById("#el"));

  // 如果想用 using 语法，也可以这样创建
  // using screenAdapter = new ScreenAdapter("#el" || document.getElementById("#el"));

  /**
   * 设置适配器模式为包含模式，可选值为：  
   * none - 不做适配，相当于调用了 reset  
   * cover - 保证短边填满父元素，但长边可能会被剪裁  
   * contain - 同比缩放，保证长边填满父元素，使元素完整显示  
   * fill - 使元素完全拉伸至填满父元素  
   * fixedWidth - 同比缩放，固定宽度，高度自动变化
   */
  screenAdapter.setMode(ScreenAdapterMode.contain, {
    width: 750, // 设计稿宽度
    height: 1334 // 设计稿高度
  });

  // 如需重置，请调用
  // screenAdapter.reset();

  // 如需销毁，可调用
  // screenAdapter.dispose();

  // 另外，我们提供了几个属性可以简化后续使用
  screenAdapter.sourceWidth // 获取设置的设计稿宽度
  screenAdapter.sourceHeight // 获取设置的设计稿高度
  screenAdapter.mode // 获取当前适配模式
  /**
   * 获取缩放向量  
   * 当适配元素包含 Canvas 时，在 Canvas 上触发的鼠标和触摸位置需要与 scaleVector.x 和 scaleVector.y 相乘才能得到正确坐标
   */
  screenAdapter.scaleVector
};
```

## 双版本区别

默认将引入标准版，该版本采用了高级语法和特性，且更容易进行调试。  
如果是较大的项目请始终引入标准版。  

迷你版则是无所不用其极的进行压缩，使其代码体量压到最小。  
虽然功能没有任何删减，但是不利于调试，如果对体积敏感可使用。  

请注意，两个版本内部实现操作有所不同。  
虽然功能无删减，但是请不要使用非文档中所述的变量和用法（除非你保证不会在两个版本间反复横跳）。

## 许可证

MIT License

Copyright (c) 2025 nivk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.