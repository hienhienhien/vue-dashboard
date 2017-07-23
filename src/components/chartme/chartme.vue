<template>
<div id="linechart">
  <h1>Chart.js with vue </h1>
  <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>Commit chart</h2>
          <commit-chart></commit-chart>
        </div>
        <div class="Chart">
          <h2>Line chart</h2>
          <monthly-income :data="dataset" ></monthly-income>

        </div>
      </div>
    </div>

</div>

</template>

<script>
import CommitChart from'./CommitChart'
import MonthlyIncome from'./MonthlyIncome'




export default {
  data(){
    return {
      dataset:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87973',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]

      }

    }
  },
  components:{
    CommitChart,
    MonthlyIncome
  }


}
</script>

<style scoped>
#linechart {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 800px;
  margin:  0 auto;
}

</style>

