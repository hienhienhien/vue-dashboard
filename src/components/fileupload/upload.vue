<template>
<div>
  <h1>File upload with Vue </h1>
</div>
</template>

<script>
import FileUpload from 'vue-upload-component'
export default {

data() {
            return {
                files: [],
            }
        },
        components:{
          FileUpload
        }
}
</script>

<style>

</style>
