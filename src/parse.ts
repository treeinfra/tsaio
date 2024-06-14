import {readFileSync} from "node:fs"
import {join} from "node:path"
import {RollupOptions} from "rollup"

export interface PackageManifest {
  esm: boolean
}

export function parsePackageJson(root: string = "."): PackageManifest {
  const path = join(root, "package.json")
  const content = readFileSync(path)
  const module = JSON.parse(content.toString())
  return {
    esm: module["type"] === "module",
  }
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
