'use strict';
//import dependencies
const API_URL = 'http://localhost:3000'
const LOGIN_URL = API_URL + '/login'
const REGISTER_URL = API_URL + '/register'
const localStorage = window.localStorage

//export 
export default {
    user: {
        authenticated: false
    },
    //login 
    login(context, creds,cb){
        context.$http.post(LOGIN_URL, creds).then((res) => {
            if(res.data.code === 0){
                this.user.authenticated = true
                localStorage.setItem('id_token',res.data.items.scode)
                localStorage.setItem('id_user',res.data.items.uid)
                cb()
            } else {
                 cb(res.data.msg)
            }
        },(err) => {
            cb(err.data)
        })
    },
    //register
    register(context, creds, type, cb){
        context.$http.post(url, creds)
    .then((res) => {
      if (res.data.code === 0) {
        this.user.authenticated = true
        localStorage.setItem('id_token', res.data.items.scode)
        localStorage.setItem('id_user', res.data.items.uid)
        cb()
      } else {
        cb(res.data.msg)
      }
    }, (err) => {
      cb(err.data)
    })
},
//logout 
logout(){
    localStorage.removeItem('id_token')
    localStorage.removeItem('id_user')
    this.user.authenticated = false
},
//check auth 
checkAuth () {
    var jwt = localStorage.getItem('id_token')
    //check if have jwt 
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },
//get auth header 
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }

}