const easelint = require("../../index");

module.exports = easelint({
  typescript: true,
  jsxPragma: "react",
  eslint: {
    root: true,
  },
});
