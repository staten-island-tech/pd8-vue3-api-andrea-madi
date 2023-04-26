<script setup>

import {ref, onMounted} from 'vue'
const api = ref('') 
async function getAPI(){
  let res = await fetch ('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  let data = await res.json()
  api.value = data.results
  console.log(data)
}
onMounted(()=> {
getAPI()
})

</script>

<template>
  <main>
    <h1>hello world</h1>
  </main>
</template>