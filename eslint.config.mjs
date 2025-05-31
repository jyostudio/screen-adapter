import globals from "globals";
import pluginPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            globals: globals.browser
        },
        files: ["**/*.js"],
        rules: {
            indent: ["error", 4],
            quotes: ["error", "double"],
            semi: ["error", "always"],
            "comma-dangle": ["error", "never"],
            "object-curly-newline": ["error", { multiline: true, consistent: true }],
            "function-paren-newline": ["error", "multiline"],
            "no-unused-vars": "warn",
            "no-empty": "warn",
            "prefer-const": "warn",
            camelcase: "error",
            "no-duplicate-imports": "error",
            "prefer-template": "warn",
            "no-self-assign": "off",
            "no-global-assign": "warn",
            "new-cap": "error",
            "eqeqeq": "error",
            "dot-notation": "error",
            "camelcase": "error",
            "use-isnan": "error",
            "valid-typeof": "error",
            "no-unused-private-class-members": "warn",
            "no-unsafe-optional-chaining": "warn",
            "no-unreachable": "warn",
            "no-this-before-super": "error",
            "no-obj-calls": "error",
            "no-loss-of-precision": "error",
            "no-irregular-whitespace": "warn",
            "no-const-assign": "error",
            "no-class-assign": "error",
            "no-restricted-globals": ["error", {
                "name": "window",
                "message": "请使用全局变量 globalThis"
            }, {
                    "name": "self",
                    "message": "请使用全局变量 globalThis"
                }]
        }
    },
    pluginPrettier
];