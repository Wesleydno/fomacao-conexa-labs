<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const breadcrumb = computed(() => {
    return route.name;
})
</script>

<template>
    <div class="breadcrumbs" v-if="breadcrumb !== 'Home'">
        <span>
            <span>
                <RouterLink to="/">Início</RouterLink>
            </span>
            <span class="separator">»</span>
            <span>
                <strong>{{ breadcrumb }}</strong>
            </span>
        </span>
    </div>
</template>

<style scoped>
.breadcrumbs a {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 600;
}

.breadcrumbs .separator {
    font-size: 1.25rem;
    padding: 0 0.352rem;
}

.breadcrumbs:after {
    content: '';
    display: block;
    margin: 1rem 0;
    border-bottom: 1px solid var(--hr-color);
}

@media only screen and (max-width: 768px) {
    .breadcrumbs {
        text-align: center;
    }
}
</style>
