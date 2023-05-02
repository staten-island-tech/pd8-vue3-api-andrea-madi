<template>
  <header>This will be andrea's doughnut</header>
  <DoughnutChart class="chart"/>
</template>

<script>
  import DoughnutChart from '../components/DoughnutChart.vue'
  export default {
  name: 'About',
  components: { DoughnutChart }
}
</script>

<style>
*, body, html{
  text-align: center;
  font: 2rem;
  margin: 0;
  padding: 0;
}
header {
  margin: 2rem;
}
.chart{  
  display: flex;
  justify-content: center;
  height: 90vh;
}
</style>