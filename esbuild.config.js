import * as esbuild from "esbuild";

const entryPoints = ["./src/index.js"];

const options = {
    entryPoints,
    outfile: "./dist/index.js",
    format: "esm",
    keepNames: true,
    bundle: true,
    minify: true,
    sourcemap: true,
    metafile: true,
    target: "esnext",
    treeShaking: true
}

const result = await esbuild.build(options);
const text = await esbuild.analyzeMetafile(result.metafile, { verbose: true });
console.log(text);