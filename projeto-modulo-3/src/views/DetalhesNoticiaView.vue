<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import noticiasJson from "../data/noticias.json";

export interface INoticia {
    tema: string;
    slug: string;
    titulo: string;
    subtitulo: string;
    conteudo: string[];
}

const route = useRoute();
const noticiaSlug = ref(route.params.slug);
const noticia = computed(() => {
    return noticiasJson.find((n: INoticia) => n.slug === noticiaSlug.value);
});

</script>

<template>
    <div>
        <div v-if="!noticia">
            Essa notícia não existe...
        </div>
        <div v-else>
            <article>
                <p v-for="(paragrafo, index) in noticia.conteudo" :key="index">{{ paragrafo }}</p>
            </article>
        </div>
    </div>
</template>

<style>
article {
    text-align: justify;
}
</style>