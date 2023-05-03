import { reactive } from 'vue'
export const store = reactive({
  data: [],            // api with all data
  manhattan: [],       // all manhattan data
  mTotal: [],          // # of test takers in each manhattan school
  queens: [],          // all queens data
  qTotal: [],          // # of test takers in each queens school
  brooklyn: [],
  bkTotal: [],
  statenIsland: [],
  siTotal: [],
  bronx: [],
  bxTotal: [],
  mData: [],           // sum of test takers in manhattan
  qData: [],           // sum of test takers in queens
  bkData: [],          // sum of test takers in brooklyn
  siData: [],          // sum of test takers in staten island
  bxData: [],          // sum of test takers in bronx
  dataValues: [],
  barDataAll: [],         // final sat avgs
  barDataMath: [],        // final sat math avgs
  barDataReading: [],     // final sat reading avgs
  barDataWriting: [],     // final sat writing avgs
  avgscore: {
    math:{
      m:[],
      q:[],
      bk: [],
      si: [],
      bx: []
  },
    reading:{
      m:[],
      q:[],
      bk: [],
      si: [],
      bx: []
  },
    writing: {
      m:[],
      q:[],
      bk: [],
      si: [],
      bx: []
  }
  },
  mMath: [],
  mReading: [],
  mWriting: [],
  qMath: [],
  qReading: [],
  qWriting: [],
  bkMath: [],
  bkReading: [],
  bkWriting: [],
  siMath: [],
  siReading: [],
  siWriting: [],
  bxMath: [],
  bxReading: [],
  bxWriting: [],
  avg: function(array, obj){
    let sum = array.reduce((a,b)=>a+b,0)
    let index = array.length
    let avg = sum/index
    obj.push(avg)
  },
  convertNum: function(array){
    array.forEach((el)=>{
      if (isNaN(parseInt(el.sat_critical_reading_avg_score))) {
        el.sat_critical_reading_avg_score = 0
      } else {
        el.sat_critical_reading_avg_score = parseInt(el.sat_critical_reading_avg_score)
      }
      if (isNaN(parseInt(el.sat_math_avg_score))) {
        el.sat_math_avg_score = 0
      } else {
        el.sat_math_avg_score = parseInt(el.sat_math_avg_score)
      }
      if (isNaN(parseInt(el.sat_writing_avg_score))) {
        el.sat_writing_avg_score = 0
      } else {
        el.sat_writing_avg_score = parseInt(el.sat_writing_avg_score)
      }
    })
  },
  sort: function(array, m, q, bk, si, bx){
    array.forEach((el)=>{
      if(el.dbn[2]=== 'M'){
        m.push(el)
      } else if(el.dbn[2]==='Q'){
        q.push(el)
      } else if(el.dbn[2]==='K'){
        bk.push(el)
      } else if(el.dbn[2]==='R'){
        si.push(el)
      } else{
        bx.push(el)
      }
    })
  },
  scoresArr: function(array, math, reading, writing){
    array.forEach((el)=>{
      math.push(el.sat_math_avg_score)
      reading.push(el.sat_critical_reading_avg_score)
      writing.push(el.sat_writing_avg_score)
    })
  }
})