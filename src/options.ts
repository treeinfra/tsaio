import {Config as PrettierConfig} from "prettier"
import {RollupOptions as BaseRollupOptions} from "rollup"
import {CompilerOptions} from "typescript"
import {UserConfig as ViteUserOptions} from "vite"

export type PrettierOptions = PrettierConfig
export type ViteOptions = ViteUserOptions
export type SingleRollupOptions = BaseRollupOptions

export interface RollupOptions {
  lib?: SingleRollupOptions
  bin?: SingleRollupOptions | SingleRollupOptions[]
}

export interface Options {
  prettier?: PrettierOptions
  rollup?: RollupOptions
  vite?: ViteOptions
  ts?: CompilerOptions
}

export const recommendedPrettierOptions: PrettierOptions = {
  semi: false, // TypeScript prefers no semicolon.
  bracketSameLine: false, // Save line width space.
  vueIndentScriptAndStyle: true, // Make vue easier to read.
}

export function defineConfig(options: Options): Options {
  options.prettier = options.prettier ?? recommendedPrettierOptions
  return options
}
