<template>
  <BarChart />
</template>

<script setup>
import BarChart from '../components/BarChart.vue'
import { ref, onMounted } from 'vue'
const api = ref('')
async function getAPI() {
  let res = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  let data = await res.json()
  api.value = data.results
  console.log(data)
}
onMounted(() => {
  getAPI()
})
</script>
