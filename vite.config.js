import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";
//import { PORT_WEB, IS_HTTPS } from "./src/common/config";

// https://vite.dev/config/
export default defineConfig({
  server: { https: true, port: 5173 },
  plugins: [react(), mkcert()],
});
