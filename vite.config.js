import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import axios from "axios";
import ReactHTMLParser from "react-html-parser";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
