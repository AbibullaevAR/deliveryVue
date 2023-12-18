<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps<{
    buttonText: {
        type: String,
        required: true
    }
}>()

const { buttonText } = toRefs(props);

</script>


<template>
    <input type="button" :value="buttonText" @click="$emit('buttonClick')">
</template>

<style scoped>
input {
    background: rgba(139, 92, 246, 1);
    color: white;
    border: none;
    font-weight: 500;
    font-size: small;
    padding: 10px 28px 10px 28px;
    border-radius: 4px;
    cursor: pointer;
}
</style>