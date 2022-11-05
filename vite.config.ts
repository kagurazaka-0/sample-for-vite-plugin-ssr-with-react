import vercelSsr from "@magne4000/vite-plugin-vercel-ssr"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import ssr from "vite-plugin-ssr/plugin"
import vercel from "vite-plugin-vercel"

export default defineConfig({
  plugins: [react(), ssr(), vercel(), vercelSsr()],
  vercel: {},
})
