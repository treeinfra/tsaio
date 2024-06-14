import {Config as PrettierOptions} from "prettier"

export const recommendedPrettierOptions: PrettierOptions = {
  singleQuote: false, // Compare to the template literals (`xxx`).
  semi: false, // TypeScript prefers no semicolon.
  bracketSameLine: false, // Save line width space.
  vueIndentScriptAndStyle: true, // Make vue easier to read.
}
