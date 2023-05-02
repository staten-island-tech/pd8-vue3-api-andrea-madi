<template>
  <Bar id="my-chart-id" ref="bar" :options="chartOptions" :data="chartData" v-if="load" />
  <select v-model="selected" @change="onChange()">
    <!-- <option v-for="option in options" :value="option.value">{{ option.text }}</option> -->
    <option>all!</option>
    <option>math</option>
    <option>reading</option>
    <option>writing</option>
  </select>
  <div>{{ selected }}</div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { store } from './store.js'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
//import { ref, onMounted } from 'vue'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const schools = [
  'CURTIS HIGH SCHOOL',
  'CSI HIGH SCHOOL FOR INTERNATIONAL STUDIES',
  'STATEN ISLAND TECHNICAL HIGH SCHOOL',
  'TOTTENVILLE HIGH SCHOOL',
  'STUYVESANT HIGH SCHOOL',
  'RALPH R. MCKEE CAREER AND TECHNICAL EDUCATION HIGH SCHOOL'
]
export default {
  name: 'BarChart',
  components: { Bar },
  props: {},
  data() {
    return {
      load: false,
      chartData: null,
      selected: 'all!',
      chartOptions: {
        responsive: true
      }
    }
  },
  methods: {
    onChange() {
      this.updateData()
    },
    avgreading(array) {
      let sum = array.reduce((a, b) => a + b, 0)
      let index = array.length
      let average = sum / index
      store.readingscore.push(average)
    },
    avgwriting(array) {
      let sum = array.reduce((a, b) => a + b, 0)
      let index = array.length
      let average = sum / index
      store.barData.push(average)
    },
    avgmath(array) {
      let sum = array.reduce((a, b) => a + b, 0)
      let index = array.length
      let average = sum / index
      store.barData.push(average)
    },
    convertNum(array, readingscore, mathscore, writingscore) {
      array.forEach((el) => {
        if (isNaN(parseInt(el.sat_critical_reading_avg_score))) {
          el.sat_critical_reading_avg_score = 0
        } else {
          el.sat_critical_reading_avg_score = parseInt(el.sat_critical_reading_avg_score)
        }
        readingscore.push(el.sat_critical_reading_avg_score)
        if (isNaN(parseInt(el.sat_math_avg_score))) {
          el.sat_math_avg_score = 0
        } else {
          el.sat_math_avg_score = parseInt(el.sat_math_avg_score)
        }
        mathscore.push(el.sat_critical_math_avg_score)
        if (isNaN(parseInt(el.sat_writing_avg_score))) {
          el.sat_writing_avg_score = 0
        } else {
          el.sat_writing_avg_score = parseInt(el.sat_writing_avg_score)
        }
        writingscore.push(el.sat_critical_writing_avg_score)
      })
    }
  },
  async mounted() {
    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
      const array = await response.json()
      console.log(array)

      array.forEach((el) => {
        if (el.dbn[2] === 'M') {
          store.m.push(el)
          this.convertNum(store.m, store.mreading, store.mmath, store.mwriting)
          this.avgreading(store.mreading)
          this.avgwriting(store.mwriting)
          this.avgmath(store.mmath)
        } else if (el.dbn[2] === 'R') {
          store.si.push(el)
          this.convertNum(store.si, store.sireading, store.simath, store.siwriting)
          this.avgreading(store.sireading)
          this.avgwriting(store.siwriting)
          this.avgmath(store.simath)
        } else if (el.dbn[2 === 'K']) {
          store.bk.push(el)
          this.convertNum(store.bk, store.bkreading, store.bkmath, store.bkwriting)
          this.avgreading(store.bkreading)
          this.avgwriting(store.bkwriting)
          this.avgmath(store.bkmath)
        } else if (el.dbn[2] === 'Q') {
          store.q.push(el)
          this.convertNum(store.q, store.qreading, store.qmath, store.qwriting)
          this.avgreading(store.qreading)
          this.avgwriting(store.qwriting)
          this.avgmath(store.qmath)
        } else {
          store.bx.push(el)
          this.convertNum(store.bx, store.bxreading, store.bxmath, store.bxwriting)
          this.avgreading(store.bxreading)
          this.avgwriting(store.bxwriting)
          this.avgmath(store.bxmath)
        }
      })
      console.log(store.bx)

      console.log(store.mTotal)
      store.mmathavg.push(store.mTotal.reduce((a, b) => a + b, 0))
      console.log(store.qTotal)
      store.mreadingavg.push(store.qTotal.reduce((a, b) => a + b, 0))
      console.log(store.bkTotal)
      store.mwritingavg.push(store.bkTotal.reduce((a, b) => a + b, 0))
      console.log(store.siTotal)
      store.siData.push(store.siTotal.reduce((a, b) => a + b, 0))
      console.log(store.bxTotal)
      store.bxData.push(store.bxTotal.reduce((a, b) => a + b, 0))

      this.chartData = {
        labels: ['STATEN ISLAND', 'MANHATTAN', 'BROOKLYN', 'BRONX', 'QUEENS'],
        datasets: [
          {
            label: 'average math sat score!',
            backgroundColor: [
              'rgb(255, 99, 132, .3)',
              'rgb(54, 162, 235, .3)',
              'rgb(290, 205, 86, .3)',
              'rgb(55, 9, 132, .3)',
              'rgb(54, 162, 25, .3)',
              'rgb(54, 17, 297, .3)'
            ],
            data: [
              // store.mreading,
              // store.bkreading,
              // store.sireading,
              // store.bxreading,
              // store.qreading
              1, 2, 3, 4
            ]
          }
        ]
      }
      this.load = true
      console.log(this.load)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
