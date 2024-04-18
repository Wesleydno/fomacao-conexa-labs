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
const estadoSelecionado = ref<string>("");
const culturasFiltradas = ref<ICultura[]>([]);

const handleChangeSelect = () => {
    culturasFiltradas.value = culturas.filter(cultura => {
        return cultura.estados_produtores.includes(estadoSelecionado.value) || cultura.principal_produtor === estadoSelecionado.value;
    });
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
                    <div v-if="culturasFiltradas.length > 0">
                        <div v-for="cultura in culturasFiltradas" :key="cultura.nome" class="cultura-container">
                            <h2>{{ cultura.nome }}</h2>
                            <div class="cultura-item">
                                <img :src="getImgUrl(cultura.link_imagem)" width="400px" height="300px"
                                    :alt="'Imagem da cultura ' + cultura.nome">
                                <div class="cultura-detalhes">
                                    <p>{{ cultura.descricao }}</p>
                                    <p><strong>Principal produtor:</strong> {{ cultura.principal_produtor }}</p>
                                    <p><strong>Produtores:</strong> {{ cultura.estados_produtores.join(", ") }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="cultura-vazio">
                        <em>Aqui será listado os detalhes da cultura</em>
                    </div>
                </article>
            </div>
            <div class="coluna-direita">
                <article class="select-estados">
                    <p>Culturas por Estado</p>
                    <select v-model="estadoSelecionado" @change="handleChangeSelect">
                        <option value="" disabled selected>Selecione um estado</option>
                        <option value="Acre">Acre</option>
                        <option value="Alagoas">Alagoas</option>
                        <option value="Amapá">Amapá</option>
                        <option value="Amazonas">Amazonas</option>
                        <option value="Bahia">Bahia</option>
                        <option value="Ceará">Ceará</option>
                        <option value="Distrito Federal">Distrito Federal</option>
                        <option value="Espírito Santo">Espírito Santo</option>
                        <option value="Goiás">Goiás</option>
                        <option value="Maranhão">Maranhão</option>
                        <option value="Mato Grosso">Mato Grosso</option>
                        <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                        <option value="Minas Gerais">Minas Gerais</option>
                        <option value="Pará">Pará</option>
                        <option value="Paraíba">Paraíba</option>
                        <option value="Paraná">Paraná</option>
                        <option value="Pernambuco">Pernambuco</option>
                        <option value="Piauí">Piauí</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                        <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                        <option value="Rondônia">Rondônia</option>
                        <option value="Roraima">Roraima</option>
                        <option value="Santa Catarina">Santa Catarina</option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="Sergipe">Sergipe</option>
                        <option value="Tocantins">Tocantins</option>
                    </select>
                </article>
            </div>
        </section>
    </div>
</template>

<style>
</style>
