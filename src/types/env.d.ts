/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
interface IViteEnv {
  VITE_APP_AUTOLOAD:boolean
  VITE_APP_API:string
}

interface ImportMetaEnv extends IViteEnv{}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
readonly env: ImportMetaEnv
}
