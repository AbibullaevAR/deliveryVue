<script setup lang="ts">
import reviewСard from "./ReviewСard.vue";
import type { IReview } from "./ReviewСard.vue"
import { computed, ref, unref } from "vue";

const { reviewsData } = defineProps<{
    reviewsData: IReview[]
}>()

const stepCardShift = 50
const stepGapShift = 5
const currentCardShift = ref(0)
const currentGapShift = ref(0)

const transformCSSExpression = computed(() => `translateX(calc(${unref(currentCardShift)}% + ${unref(currentGapShift)}px))`)

function onNextReview() {
    const isCaruselEndPosition = (reviewsData.length - Math.abs((unref(currentCardShift) / 100))) === 1

    if (isCaruselEndPosition) return

    currentCardShift.value -= stepCardShift
    currentGapShift.value -= stepGapShift
}

function onBackReview() {

    const isCaruselOnStartPosition = (unref(currentCardShift) === 0) && (unref(currentGapShift) === 0)

    if (isCaruselOnStartPosition) return

    currentCardShift.value += stepCardShift
    currentGapShift.value += stepGapShift
}

</script>

<template>
    <div class="reviews">
        <h1>Отзывы</h1>
        <img class="reviews__button-back" src="../assets/reviews__button-back.svg" alt="" @click="onBackReview">
        <div class="reviews__card-wrapper">
            <div class="reviews__card">
                <reviewСard v-for="{ author, text } of reviewsData" :key="review" :author="author" :text="text">
                </reviewСard>
            </div>
        </div>
        <img class="reviews__button-next" src="../assets/reviews__button-next.svg" alt="" @click="onNextReview">
    </div>
</template>

<style scoped>
.reviews {
    position: relative;
}

.reviews__card {
    display: flex;
    justify-content: flex-start;
    column-gap: 24px;
    transition: transform 1s;
    transform: v-bind(transformCSSExpression);
}

.reviews__card-wrapper {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    padding-left: 7px;
}

.reviews__button-back {
    position: absolute;
    top: calc(50% - 60px);
    cursor: pointer;
}

.reviews__button-next {
    position: absolute;
    top: calc(50% - 60px);
    right: 0;
    cursor: pointer;
}

@media (max-width: 1024px) {
    .reviews__card-wrapper {
        padding-left: 0;
    }
}
</style>