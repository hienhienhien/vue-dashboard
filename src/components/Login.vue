<template>
  <div class="appblanker-container">
    <div class="appblanker">
      <h3>Login</h3>
      <div class="form-group">
        <input
          @keyup.enter="submit"
          type="text"
          class="form-control"
          placeholder="Email"
          v-model="credentials.email"
        >
      </div>
      <div class="form-group">
        <input
          @keyup.enter="submit"
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="credentials.password"
        >
      </div>
      <button class="btn btn-primary" @click="submit()">Login</button>
      <div class="form-group">
        <a v-link="{name:'register'}">Don't have account yet? Create a new one now</a> ｜ <a v-link="{name:'index'}">Back</a>
      </div>
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
  </div>
</template>

<script>
//import dependencies 



export default {
    components:{
        alert
    },
    data () {
    return {
      alertError: false,
      credentials: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
}
</script>

<style scoped> 

</style>
