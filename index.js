const spready = require("@potloc/spready");

module.exports = (config) => {
  const { typescript, javascript, jsxPragma, eslint = {} } = config;

  if (jsxPragma !== undefined && jsxPragma !== "react") {
    throw new Error(
      "Only react is supported as a jsx pragma. We'll support more in the feature."
    );
  }

  const react = jsxPragma === "react";

  return {
    ...eslint,
    extends: [
      "./src/internal/base",
      ...spready(["./src/js"]).if(javascript),
      ...spready(["./src/ts"]).if(typescript),
      ...spready(["./src/jsx"]).if(react && javascript),
      ...spready(["./src/tsx"]).if(react && typescript),
      ...spready(() => eslint.extends).if(eslint.extends),
    ].map(require.resolve),
  };
};
