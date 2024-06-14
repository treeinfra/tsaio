import {Config} from "prettier"

type PrettierOptions = Config

export interface Options {
  prettier?: PrettierOptions
}

export function defineConfig(options: Options): Options {
  return options
}
