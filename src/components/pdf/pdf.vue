<template>
<div>
  <h1>Pdf viewer</h1>
  <input type="number" v-model.number="page"> /{{numPages}}
    <pdf src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf" :page="page" @numPages="numPages = $event" style="width:75%"></pdf>

</div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
   components: {
    pdf
  },
  data(){
    return {
      page: 1,
    numPages: 0,
    }
  }


}
</script>

<style>

</style>
