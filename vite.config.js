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
        "./AuthApp": "./src/App.jsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "@auth0/auth0-react": { singleton: true, requiredVersion: "^2.3.0" },
        zustand: { singleton: true },
      },
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 4005,
  },
});
