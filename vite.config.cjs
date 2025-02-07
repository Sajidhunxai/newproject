const { defineConfig } = require('vite');

module.exports = defineConfig({
  css: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
      ],
    },
  },
});
