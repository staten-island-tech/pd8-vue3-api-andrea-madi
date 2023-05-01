<template>
  <HomeView />
</template>

<script>
import BarChart from './components/BarChart.vue'
import AboutView from './views/AboutView.vue'
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: { BarChart, HomeView, AboutView }
}
</script>
