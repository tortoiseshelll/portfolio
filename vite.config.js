import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["leontine-stipellate-remunerably.ngrok-free.dev"],
  },
});
