<script setup lang="ts" generic="T extends keyof TInput, TInputValue extends TInput[T]">

import { unref, ref, watch, toRefs } from 'vue'
import { textValidator, numberValidator, emailValidator, phoneValidator } from './validators'
import type { Ref } from 'vue'
import type { TInput } from './types'

interface IProps<T, U> {
    inputFormat: T,
    value: U,
    placeholder: string
}

const props = defineProps<IProps<T, TInputValue>>()

const emit = defineEmits<{
    (e: 'update:value', value: TInputValue): void
}>()

const { inputFormat, value: initInputValue, placeholder } = toRefs<IProps<T, TInputValue>>(props)

const inputValue = ref(unref(initInputValue)) as Ref<string>
const isValidValue = ref(true)

watch(
    inputValue,
    () => {
        isValidValue.value = validateInputValue(unref(inputValue))

        if (unref(isValidValue)) emit('update:value', unref(inputValue) as TInputValue)

    },
    { immediate: true }
)

function validateInputValue(value: string): boolean {

    if (unref(inputFormat) === 'text') return textValidator(value)
    if (unref(inputFormat) === 'email') return emailValidator(value)
    if (unref(inputFormat) === 'number') return numberValidator(value)
    if (unref(inputFormat) === 'phone') return phoneValidator(value)

    return false
}

</script>

<template>
    <input :class="{ 'input_warning': !isValidValue }" type="text" :placeholder="placeholder" v-model="inputValue">
</template>

<style scoped>
.input_warning {
    border: 2px solid red;
}

input:focus {
    outline-color: rgba(139, 92, 246, 1);
}

input:focus::placeholder {
    color: rgba(139, 92, 246, 1);
}

input {
    border: 2px solid rgba(17, 24, 39, 1);
    border-radius: 5px;
}
</style>