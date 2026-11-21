import nextVitals from "eslint-config-next/core-web-vitals";
import typescriptEslint from "@typescript-eslint/eslint-plugin";

const config = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", ".vercel/**"]
  },
  ...nextVitals,
  ...typescriptEslint.configs["flat/recommended-type-checked"],
  ...typescriptEslint.configs["flat/stylistic-type-checked"],
  {
    // eslint-plugin-react 7.x version auto-detection uses an API removed in ESLint 10
    settings: { react: { version: "19" } },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports"
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_"
        }
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            attributes: false
          }
        }
      ]
    }
  }
];

export default config;
