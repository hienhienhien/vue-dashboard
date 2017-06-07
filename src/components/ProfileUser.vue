
<template>
  <div class="panel-wraper">
  <div class="arrow arrow-pos3">&nbsp;</div>
  <alert
    :show.sync="alertSuccess"
    :duration="3000"
    type="info"
    placement="top"
    width="350px"
    dismissable>
      <span class="icon-info-circled alert-icon-float-left"></span>
      <p>{{success}}</p>
  </alert>
  <alert
    :show.sync="alertError"
    :duration="3000"
    type="danger"
    placement="top"
    width="350px"
    dismissable>
      <span class="icon-info-circled alert-icon-float-left"></span>
      <p>{{error}}</p>
  </alert>
  <ul class="nav nav-tabs nav-justified">
    <li class="disabled"><a>&nbsp;</a></li>
    <li class="active"><a>个人信息</a></li>
    <li><a v-link="{name:'profileenterprise'}">企业信息</a></li>
    <li class="disabled"><a>&nbsp;</a></li>
  </ul>
  <div class="profile-wraper">
    <div class="col-xs-3 text-right">
      <div class="avatar">
        <img v-if="user.avatar" :src="user.avatar" >
        <span v-else class="glyphicon glyphicon-user" aria-hidden="true"></span>
      </div>
      <vue-file-upload
      v-bind:multiple='false'
      v-bind:auto-upload='true'
      label="编辑"
      v-bind:url="uploadUrl()"
      v-bind:filters = "filters"
      v-bind:events = 'cbEvents'
      v-bind:request-options = "reqopts"
      >
      </vue-file-upload>
    </div>
    <div class="col-xs-9 form-horizontal">
      <div class="form-group">
        <label for="inputNick" class="text-right col-xs-4 control-label">Nick：</label>
        <div class="col-xs-8">
          <input v-model="user.nick" type="text" class="form-control" id="inputNick">
        </div>
      </div>

      <div class="form-group">
        <label for="inputGender" class="text-right col-xs-4 control-label">Gender：</label>
        <div class="col-xs-8 inputGender" id="inputGender">
          <v-select
            :value.sync="user.gender"
            :options="planOptions"
            :close-on-select="true"
          >
          </v-select>
        </div>
      </div>

      <div class="form-group">
        <label for="inputMail" class="text-right col-xs-4 control-label">Email：</label>
        <div class="col-xs-8">
          <input v-model="user.mail" type="text" class="form-control" id="inputMail" placeholder="Email">
        </div>
      </div>

      <div class="form-group">
        <label for="inputWeixin" class="text-right col-xs-4 control-label">微信号：</label>
        <div class="col-xs-8">
          <input disabled placeholder="请联系客服绑定微信帐号" v-model="user.weixin" type="text" class="form-control" id="inputWeixin">
        </div>
      </div>

      <div class="form-group visibility-hidden">
        <label for="inputPhone" class="text-right col-xs-4 control-label">Phone:</label>
        <div class="col-xs-8">
          <input v-model="user.phone" type="text" class="form-control" id="inputPhone" placeholder="Phone">
        </div>
      </div>

      <div class="form-group visibility-hidden">
        <label for="inputName" class="text-right col-xs-4 control-label">Name：</label>
        <div class="col-xs-8">
          <input v-model="user.name" type="text" class="form-control" id="inputName" placeholder="Name">
        </div>
      </div>

    </div>

    <center class="col-xs-12 btn-lg-group">
      <button class="btn btn-lg btn-password" @click="changePassword()">Change Password</button>
      <button class="btn btn-lg btn-primary" @click="submit()">Submit</button>
    </center>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
