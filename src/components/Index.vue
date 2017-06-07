<template>
  <div class="appblanker-container index">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <img alt="Brand" src="/static/pic/indexlogo.gif">
          </a>
          </div>
        <span class="navbar-form navbar-right">
          <button type="button" class="btn btn-default navbar-btn" @click="btnLogin()">Login</button>
          <button type="button" class="btn btn-primary navbar-btn" @click="btnRegister()">Register</button>
        </span>
      </div>
 </nav>
    <div class="index-container">
      <carousel>
        <slider>
          <img src="/static/pic/indexbg1.jpg">
        </slider>
        <slider>
          <img src="/static/pic/indexbg2.jpg">
        </slider>
        <slider>
          <img src="/static/pic/indexbg3.jpg">
        </slider>
        <center>
          <button class="btn btn-lg btn-primary" @click="btnLeft()">Left</button>
          <button class="btn btn-lg btn-primary" @click="btnRight()">Rigth</button>
        </center>
      </carousel>
    </div>
    <div class="footer">
      <footer></footer>
    </div>
    <table class="index-table hide">
      <tbody>
        <tr>
          <td>
            <button class="btn btn-lg btn-block" @click="btnLeft()">Left</button>
          </td>
          <td>
            <button class="btn btn-lg btn-block" @click="btnRight()">Right</button>
          </td>
        </tr>
      </tbody>
    </table>


  </div>













</template>

<script>
//import dependencies
import {router} from '../main'
import carousel from './vuetrap/Carousel'
import slider from './vuetrap/Slider'
import footerhtml from './Footer'
export default {
    components:{
        alert,
    slider,
    carousel,
    footer
    },
data(){
    return {

    }

},
computed:{

},
methods:{

}
}
</script>

<style scoped>

</style>
