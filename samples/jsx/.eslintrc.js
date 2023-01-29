const easelint = require("../../index");

module.exports = easelint({
  javascript: true,
  jsxPragma: "react",
  eslint: {
    root: true,
  },
});
