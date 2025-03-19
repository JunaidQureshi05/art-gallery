const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@scss": path.resolve(__dirname, "src/scss"), // ✅ Create alias for SCSS files
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
};
