import globals from "globals";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    'max-lines': [
			'error',
			{ max: 10, skipBlankLines: true, skipComments: true },
		],
  },
  ignores:[
    "node_modules/",
  "dist/",
  // "index.js",
  "package.json",
"package-lock.json",
"eslint.config.mjs"
  ]
},
];