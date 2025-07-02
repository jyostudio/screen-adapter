import * as esbuild from "esbuild";

const entryPoints = ["./src-mini/index.js"];

const options = {
    entryPoints,
    outfile: "./dist/index-mini.js",
    format: "esm",
    keepNames: true,
    bundle: true,
    minify: true,
    sourcemap: false,
    metafile: true,
    target: "esnext",
    treeShaking: true
}

const result = await esbuild.build(options);
const text = await esbuild.analyzeMetafile(result.metafile, { verbose: true });
console.log(text);