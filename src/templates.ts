import {Config as PrettierOptions} from "prettier"

export const recommendedPrettierOptions: PrettierOptions = {
  semi: false, // TypeScript prefers no semicolon.
  bracketSameLine: false, // Save line width space.
  vueIndentScriptAndStyle: true, // Make vue easier to read.
}
