<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      v-if="loaded && selected === 'all!' "
    />
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      v-if="loaded && selected === 'reading' "
    />
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      v-if="loaded && selected === 'writing' "
    />
    <div class="userinput">
  <select v-model="selected">
    <option>all!</option>
    <option>math</option>
    <option>reading</option>
    <option>writing</option>
  </select>
  
</div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { store } from '../store.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        loaded: false,
        chartData: null,
        selected: 'all!',
        chartOptions: {
          responsive: true
        }
      }
    },
    methods: [

    ],
    async mounted() {
    try {
      store.barData = [1, 2, 3]
      let res = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
      let data = await res.json()
      console.log(data)
      this.chartData = {
        labels: [],
        datasets: [
          {
            data: [1,2,3,4,5],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235, .3)',
              'rgb(290, 205, 86, .3)',
              'rgb(55, 9, 132, .3)',
              'rgb(54, 162, 25, .3)'
            ]
          }
        ]
      }
      this.loaded = true
  } catch (error) {
      console.log(error)
    }
    }
}
  </script>