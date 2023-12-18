<script setup lang="ts">
import { toRefs } from "vue"

enum AvailableColorForItems {
    black = 'black',
    white = 'white'
}

interface IProps {
    items: String[],
    itemColor?: AvailableColorForItems
}

const props = withDefaults(defineProps<IProps>(), {
    itemColor: AvailableColorForItems.black
})

const { items, itemColor } = toRefs(props)

</script>

<template>
    <nav class="main-navigation">
        <p class="main-navigation__item" v-for="item of items" :key="item">{{ item }}</p>
    </nav>
</template>

<style scoped>
.main-navigation {
    display: flex;
    column-gap: 10px;
}

.main-navigation__item {
    cursor: pointer;
    color: v-bind(itemColor);
}

.main-navigation__item:hover {
    color: rgba(139, 92, 246, 1);
}
</style>