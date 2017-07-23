<template>
<div class="easy-alert" v-show="isShow">
    <div class="animated tada">
      <p>
        hello vue ～
      </p>
      <p @click="hideAlert">
        close
      </p>
    </div>
  </div>

</template>

<script>
//import{mapState} from vuex
export default {

}
</script>

<style>

</style>
