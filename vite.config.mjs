import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    outDir: "dist",
    commonjsOptions: { transformMixedEsModules: true }, // Change
  },
  define: { 'process.env': process.env, },
});
