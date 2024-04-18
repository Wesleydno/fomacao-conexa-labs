<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router'

interface IHeadlineItem {
    title: string
    description: string
}

const route = useRoute();
const headline = computed(() => (route.meta.headline as IHeadlineItem) ?? { title: '', description: '' });
const isHomePage = computed(() => {
    return route.name === 'Home';
})

</script>

<template>
    <div :class="{ 'headline': true, 'principal': isHomePage }">
        <div class="content-wrapper">
            <h1>{{ headline.title }}</h1>
            <h2 v-if="headline.description">{{ headline.description }}</h2>
        </div>
    </div>
</template>

<style scoped>
.headline {
    background-color: var(--primary-color);
    color: var(--white-color);
    padding: 20px 0;
}

.headline.principal {
    text-align: center;
}

.headline h1 {
    font-size: 1.875rem;
}

.headline h2 {
    font-size: 1.063rem;
}

@media only screen and (max-width: 768px) {
    .headline {
        text-align: center;
    }
}
</style>
