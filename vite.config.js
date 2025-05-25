import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "authApp",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: { target: "esnext" },
  server:{
    port : 4005
  }
});
