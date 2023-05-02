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
  bxData: [],           // sum of test takers in bronx
  dataValues: []
})