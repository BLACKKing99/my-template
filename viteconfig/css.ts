import { CSSOptions } from 'vite'

const CSS:CSSOptions = {
  preprocessorOptions: {
    scss: {
      additionalData: '@import "@/styles/variable.scss";'
    }
  }
}

export default CSS
