import js from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["dist", "node_modules", "src/generated/prisma"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts"],

    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
      },
    },

    plugins: {
      import: importPlugin,
    },

    rules: {
      "no-console": "warn",

      "no-unused-vars": "off",

      "@typescript-eslint/no-unused-vars": ["warn"],

      "@typescript-eslint/explicit-function-return-type": "off",

      "@typescript-eslint/no-explicit-any": "warn",

      "import/no-unresolved": "error",

      "import/extensions": "off",
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
];