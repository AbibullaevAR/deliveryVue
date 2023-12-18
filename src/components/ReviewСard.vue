<script setup lang="ts">

export interface IReview {
    author: string,
    text: string
}

const { author, text } = defineProps<IReview>()
</script>

<template>
    <div class="reviews-card">
        <p>{{ text }}</p>
        <span class="reviews-card__author">{{ author }}</span>
        <img class="reviews-card__quotes" src="../assets/rewards_quotes.svg" alt="">
    </div>
</template>

<style scoped>
.reviews-card {
    background: aqua;
    position: relative;
    flex: 1 0 calc(50% - 18px);
    width: 100%;
    height: 296px;
    border-radius: 16px;
    padding: 16px;
    font-size: 20px;
    font-weight: 700;
}

.reviews-card__author {
    position: absolute;
    bottom: 16px;
}

.reviews-card__quotes {
    position: absolute;
    right: 16px;
    bottom: 16px;
}

@media (max-width: 1024px) {
    .reviews-card {
        flex-basis: 100%;
    }
}
</style>