<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import HeadLine from './components/HeadLine.vue';
import BreadCrumbs from './components/BreadCrumbs.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <header>
    <NavBar />
    <HeadLine />
  </header>
  <main>
    <BreadCrumbs />
    <RouterView />
  </main>
  <TheFooter />
</template>

<style scoped>
</style>
