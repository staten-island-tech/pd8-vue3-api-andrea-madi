<template>
  <div class="container">
    <header> this is the about page</header>
    <BarChart class="chart"/>
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'

export default{
  name: 'Bar',
  components: { BarChart}
}
</script>

<style>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  height: 20vh;
}
.about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

</style>
