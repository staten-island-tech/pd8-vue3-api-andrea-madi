<template>
    <div class="container">
    <Doughnut id="my-chart-id" v-if="loaded" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { store } from '../store.js'
import { ref, reactive } from 'vue'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  data() {
    return {
      loaded: false,
      chartData: null,
      chartOptions: {
        responsive: true,
          legend: {
            labels: {
              fontColor: 'red'
            }
          }
      }
    }
  },
  async mounted() {
    try {
      store.dataValues = []
      let res = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
      let data = await res.json()
      data.forEach((el) => {
        if (el.dbn[2] == 'M') {
          // manhattan
          store.manhattan.push(el)
          if (isNaN(parseInt(el.num_of_sat_test_takers))) {
            store.mTotal.push(0)
          } else {
            store.mTotal.push(parseInt(el.num_of_sat_test_takers))
          }
        } else if (el.dbn[2] === 'Q') {
          // queens
          store.queens.push(el)
          if (isNaN(parseInt(el.num_of_sat_test_takers))) {
            store.qTotal.push(0)
          } else {
            store.qTotal.push(parseInt(el.num_of_sat_test_takers))
          }
        } else if (el.dbn[2] === 'K') {
          // bk
          store.brooklyn.push(el)
          if (isNaN(parseInt(el.num_of_sat_test_takers))) {
            store.bkTotal.push(0)
          } else {
            store.bkTotal.push(parseInt(el.num_of_sat_test_takers))
          }
        } else if (el.dbn[2] === 'R') {
          // si
          store.statenIsland.push(el)
          if (isNaN(parseInt(el.num_of_sat_test_takers))) {
            store.siTotal.push(0)
          } else {
            store.siTotal.push(parseInt(el.num_of_sat_test_takers))
          }
        } else {
          // bronx
          store.bronx.push(el)
          if (isNaN(parseInt(el.num_of_sat_test_takers))) {
            store.bxTotal.push(0)
          } else {
            store.bxTotal.push(parseInt(el.num_of_sat_test_takers))
          }
        }
      })
      console.log(store.mTotal)
      store.dataValues.push(store.mTotal.reduce((a, b) => a + b, 0))
      console.log(store.qTotal)
      store.dataValues.push(store.qTotal.reduce((a, b) => a + b, 0))
      console.log(store.bkTotal)
      store.dataValues.push(store.bkTotal.reduce((a, b) => a + b, 0))
      console.log(store.siTotal)
      store.dataValues.push(store.siTotal.reduce((a, b) => a + b, 0))
      console.log(store.bxTotal)
      store.dataValues.push(store.bxTotal.reduce((a, b) => a + b, 0))
      console.log(store.dataValues)
      this.chartData = {
        labels: ['Manhattan', 'Queens', 'Brooklyn', 'Staten Island', 'Bronx'],
        datasets: [
          {
            data: store.dataValues,
            backgroundColor: [
              'rgb(255, 99, 132, .3)',
              'rgb(54, 162, 235, .3)',
              'rgb(290, 205, 86, .3)',
              'rgb(55, 9, 132, .3)',
              'rgb(54, 162, 25, .3)'
            ],
            
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 2rem;
}
</style>