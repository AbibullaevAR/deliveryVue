<script setup lang="ts">
import Review from '@/components/Review.vue';

const reviewsData = [
    {
        author: 'test',
        text: '1'
    },
    {
        author: 'test',
        text: '2'
    },
    {
        author: 'test',
        text: '3'
    },
    {
        author: 'test',
        text: '4'
    },
    {
        author: 'test',
        text: '5'
    },
    {
        author: 'test',
        text: '6'
    }
]

</script>

<template>
    <main>
        <Review :reviews-data="reviewsData"></Review>
    </main>
</template>

<style scoped>
main {
    margin-left: auto;
    margin-right: auto;
    min-width: 1024px;
}
</style>