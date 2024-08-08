import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  base: "https://brandingsolutions.in/",
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
