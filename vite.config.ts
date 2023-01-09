import _ from "lodash"
import {defineConfig, loadEnv} from "vite"
import react from "@vitejs/plugin-react"
import TsconfigPaths from "vite-tsconfig-paths"
import WindiCSS from "vite-plugin-windicss"
import PluginRewriteAll from "vite-plugin-rewrite-all"


export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd())

  if (_.isEmpty(env)) throw new Error(`Please, provide ${mode} environment!`)

  return {
    server: {
      host: true,
      port: Number(env.VITE_PORT),
    },
    plugins: [react(), TsconfigPaths(), WindiCSS(), PluginRewriteAll()],
  }
})
