<template>
<div class="userinput">
  <select v-model="selected">
    <option>all!</option>
    <option>math</option>
    <option>reading</option>
    <option>writing</option>
  </select>
</div>

  <div class="bars">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartDataAll"
      v-if="loaded && selected === 'all!' "
    />
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartDataReading"
      v-if="loaded && selected === 'reading' "
    />
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartDataMath"
      v-if="loaded && selected === 'math' "
    />
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartDataWriting"
      v-if="loaded && selected === 'writing' "
    />
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
          responsive: true,
          legend: {
            color: '#000000'
          }
        }
      }
    },
    methods: [

    ],
    async mounted() {
    try {
      store.barData = []
      store.mMath = []
      store.mWriting = []
      store.mReading = []
      store.qMath = []
      store.qReading = []
      store.qWriting = []
      store.bkMath = []
      store.bkReading = []
      store.bkWriting = []
      store.siMath = []
      store.siReading = []
      store.siWriting = []
      store.bxMath = []
      store.bxReading = []
      store.bxWriting = []
      let res = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
      let data = await res.json()
      store.convertNum(data)
      console.log(data)
      store.sort(data, store.mData, store.qData, store.bkData, store.siData, store.bxData);
      console.log(store.mData)
      store.scoresArr(store.mData, store.avgscore.math.m, store.avgscore.reading.m, store.avgscore.writing.m)
      store.scoresArr(store.qData, store.avgscore.math.q, store.avgscore.reading.q, store.avgscore.writing.q)
      store.scoresArr(store.bkData, store.avgscore.math.bk, store.avgscore.reading.bk, store.avgscore.writing.bk)
      store.scoresArr(store.siData, store.avgscore.math.si, store.avgscore.reading.si, store.avgscore.writing.si)
      store.scoresArr(store.bxData, store.avgscore.math.bx, store.avgscore.reading.bx, store.avgscore.writing.bx)
      console.log(store.avgscore.math.m)
      store.avg(store.avgscore.math.m, store.mMath)
      store.avg(store.avgscore.reading.m, store.mReading)
      store.avg(store.avgscore.writing.m, store.mWriting)
      store.avg(store.avgscore.math.q, store.qMath)
      store.avg(store.avgscore.reading.q, store.qReading)
      store.avg(store.avgscore.writing.q, store.qWriting)
      store.avg(store.avgscore.math.bk, store.bkMath)
      store.avg(store.avgscore.reading.bk, store.bkReading)
      store.avg(store.avgscore.writing.bk, store.bkWriting)
      store.avg(store.avgscore.math.si, store.siMath)
      store.avg(store.avgscore.reading.si, store.siReading)
      store.avg(store.avgscore.writing.si, store.siWriting)
      store.avg(store.avgscore.math.bx, store.bxMath)
      store.avg(store.avgscore.reading.bx, store.bxReading)
      store.avg(store.avgscore.writing.bx, store.bxWriting)
      this.chartDataAll = {
        labels: ['Manhattan', 'Queens', 'Brooklyn','Staten Island', 'Bronx'],
        datasets: [
          { label: 'Math',
            data: [store.mMath, store.qMath, store.bkMath, store.siMath, store.bxMath],
            backgroundColor: [
            'rgb(255, 99, 132, .3)'
            ]
          },
          {
            label: 'Reading',
            color: '#000000',
            data: [store.mReading, store.qReading, store.bkReading, store.siReading, store.bxReading],
            backgroundColor:[
              'rgb(290, 205, 86, .3)'
            ]

          },
          {
            label: 'Writing ',
            data: [store.mWriting, store.qWriting, store.bkWriting, store.siWriting, store.bxWriting],
            backgroundColor: [
              'rgb(54, 162, 25, .3)'
            ]
          }
        ]
      }
      this.chartDataReading = {
        labels: ['Manhattan', 'Queens', 'Brooklyn','Staten Island', 'Bronx'],
        datasets: [
          {
            data: [store.mReading, store.qReading, store.bkReading, store.siReading, store.bxReading],
            backgroundColor:[
              'rgb(290, 205, 86, .3)'
            ]

          },
        ]
      }
      this.chartDataMath = {
        labels: ['Manhattan', 'Queens', 'Brooklyn','Staten Island', 'Bronx'],
        datasets: [
          { 
            data: [store.mMath, store.qMath, store.bkMath, store.siMath, store.bxMath],
            backgroundColor: [
            'rgb(255, 99, 132, .3)'
            ]
          },
        ]
      }
      this.chartDataWriting = {
        labels: ['Manhattan', 'Queens', 'Brooklyn','Staten Island', 'Bronx'],
        datasets: [
          {
            data: [store.mWriting, store.qWriting, store.bkWriting, store.siWriting, store.bxWriting],
            backgroundColor: [
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
