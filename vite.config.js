// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Configure the proxy for API requests
      "/api": {
        target: "https://example.com",
        changeOrigin: true, // Changes the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, ""), // Rewrite API calls from /api/clinics to /clinics
      },
    },
  },
});
