import {Config as PrettierConfig} from "prettier"
import {RollupOptions} from "rollup"
import {CompilerOptions} from "typescript"
import {UserConfig as ViteUserOptions} from "vite"

export {RollupOptions} from "rollup"

export type PrettierOptions = PrettierConfig
export type ViteOptions = ViteUserOptions

export interface Options {
  prettier?: PrettierOptions
  rollup?: RollupOptions | RollupOptions[]
  vite?: ViteOptions
  ts?: CompilerOptions
}

export const recommendedPrettierOptions: PrettierOptions = {
  semi: false, // TypeScript prefers no semicolon.
  bracketSameLine: false, // Save line width space.
  vueIndentScriptAndStyle: true, // Make vue easier to read.
}

export interface RollupBaseOptions {
  lib?: string | Map<string, string>
  bin?: string | Map<string, string>
}

export function rollupOptions(
  options: RollupBaseOptions,
): undefined | RollupOptions | RollupOptions[] {
  return undefined
}

export function defineConfig(options: Options): Options {
  options.prettier = options.prettier ?? recommendedPrettierOptions
  return options
}
