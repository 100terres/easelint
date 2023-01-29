const easelint = require("../../index");

module.exports = easelint({
  javascript: true,
  typescript: true,
  jsxPragma: "react",
  eslint: {
    root: true,
  },
});
