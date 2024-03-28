module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "airbnb/hooks",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint", "react"],
    "rules": {
        "prettier/prettier": ["error", {"endOfLine": "auto"}],
        "@typescript-eslint/no-explicit-any": "off",
        "react/jsx-filename-extension": [
            2,
            { "extensions": [".js", ".jsx", ".ts", ".tsx"]}
        ],
        "import/no-unresolved": "off",
        "react/prefer-stateless-function": "off",
        "react/static-property-placement": "off",
        
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "warn",

        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "": "never",
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"

            }
        ],
        "import/prefer-default-export": "off"
    },
    "overrides": [
        {
            "files": ["*.tsx"],
            "rules": {
                "import/prefer-default-export": "error"
            }
        },
        {
            "files": ["*scheme.ts", "*Scheme.ts"],
            "rules": {
                "no-redeclare": "off"
            }
        }
    ],
    "globals": {
        "__DEV__": "readonly"
    }
}