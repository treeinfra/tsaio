import {Config as PrettierOptions} from "prettier"
import {RollupOptions} from "rollup"
import {CompilerOptions} from "typescript"
import {UserConfig as ViteOptions} from "vite"
import {recommendedPrettierOptions} from "./templates.js"

export {Config as PrettierOptions} from "prettier"
export {RollupOptions} from "rollup"
export {UserConfig as ViteOptions} from "vite"

export interface Options {
  prettier?: PrettierOptions
  rollup?: RollupOptions | RollupOptions[]
  vite?: ViteOptions
  ts?: CompilerOptions
}

export function defineConfig(options: Options): Options {
  options.prettier = options.prettier ?? recommendedPrettierOptions
  return options
}
