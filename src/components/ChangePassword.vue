<template>
  <div class="appblanker-container">
    <div class="appblanker">
      <h3>Change password</h3>
      <div class="form-group">
        <input
          @keyup.enter="submit"
          type="text"
          class="form-control"
          placeholder="Current password"
          v-model="credentials.password"
        >
      </div>
      <div class="form-group">
        <input
          @keyup.enter="submit"
          type="password"
          class="form-control"
          placeholder="New password（6-20characters）"
          v-model="credentials.newpass"
        >
      </div>
      <div class="form-group">
        <input
          @keyup.enter="submit"
          type="password"
          class="form-control"
          placeholder="Confirmm new password"
          v-model="credentials.newpass2"
        >
      </div>
      <button class="btn btn-primary" @click="submit()">Submit</button>
      <div class="form-group">
        <a v-link="{name:'profileuser'}" href="profileuser">Back to profile user</a>
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
import { router } from '../main' //?
import Validator from 'validator'
import alert from './vuetrap/Alert'

export default {
components:{
    alert
  },
  route: {
    data (transition) {
      this.credentials = {
        newpass:'',
        password:'',
        newpass2:''
      }
      transition.next()
    }
  },
  data(){
      return {
          url:urlConf.password.change,
      alertError: false,
      alertSuccess: false,
      credentials: {
        newpass: '',
        password: '',
        newpass2:''
      },
      error: '',
      success:''
    
      }
  },
  methods:{
      submit() {
          this.error = false
      this.success = false
      let credentials = {
        password: this.credentials.password,
        newpass: this.credentials.newpass,
        scode:localStorage.getItem('id_token'),
        uid:localStorage.getItem('id_user')
      }
      //if new pass empty
      if ( credentials.newpass == ''){
        return this.alertError = !!(this.error = "The new pass is empty. Please input your new pass")
      }
      else if (credentials.password == ''){
        return this.alertError = !!(this.error = "The current pass is empty. Please input your current pass")
      }
      else if (credentials.password === credentials.newpass){
        return this.alertError = !!(this.error = "The old pass is the same as the new pass")
      }
      else if (Validator.isLength(credentials.newpass,{min: 6, max: 20})!=true){
        return this.alertError = !!(this.error = "The password is 6-20 characters")
      }
      else if (Validator.isAlphanumeric(credentials.newpass)!=true){
        return this.alertError = !!(this.error = "The new pass is not alpha or numeric")
      }
      else if (credentials.newpass!=this.credentials.newpass2){
        return this.alertError = !!(this.error = "The 2 new pass do not match")
      }
      this.$http.post(this.url,credentials)
      .then( (res) => {
        if(res.data.code!=0)
        {
          return this.alertError = !!(this.error = res.data.msg)
        } else{
          this.alertSuccess = !!(this.success = 'Successful change the pass ')
          setTimeout( function(){
            router.go({name:"profileuser"})
          }, 3500)
        }
      },(err)=>{
        return this.alertError = !!(this.error = err)
      })
    }
  }
}
</script>

<style>

</style>
