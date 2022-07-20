import { ConfigEnv, loadEnv } from 'vite'
// import { alais } from './vite/alias'
import { alias } from './viteconfig/alias'
import { parseEnv } from './viteconfig/util'
import { server } from './viteconfig/server'
import css from './viteconfig/css'
import setupVitePlugin from './viteconfig/plugin/index'

// https://vitejs.dev/config/

export default ({ command, mode }:ConfigEnv) => {
  // 处理配置项 .env
  const isBuild = command === 'build'
  const root = process.cwd()
  // 初始化env 并且转化成真正的类型
  const env = parseEnv(loadEnv(mode, root))
  return {
    resolve: {
      alias
    },
    server,
    plugins: setupVitePlugin(isBuild, env),
    css
  }
}
