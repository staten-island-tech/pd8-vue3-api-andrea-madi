<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/about">bar chart</RouterLink>
      </nav>
    
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import BarChart from './components/BarChart.vue'
import AboutView from './views/AboutView.vue'
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: { BarChart, HomeView, AboutView }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
nav {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid black;
}
nav a:first-of-type {
  border: 0;
}
</style>