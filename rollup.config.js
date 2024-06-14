import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import {readFileSync} from "node:fs"
import {join} from "node:path"
import {defineConfig} from "rollup"
import dts from "rollup-plugin-dts"

const srcDir = "src"
const input = join(srcDir, "index.ts")
const external = ["node:fs", "node:path"]
const manifest = JSON.parse(readFileSync("package.json").toString())
const compilerOptions =
  JSON.parse(readFileSync("tsconfig.json").toString())["compilerOptions"] ?? {}

const buildBin = defineConfig({
  plugins: [typescript({compilerOptions}), terser()],
  external,
  input: join(srcDir, "main.ts"),
  output: {file: manifest["bin"]["tsaio"], format: "esm"},
})

const buildLib = defineConfig({
  plugins: [
    typescript({compilerOptions: {...compilerOptions, sourceMap: true}}),
    terser(),
  ],
  input,
  external,
  output: [
    {file: manifest["module"], format: "esm", sourcemap: true},
    {file: manifest["main"], format: "commonjs", sourcemap: true},
  ],
})

const buildLibDts = defineConfig({
  plugins: [dts({compilerOptions: {}})],
  input,
  external,
  output: {file: manifest["types"], format: "esm"},
})

export default defineConfig([buildBin, buildLib, buildLibDts])
