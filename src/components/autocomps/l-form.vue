<template>
  <Form
    class="l-form"
    :validation-schema="rules"
    @submit="submit"
  >
    <template
      v-for="item in formLayout"
      :key="item.name"
    >
      <Field
        v-slot="field"
        :name="item.name"
        :validate-on-input="item.trigger === 'change'?true:false"
        :validate-on-blur="item.trigger === 'blur'?true:false"
        :label="item.label"
      >
        <div
          class="field-item"
          :class="field.meta.valid?'mb-5':'mb-3'"
        >
          <!-- :class="!field.meta.valid ?'error-input':''" -->
          <input
            :placeholder="item.placeholder"
            class="l-input"
            type="text"
            v-bind="field.field"
          >
          <div
            class="error-msg"
            v-if="field.errorMessage"
          >
            {{ field.errorMessage }}
          </div>
        </div>
      </Field>
    </template>
    <l-button />
  </Form>
</template>

<script lang='ts' setup>
import validate from '@/plugins/validate'
import { SubmissionHandler } from 'vee-validate'
import { PropType } from 'vue'
import { IFormLayout } from './types/LForm'

const { Form, Field } = validate
defineProps({
  formLayout: {
    type: Array as PropType<IFormLayout[]>,
    required: true
  },
  rules: {
    type: Object,
    default: () => {}
  },
  submit: {
    type: Function as PropType<SubmissionHandler>,
    default: () => {}
  }
})
</script>

<style scoped lang='scss'>
.l-form{
    @apply w-full;
    .field-item{
        .l-input{
            @apply w-full  border placeholder:text-sm px-1 py-1 duration-300 outline-none text-slate-500 rounded-sm focus:outline-offset-1 focus:outline-teal-400 focus:border-white;
        }
        .error-input{
            @apply  outline-red-500 outline-offset-1 border-white;
        }
        .error-msg{
            @apply mt-1 py-1 h-7 rounded-sm text-sm bg-red-200 text-red-500 font-sans px-2 font-semibold
        }
    }
}
</style>
