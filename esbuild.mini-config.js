import * as esbuild from "esbuild";

const entryPoints = ["./src-mini/index.js"];

const options = {
    entryPoints,
    outfile: "./dist/index-mini.js",
    format: "esm",
    keepNames: false, // 允许重命名，减小体积
    bundle: true,
    minify: true,
    sourcemap: true,
    metafile: true,
    target: "es2020", // 更低的目标版本，更好的压缩
    treeShaking: true,
    // 额外的压缩选项
    legalComments: "none", // 移除法律注释
    drop: ["console", "debugger"], // 移除console和debugger
    mangleProps: /^_/, // 混淆以_开头的私有属性名
}

const result = await esbuild.build(options);
const text = await esbuild.analyzeMetafile(result.metafile, { verbose: true });
console.log(text);