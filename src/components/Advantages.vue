<script setup lang="ts">
import AdvantagesCard from './AdvantagesCard.vue';

type TCardData = {
    header: string,
    description: string,
    iconLinck: string
}

const { advantagesCardsData } = defineProps<{
    advantagesCardsData: TCardData[]
}>()
</script>

<template>
    <h1>Наши приимущества</h1>
    <AdvantagesCard v-for="cardData of advantagesCardsData" :key="cardData.header" :header="cardData.header"
        :description="cardData.description">
        <img :src="cardData.iconLinck" alt="">
    </AdvantagesCard>
</template>