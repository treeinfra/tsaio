import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import {readFileSync} from "node:fs"
import {join} from "node:path"
import {defineConfig} from "rollup"
import dts from "rollup-plugin-dts"

const outDir = "out"
const srcDir = "src"
const input = join(srcDir, "index.ts")
const external = ["node:fs", "node:path"]
const compilerOptions =
  JSON.parse(readFileSync("tsconfig.json").toString())["compilerOptions"] ?? {}

const buildBin = defineConfig({
  plugins: [typescript({compilerOptions}), terser()],
  external,
  input: join(srcDir, "main.ts"),
  output: {file: join(outDir, "main.js"), format: "esm"},
})

const buildLib = defineConfig({
  plugins: [
    typescript({compilerOptions: {...compilerOptions, sourceMap: true}}),
    terser(),
  ],
  input,
  external,
  output: [
    {file: join(outDir, "index.js"), format: "esm", sourcemap: true},
    {file: join(outDir, "index.cjs"), format: "commonjs", sourcemap: true},
  ],
})

const buildLibDts = defineConfig({
  plugins: [dts({compilerOptions: {}})],
  input,
  external,
  output: {file: join(outDir, "index.d.ts"), format: "esm"},
})

export default defineConfig([buildBin, buildLib, buildLibDts])
