<script lang="ts">
import { defineComponent, ref } from 'vue';
import noticiasJson from "../data/noticias.json";

export interface INoticia {
  tema: string;
  slug: string;
  titulo: string;
  subtitulo: string;
  conteudo: string[];
}

export default defineComponent({
  setup() {
    const noticias = ref<INoticia[]>([]);

    noticias.value = noticiasJson;

    return {
      noticias
    };
  }
});
</script>

<template>
  <div class="container">

    <section>
      <div v-if="noticias.length > 0">
        <article v-for="noticia in noticias" :key="noticia.slug" class="noticia">
          <RouterLink :to="'/noticias/' + noticia.slug">
            <strong>
              <h2 class="titulo primary-color">{{ noticia.titulo }}</h2>
            </strong>
          </RouterLink>
          <p>{{ noticia.conteudo[0] }}...</p>
          <strong>
            <RouterLink :to="'/noticias/' + noticia.slug" class="ler secondary-color">Ler Notícia <span class="separator">&raquo;</span></RouterLink>
          </strong>
        </article>
      </div>
      <div v-else>
        <em>Não existem notícias...</em>
      </div>
    </section>
  </div>
</template>

<style>
.noticia {
  border: 1px solid var(--hr-color);
  padding: 1.5rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.titulo:hover,
.ler:hover {
  text-decoration: underline; 
}
</style>
