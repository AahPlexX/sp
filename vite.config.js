import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const pagesBasePath = "/sp/";

export { pagesBasePath };

export default defineConfig({
  base: pagesBasePath,
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: "es2022"
  }
});
