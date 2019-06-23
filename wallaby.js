/* eslint-disable */
module.exports = function(wallaby) {
  return {
    files: [
      "features/**/*.js?(x)",
      "components/**/*.js?(x)",
      "sideEffects/**/*.js?(x)",
      "pages/**/*.js?(x)"
    ],

    tests: ["**/*.test.js?(x)", "!node_modules/**/*.test.js?(x)"],

    testFramework: "jest",
    debug: true,

    env: {
      type: "node",
      runner: "node"
    },

    compilers: {
      "**/*.js?(x)": wallaby.compilers.babel({
        babelrc: true,
        plugins: [
          [
            "module-resolver",
            {
              root: ["./"],
              alias: {
                components: "./components",
                sideEffects: "./sideEffects",
                features: "./features",
                pages: "./pages"
              }
            }
          ]
        ]
      })
    }
  };
};
