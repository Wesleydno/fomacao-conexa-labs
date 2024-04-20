<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const breadcrumb = computed(() => {
    return route.name;
})

const isNoticiaPage = computed(() => route.name === 'Notícia');

</script>

<template>
    <div class="breadcrumbs" v-if="breadcrumb !== 'Home'">
        <div v-if="!isNoticiaPage">
            <span>
                <RouterLink to="/">Início</RouterLink>
            </span>
            <span class="separator">&raquo;</span>
            <span>
                <strong>{{ breadcrumb }} </strong>
            </span>
        </div>
        <div v-if="isNoticiaPage">
            <span class="separator">&laquo;</span>
            <span>
                <RouterLink to="/noticias">
                    <strong>Voltar para listagem</strong>
                </RouterLink>
            </span>
        </div>
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
