import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  base: "/the_bard_jukebox/",
  plugins: [vue(), vueJsx(), vueDevTools()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/main.scss";`,
      },
    },
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
