import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import {join} from "node:path"
import {defineConfig} from "rollup"
import dts from "rollup-plugin-dts"

const outDir = "out"
const srcDir = "src"
const libEntry = join(srcDir, "index.ts")

const buildLib = defineConfig({
  plugins: [typescript(), terser()],
  input: libEntry,
  output: [
    {file: join(outDir, "index.js"), format: "esm", sourcemap: true},
    {file: join(outDir, "index.cjs"), format: "commonjs", sourcemap: true},
  ],
})

const buildLibDts = defineConfig({
  plugins: [dts({compilerOptions: {}})],
  input: libEntry,
  output: {file: join(outDir, "index.d.ts"), format: "esm"},
})

export default defineConfig([buildLib, buildLibDts])
