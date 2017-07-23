<template>
<div>
  <h1>Medit editor </h1>
  <medium-editor :text='myText' :options='options' custom-tag='h2' v-on:edit='applyTextEdit'>
  </medium-editor>
  <p>A Vue 2 component for the the dead simple inline editor toolbar by <a href="https://yabwe.github.io/medium-editor/" target="_blank">yabwe</a>.</p><p><span class="highlight animated shake">Try highlighting this text.</span></p>

</div>

</template>

<script>
import editor from 'vue2-medium-editor'
import Vue from 'vue'
export default {
  data(){
    return {
      Text:text
    }
  },
   components: {
    'medium-editor': editor
  },
   methods: {
    processEditOperation: function (operation) {
      this.text = operation.event.srcElement.innerHTML}
  }

}
</script>

<style>

</style>
