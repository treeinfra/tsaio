import {readFileSync} from "node:fs"
import {join} from "node:path"

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
