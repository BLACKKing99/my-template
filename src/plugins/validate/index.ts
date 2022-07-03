import * as veeVaildata from 'vee-validate'
import rules from '@vee-validate/rules'
import { loadLocaleFromURL, localize } from '@vee-validate/i18n'
import * as yup from 'yup'

loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json')

veeVaildata.configure({
  generateMessage: localize('zh_CN')
})

Object.keys(rules).forEach(key => {
  veeVaildata.defineRule(key, rules[key])
})

const module = { yup, ...veeVaildata }

export default module
