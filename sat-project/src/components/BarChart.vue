<template>
  <Bar id="my-chart-id" ref="bar" :options="chartOptions" :data="chartData" v-if="load" />
  <select v-model="selected" @change="onChange()">
    <!-- <option v-for="option in options" :value="option.value">{{ option.text }}</option> -->
    <option>all!</option>
    <option>CURTIS HIGH SCHOOL</option>
    <option>CSI HIGH SCHOOL FOR INTERNATIONAL STUDIES</option>
    <option>STATEN ISLAND TECHNICAL HIGH SCHOOL</option>
    <option>TOTTENVILLE HIGH SCHOOL</option>
    <option>STUYVESANT HIGH SCHOOL</option>
    <option>RALPH R. MCKEE CAREER AND TECHNICAL EDUCATION HIGH SCHOOL</option>
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
    }
  },
  async mounted() {
    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
      const array = await response.json()
      //   const filtered = score.filter((x) => {
      //     return x.school_name !== undefined
      //   })
      //   const curtis = filtered.filter((e) => {
      //     return e.school_name.includes('CURTIS HIGH SCHOOL')
      //   })
      //   const csi = filtered.filter((e) => {
      //     return e.school_name.includes('CSI HIGH SCHOOL FOR INTERNATIONAL STUDIES')
      //   })
      //   const tech = filtered.filter((e) => {
      //     return e.school_name.includes('STATEN ISLAND TECHNICAL HIGH SCHOOL')
      //   })
      //   const TOTTENVILLE = filtered.filter((e) => {
      //     return e.school_name.includes('TOTTENVILLE HIGH SCHOOL')
      //   })
      //   const stuy = filtered.filter((e) => e.school_name.includes('STUYVESANT HIGH SCHOOL')
      //   )
      //   const mckee = filtered.filter((e) => {
      //     return e.school_name.includes('RALPH R. MCKEE CAREER AND TECHNICAL EDUCATION HIGH SCHOOL')
      //   })
      console.log(array)
      const schools = [
        'CURTIS HIGH SCHOOL',
        'CSI HIGH SCHOOL FOR INTERNATIONAL STUDIES',
        'STATEN ISLAND TECHNICAL HIGH SCHOOL',
        'TOTTENVILLE HIGH SCHOOL',
        'STUYVESANT HIGH SCHOOL',
        'RALPH R. MCKEE CAREER AND TECHNICAL EDUCATION HIGH SCHOOL'
      ]
      array.forEach((el) => {
        if (el.school_name === 'CURTIS HIGH SCHOOL') {
          store.curtis.push(parseInt(el.sat_math_avg_score))
        } else {
          //store.curtis.push(0)
        }
        if (el.school_name === 'RALPH R. MCKEE CAREER AND TECHNICAL EDUCATION HIGH SCHOOL') {
          store.mckee.push(parseInt(el.sat_math_avg_score))
        } else {
          //store.mckee.push(0)
        }
        if (el.school_name === 'STUYVESANT HIGH SCHOOL') {
          store.stuy.push(parseInt(el.sat_math_avg_score))
        } else {
          //store.stuy.push(0)
        }
        if (el.school_name === 'TOTTENVILLE HIGH SCHOOL') {
          store.tottenville.push(parseInt(el.sat_math_avg_score))
        } else {
          //store.tottenville.push(0)
        }
        if (el.school_name === 'STATEN ISLAND TECHNICAL HIGH SCHOOL') {
          store.tech.push(parseInt(el.sat_math_avg_score))
        } else {
          //store.tech.push(0)
        }
        if (el.school_name === 'CSI HIGH SCHOOL FOR INTERNATIONAL STUDIES') {
          store.csi.push(parseInt(el.sat_math_avg_score))
        } else {
          //store.csi.push(0)
        }
      })
      console.log(this.selected)
      this.updateData = () => {
        const chart = this.$refs.bar.chart
        if (this.selected === 'all!') {
          this.chartData.labels = schools
          this.chartData.datasets[0].data = [
            store.curtis,
            store.csi,
            store.tech,
            store.tottenville,
            store.stuy,
            store.mckee
          ]
        } else {
          this.chartData.labels = [this.selected]
          this.chartData.datasets[0].data = [store.curtis]
        }
        // chart.destroy()
        // chart.draw()
      }
      this.chartData = {
        labels: [
          'CURTIS HIGH SCHOOL',
          'CSI HIGH SCHOOL FOR INTERNATIONAL STUDIES',
          'STATEN ISLAND TECHNICAL HIGH SCHOOL',
          'TOTTENVILLE HIGH SCHOOL',
          'STUYVESANT HIGH SCHOOL',
          'RALPH R. MCKEE CAREER AND TECHNICAL EDUCATION HIGH SCHOOL'
        ],
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
            data: [store.curtis, store.csi, store.tech, store.tottenville, store.stuy, store.mckee]
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
