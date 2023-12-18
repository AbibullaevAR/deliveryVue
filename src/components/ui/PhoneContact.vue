<script setup lang="ts">

const { textColor } = defineProps<{
    textColor: 'white' | 'black'
}>()

</script>

<template>
    <div class="phone-contact" :style="{ color: textColor }">
        <a class="phone-contact__phone" href="tel:+79001111111">+7 (800) 123 45-67</a>
        <p>
            Звонки по России бесплатны
        </p>
    </div>
</template>

<style scoped>
.phone-contact__phone {
    text-decoration: none;
    color: inherit;
    font-size: 23px;
}
</style>