<template>
  <div>
    <BarChart />

  </div>
</template>
<!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> -->

<script>
  import BarChart from '../components/BarChart.vue'
  export default {
  name: 'About',
  components: { BarChart }
}
</script>

<style>

*, body{
  background-color: green;
}
</style>