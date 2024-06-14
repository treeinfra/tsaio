import {Config as PrettierConfig} from "prettier"
import {RollupOptions} from "rollup"
import {CompilerOptions} from "typescript"
import {UserConfig as ViteUserOptions} from "vite"
import {PackageManifest, parsePackageJson} from "./parse.js"

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
  /**
   * Once this property is `string`, {@link bin} cannot be `string`,
   * that you can only config binary outputs
   * using the `bin` field in "package.json".
   * And it will refer to the following properties parsed from "package.json"
   * to generate {@link RollupOptions} using the {@link rollupOptions} function:
   *
   * - `main`: output commonjs library file path.
   * - `module`: output esm library file path.
   * - `types`: output dts (type declare) file path.
   */
  lib?: string | Map<string, string>

  /**
   * Once this property is `string`, {@link lib} cannot be `string`,
   * that you can only use the `exports` field in "package.json
   * to specify the library output file paths.
   * And it will refer to the following properties parsed from "package.json"
   * to generate {@link RollupOptions} using the {@link rollupOptions} function:
   *
   * - `main`: output commonjs executable file path.
   * - `module`: output esm executable file path.
   */
  bin?: string | Map<string, string>
}

export function rollupOptions(
  options: RollupBaseOptions,
  packageManifest?: PackageManifest,
): undefined | RollupOptions | RollupOptions[] {
  const manifest = packageManifest ?? parsePackageJson()
  return undefined
}

export function defineConfig(options: Options): Options {
  options.prettier = options.prettier ?? recommendedPrettierOptions
  return options
}
