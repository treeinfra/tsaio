import {Config} from "prettier"
import {RollupOptions} from "rollup"
import {CompilerOptions} from "typescript"

export type PrettierOptions = Config

export interface Options {
  prettier?: PrettierOptions
  rollup?: RollupOptions
  ts?: CompilerOptions
}

export function defineConfig(options: Options): Options {
  return options
}
