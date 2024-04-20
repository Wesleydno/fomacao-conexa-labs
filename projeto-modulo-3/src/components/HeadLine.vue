<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import noticiasJson from "../data/noticias.json";

interface INoticia {
    titulo: string;
    subtitulo: string;
    conteudo: string[];
    slug: string;
    tema: string;
}

function getNoticiaBySlug(slug: string) {
    return noticiasJson.find((noticia: INoticia) => noticia.slug === slug);
}

const route = useRoute();

const noticia = computed(() => {
    if (route.name === 'Notícia') {
        return getNoticiaBySlug(route.params.slug as string);
    } else if (route.meta.headline) {
        return route.meta.headline as INoticia;
    } else {
        return { titulo: '', subtitulo: '' };
    }
});

const isHomePage = computed(() => route.name === 'Home' || route.name === 'Notícia');
</script>

<template>
    <div :class="{ 'headline': true, 'principal': isHomePage }">
        <div class="content-wrapper">
            <h1>{{ noticia?.titulo }}</h1>
            <h2 v-if="noticia?.subtitulo">{{ noticia?.subtitulo }}</h2>
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
