<template>
 <div class="panel-wraper">
    <div class="arrow arrow-pos1">&nbsp;</div>
    <alert :show.sync="alertSuccess" :duration="3000" type="info" placement="top" width="350px" dismissable>
        <span class="icon-info-circled alert-icon-float-left"></span>
        <p>{{success}}</p>
    </alert>
    <alert :show.sync="alertError" :duration="3000" type="danger" placement="top" width="350px" dismissable>
        <span class="icon-info-circled alert-icon-float-left"></span>
        <p>{{error}}</p>
    </alert>

    <div class="panelr">
      <center>
        <a class="btn btn-primary btn-publish" v-link="{name:'missions-new'}">发布新任务</a>
        <a class="btn btn-primary btn-publish" v-link="{name:'missions2-new1'}">自定义任务</a>
      </center>
      <p v-if="items">我的任务：</p>
      <table class="table table-hover" v-if="items">
        <thead>
          <tr>
            <th>任务名称</th>
            <th>状态</th>
            <th>开始时间</th>
            <th>结束时间</th>
            <th>推广方式</th>
            <th class="text-right">单价</th>
            <th class="text-right">总数量</th>
            <th class="text-right">剩余数量</th>
            <th class="text-right">总金额</th>
            <th class="text-center">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items">
            <td>{{item.title}}</td>
            <td>{{item.status}}</td>
            <td>{{item.beginTime}}</td>
            <td>{{item.finishTime}}</td>
            <td>{{item.strategy}}</td>
            <td class="text-right">{{item.unitPrice}}</td>
            <td class="text-right">{{item.amount}}</td>
            <td class="text-right">{{item.remain}}</td>
            <td class="text-right">{{item.totalPrice}}</td>
              <td class="text-right">
                <button class="btn btn-primary" @click="show(item.t_type,item.id)" >编辑</button>
                <!-- <button class="btn btn-danger" @click="removeMissionConfirm(item.id)">删除</button> -->
              </td>
          </tr>
        </tbody>
      </table>

      <ul class="pagination" v-if="pageTotal>1" >
        <li :class="(pageCurrent == 1)?'disabled':''">
          <a @click="page(1)" aria-label="Previous">
            <span aria-hidden="true">首页</span>
          </a>
        </li>
        <li :class="(pageCurrent == 1)?'disabled':''">
          <a @click="prevPage()" aria-label="Previous">
            <span aria-hidden="true">上一页</span>
          </a>
        </li>
        <li v-for="thePage in navigation()" :class="((pageCurrent==thePage+1)?'active':'')">
          <a @click="page(thePage+1)">{{thePage+1}}</a>
        </li>
        <li :class="(pageCurrent == pageTotal)?'disabled':''">
          <a @click="nextPage()" aria-label="Next" >
            <span aria-hidden="true">下一页</span>
          </a>
        </li>
        <li :class="(pageCurrent == pageTotal)?'disabled':''">
          <a @click="page(pageTotal)" aria-label="Next" >
            <span aria-hidden="true">尾页</span>
          </a>
        </li>
      </ul>
      <ul class="pagination pagination-bar pull-right" v-if="pageTotal>1">
        <li>
          <span>
            当前第{{pageCurrent}}页/共{{pageTotal}}页&nbsp;转到
            <input v-model="inputPageNumber" type="text" @keyup.enter="page(inputPageNumber)">页
          </span>
        </li>
      </ul>
    </div>
  </div>

  
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed:{
        
    }

}
</script>

<style>

</style>
