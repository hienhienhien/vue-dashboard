<template>
  <div class="hello">
     <!--<calendar></calendar>-->

      <calendar-range :events="calendarEvents" :selection="selection" locale="EN" ></calendar-range>
      <button @click="add">Add</button>
  </div>
</template>

<script>
import {calendar} from 'vue-calendar-picker'
import {calendarRange} from 'vue-calendar-picker'
export default {
  name: 'hello',
  components: {
        calendar: calendar,
        calendarRange: calendarRange
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selection:{
        start:Date.now(),
        end:Date.now()
      },
       calendarEvents: [],
       calendarEvents: [
                // periods
                { color:'#aaf', start: new Date(2016, 9, 5, 0,0,0,0), end: new Date(2017, 4, 15, 0,0,0,0) },
                { color:'#afa', start: new Date(2016, 9, 5, 0,0,0,0), end: new Date(2017, 4, 13, 0,0,0,0) },
                { color:'#faa', start: new Date(2017, 4, 8, 12,30, 0,0), end: new Date(2017, 4, 9, 6,30, 0,0) },
                // one-time
                { color:'#faa', start: new Date(2017, 4, 2, 0,0,0,0), end: new Date(2017, 4, 2, 0,0,0,0) },
                { color:'#aaa', start: new Date(2017, 4, 2, 0,0,0,0), end: new Date(2017, 4, 2, 0,0,0,0) },
            ],
            calendarSelection: {
                start: new Date(2017, 4, 2), end: new Date(2017, 4, 7, 12)
            }
    }
  },
  methods:{
    add(){
      console.log('add');
      this.calendarEvents.push({
        color: '#'+Math.floor(Math.random()*16777215).toString(16),
        start: this.selection.start,
        end: this.selection.end
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.calendar {
    border: 2px solid #000;
    border-radius: 0.5em;
    padding: 0.5em;
}
</style>
