<template>
  <div>
    <DoughnutChart class="chart"/>

  </div>
</template>
<!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> -->

<script>
  import DoughnutChart from '../components/DoughnutChart.vue'
  export default {
  name: 'About',
  components: { DoughnutChart }
}

</script>

<style>

*, body{
  font: black;
}

.chart{
  display: flex;
  justify-content: center;
  height: 90vh;
}
</style>