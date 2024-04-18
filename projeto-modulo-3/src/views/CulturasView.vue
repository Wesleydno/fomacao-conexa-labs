<script setup lang="ts">
import { ref } from 'vue';
import culturasData from "../data/culturas.json";

interface ICultura {
  nome: string;
  descricao: string;
  principal_produtor: string;
  estados_produtores: string[];
  link_imagem: string;
}

const culturas: ICultura[] = culturasData.culturas;
const culturaSelecionada = ref<string>("");
const detalhesCultura = ref<ICultura | null>(null);

const handleChangeSelect = () => {
  detalhesCultura.value = culturas.find(cultura => cultura.nome === culturaSelecionada.value) || null;
};
const getImgUrl = (imageName: string) => {
  return new URL(`../assets/images/culturas/${imageName}`, import.meta.url).href;
};

</script>

<template>
  <div class="container">
    <section class="row">
      <div class="coluna-esquerda">
        <article>
          <div v-if="detalhesCultura" class="cultura-container">
            <h2>{{ detalhesCultura.nome }}</h2>
            <div class="cultura-item">
              <img :src="getImgUrl(detalhesCultura.link_imagem)" width="400px" height="300px"
                :alt="'Imagem da cultura ' + detalhesCultura.nome">
              <div class="cultura-detalhes">
                <p>{{ detalhesCultura.descricao }}</p>
                <p><strong>Principal produtor:</strong> {{ detalhesCultura.principal_produtor }}</p>
                <p><strong>Produtores:</strong> {{ detalhesCultura.estados_produtores.join(", ") }}</p>
              </div>
            </div>
          </div>
          <div v-else class="cultura-vazio">
            <em>Aqui será listado os detalhes da cultura</em>
          </div>
        </article>
      </div>
      <div class="coluna-direita">
        <article class="select-culturas">
          <p>Consulta de Culturas</p>
          <select v-model="culturaSelecionada" @change="handleChangeSelect">
            <option value="" disabled selected>Selecione uma cultura</option>
            <option value="Pecuária">Pecuária</option>
            <option value="Cana-de-açúcar">Cana-de-açúcar</option>
            <option value="Mandioca">Mandioca</option>
            <option value="Soja">Soja</option>
            <option value="Milho">Milho</option>
            <option value="Grãos e Hortaliças">Grãos e Hortaliças</option>
            <option value="Café">Café</option>
            <option value="Arroz">Arroz</option>
            <option value="Fruticultura">Fruticultura</option>
            <option value="Avicultura">Avicultura</option>
          </select>
        </article>
      </div>
    </section>
  </div>
</template>

<style>
</style>
