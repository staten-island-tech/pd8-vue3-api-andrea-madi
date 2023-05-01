<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" v-if="load" />
  <canvas id="chart" width="400" height="400"></canvas>
</template>

<script>
import { Bar } from 'vue-chartjs'
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
export default {
  name: 'BarChart',
  components: { Bar },
  props: {},
  data() {
    return {
      load: false,
      chartData: null,
      chartOptions: {
        responsive: true
      }
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
        if (el.school_name === ) {
        } else {
        }
      })
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
            backgroundColor: [
              'rgb(255, 99, 132, .3)',
              'rgb(54, 162, 235, .3)',
              'rgb(290, 205, 86, .3)',
              'rgb(55, 9, 132, .3)',
              'rgb(54, 162, 25, .3)'
            ],
            data: [
              curtis(parseInt(sat_math_avg_score)),
              csi.sat_math_avg_score,
              tech.sat_math_avg_score,
              TOTTENVILLE.sat_math_avg_score,
              S.sat_math_avg_score,
              mckee.sat_math_avg_score
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
