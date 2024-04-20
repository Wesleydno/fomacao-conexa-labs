<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

</script>

<template>
  <div class="nav-wrapper">
    <nav class="navbar">
      <RouterLink to="/">
        <img alt="Logo AgroNews" class="logo" src="@/assets/logo.svg" width="170" height="35" />
      </RouterLink>

      <ul class="nav-menu" :class="{ 'active': isMenuOpen }">
        <li class="nav-item">
          <RouterLink @click="closeMenu" to="/">INÍCIO</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink @click="closeMenu" to="/noticias">NOTÍCIAS</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink @click="closeMenu" to="/produtores">PRODUTORES</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink @click="closeMenu" to="/culturas">CULTURAS</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink @click="closeMenu" to="/tecnologia">TECNOLOGIA</RouterLink>
        </li>
      </ul>
      <div class="hamburger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0.469rem 0;
  user-select: none;
}

.nav-wrapper {
  margin: 0 auto;
  max-width: 1320px;
}

.nav-logo a {
  font-size: 2.1rem;
  font-weight: 500;
  color: var(--primary-color);
}

.nav-logo span {
  color: var(--secondary-color);
  font-weight: 300;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  margin-left: 5rem;
}

.nav-item a {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--primary-color);
}

@media only screen and (max-width: 768px) {
  .nav-logo {
    text-align: center;
  }
}

/* -- Navbar Hamburger-- */

.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
}

@media only screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    background-color: var(--white-color);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow:
      0 10px 27px rgba(0, 0, 0, 0.05);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    -webkit-transform: translateY(8px) rotate(45deg);
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    -webkit-transform: translateY(-8px) rotate(-45deg);
    transform: translateY(-8px) rotate(-45deg);
  }

}
</style>
