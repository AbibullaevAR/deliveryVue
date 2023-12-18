<script setup lang="ts">
import { ref } from 'vue'
import IconLogo from '@/components/icons/IconLogo.vue'
const color = ref('red')
</script>

<template>
    <div class="logo-name">
        <IconLogo></IconLogo>
        <div><span>FromBoard Delivery</span></div>
    </div>
</template>

<style scoped>
.logo-name {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>