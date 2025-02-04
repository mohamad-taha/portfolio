import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  esbuild: {
    drop: ["console", "debugger"],
    minify: true,
  },
  build: {
    minify: "esbuild",
    cssCodeSplit: true,
  },
});
