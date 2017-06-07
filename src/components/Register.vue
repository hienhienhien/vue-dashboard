<template>
  <div class="appblanker-container">
    <div class="appblanker" novalidate>
      <h3>Register</h3>
     
      <div id="erroralert"></div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Email"
          v-model="credentials.email"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          maxlength="20"
          class="form-control"
          placeholder="Password（6-20characters）"
          v-model="credentials.password"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Confirm password"
          v-model="credentials.password2"
        >
      </div>
      <button class="btn btn-primary" @click="submit()">Register</button>
      <div class="btn-below">Already have account? <a v-link="{name:'login'}" href="login">Login</a> ｜ <a v-link="{name:'Hello'}" href="hello">Back</a></div>
    </div>
    <alert
      :show.sync="alertError"
      :duration="3000"
      type="danger"
      width="350px"
      dismissable>
        <span class="icon-info-circled alert-icon-float-left"></span>
        <p>{{error}}</p>
    </alert>
    <alert
      :show.sync="alertSuccess"
      :duration="3000"
      type="info"
      width="350px"
      dismissable>
        <span class="icon-info-circled alert-icon-float-left"></span>
        <p>{{success}}</p>
    </alert>
  </div>
</template>

<script>
//import dependencies
export default {
    components:{
    // alert
  },
  data () {
    return {
      alertError: false,
      alertSuccess: false,
      credentials: {
        email: '',
        password: ''
      },
      error: '',
      success:''
    }
  },

}
</script>

<style>

</style>
