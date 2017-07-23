<template>
<div>
<h1>Qart</h1>
<vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>
</div>

</template>

<script>
import VueQArt from 'vue-qart'
// const myCanvas = this.$refs.qart.children[0];
// const type = 'image/png';
// let image = myCanvas.toDataURL(type).replace(type, "image/octet-stream");
// window.location.href = image; // it will save locally

export default {
  data(){
    return {
      msg: 'Welcome to Your Vue.js App',
        config: {
            value: 'https://www.baidu.com',
            imagePath: './examples/assets/logo.png',
            filter: 'color'
        },
        downloadButton: false

    }
  },
  components:{
    VueQArt
  }

}
</script>

<style>

</style>
