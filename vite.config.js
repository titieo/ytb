import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/ytb/",
  plugins: [svelte()],
  server: {
    open: true,
  },
  build: {
    outDir: path.join(__dirname, "website"),
  },
});
