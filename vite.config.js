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
      shared: ["react", "react-dom"],
    }),
  ],
  build: { target: "esnext" , modulePreload : false , minify : false , cssCodeSplit : false },
  server: {
    port: 4005,
    cors : {
      origin : ["http://localhost:4008" , "https://chatsyn.netlify.app"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ['*'],
      credentials: true
    }
  },
});
