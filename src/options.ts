import {Config as PrettierConfig} from "prettier"
import {RollupOptions} from "rollup"
import {CompilerOptions} from "typescript"
import {UserConfig as ViteUserOptions} from "vite"

export type PrettierOptions = PrettierConfig
export type ViteOptions = ViteUserOptions

export interface Options {
  prettier?: PrettierOptions
  rollup?: RollupOptions
  vite?: ViteOptions
  ts?: CompilerOptions
}

export function defineConfig(options: Options): Options {
  return options
}
