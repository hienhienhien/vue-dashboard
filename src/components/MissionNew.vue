<template>
  <div class="panel-wraper">
    <div class="arrow arrow-pos1">&nbsp;</div>
    <!--show success alert -->
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
    <div class="panelr missions-new">
      <div class="form-horizontal">
        <div class="form-group">
          <label for="inputTitle" class="col-xs-2 control-label">Title:</label>
          <div class="col-xs-10">
            <input
            type="text"
            class="form-control"
            id="inputTitle"
            placeholder="Title..."
            v-model="items.title"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="inputDescription" class="col-xs-2 control-label">Description:</label>
          <div class="col-xs-10">
            <textarea
            class="form-control"
            id="inputDescription"
            rows="3"
            placeholder="Description..."
            v-model="items.description"
            ></textarea>
          </div>
        </div>
        <div class="form-group">
          <label for="inputPrice" class="col-xs-2 control-label">Price:</label>
          <div class="col-xs-4">
            <input
            type="text"
            class="form-control"
            id="inputPrice"
            placeholder="Price"
            v-model="items.price"
            >
          </div>
        </div>
        <div class="form-group">
          <label for="inputAmount" class="col-xs-2 control-label">Amount:</label>
          <div class="col-xs-4">
            <input
            type="text"
            class="form-control"
            id="inputAmount"
            placeholder="Amount"
            v-model="items.amount"
            >
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-2 control-label">Total price</label>
          <div class="col-xs-4">
            <input type="text" class="form-control" v-model="totalPrice" disabled >
          </div>
        </div>
        <div class="form-group">
          <label for="inputFinishTime" class="col-xs-2 control-label">{{items.beginTime?'任务周期':'结束时间'}}：</label>
          <div class="col-xs-4">
            <div class="col-xs-5 times" :class="(items.beginTime?'':'hide')">
              <input class="form-control" disabled v-model="items.beginTime">
            </div>
            <div class="col-xs-1 time2" :class="(items.beginTime?'':'hide')"><span>至</span></div>
            <div class="times" :class="(items.beginTime?'col-xs-6':'')">
              <datepicker
              :value.sync="items.finishTime"
              :disabled-days-of-Week="disabled"
              :format="format.toString()"
              width="100%">
              </datepicker>
            </div>
          </div>
        </div>
        <div class="space0 col-xs-12">&nbsp;</div>
        <div class="form-group">
          <label for="inputLink" class="col-xs-2 control-label">Link:</label>
          <div class="col-xs-4">
            <input
            id="inputLink"
            type="text"
            class="form-control"
            placeholder="Link"
            v-model="items.link"
            >
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-2 control-label">Plan:</label>
          <div class="col-xs-4">
            <v-select
              :value.sync="items.plan"
              :options="planOptions"
              :close-on-select="true"
            >
            </v-select>
          </div>
        </div>
        <div class="space0 col-xs-12">&nbsp;</div>
        <div class="form-group">
          <label class="col-xs-2 control-label">Doc</label>
          <div id="wysiwyg-container" class="col-xs-10">
            <pre id="docHtml" class="hide">{{{items.doc}}}</pre>
            <iframe id="editorFrame" src="/static/trumbowyg/index.html"></iframe>
          </div>
        </div>
        <center class="col-xs-10 col-xs-offset-2 publish-group">
          <button class="btn btn-lg" @click="preview()">Submittype</button>
          <button class="btn btn-lg" @click="submit()">{{submitType}}</button>
        </center>
      </div>
    </div>
    <modal title="预览任务素材" :show.sync="largeModal" large>
      <div slot="modal-body" class="modal-body iframePreview" id="iframePreview">
      </div>
    </modal>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
