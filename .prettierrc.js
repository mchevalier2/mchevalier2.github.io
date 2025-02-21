plugins: ["@shopify/prettier-plugin-liquid"]
printWidth: 150
trailingComma: "es5"

// Allow Prettier in .pre-commit-config.yaml to find plugins.
// https://github.com/prettier/prettier/issues/15085
module.exports = {
  plugins:[
    require.resolve("prettier-plugin-gherkin")
  ],
};
