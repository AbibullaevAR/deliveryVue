<script setup lang="ts">
const { header, description } = defineProps<{
    header: string,
    description: string
}>()

</script>

<template>
    <div class="advantages-card">
        <slot></slot>
        <div class="advantages-card__text">
            <h3>{{ header }}</h3>
            <span>{{ description }}</span>
        </div>
    </div>
</template>

<style scoped>
.advantages-card {
    max-width: 500px;
    display: flex;
    justify-content: center;
    column-gap: 15px;

    font-size: 14px;
    padding: 20px;
}
</style>