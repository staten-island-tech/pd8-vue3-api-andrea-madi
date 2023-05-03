<template>
    <header>this will be madi's bar</header>
    <BarChart class="bar"/>
</template>

<script>
import BarChart from '../components/BarChart.vue'
export default{
    name: 'bar',
    components: { BarChart }
}
</script>

<style>
.bar{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
}
</style>