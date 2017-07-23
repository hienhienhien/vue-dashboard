<template>
<div>

<markdown-editor v-model="content" ref="markdownEditor" ></markdown-editor>


<markdown-editor :value="content" @input="handleInput"></markdown-editor>


<markdown-editor :configs="configs"></markdown-editor>
</div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde'
export default {
  components: {
    markdownEditor
  },
  data(){
    return {
      content: '',
      configs: {
        status: false,
        initialValue: 'hello',
        renderingConfig: {
          codeSyntaxHighlighting: true,
          highlightingTheme: 'atom-one-light'
        }
      }
    }
  },
  computed:{
    simplemde(){
      return this.$refs.markdownEditor.simplemde
    }
  },
  mounted(){
    console.log(this.simplemde);
    this.simplemde.togglePreview()

    // 'change'事件已经绑定，可以通过@input指定处理器
    // 如果需要，你可以自行绑定这个列表中的其他事件: https://codemirror.net/doc/manual.html#events
    this.simplemde.codemirror.on('beforeChange', (instance, changeObj) => {
      // do some things
    })

    // 移除SimpleMDE，组件销毁时会自动调用
    this.simplemde = null

    // 一些有用的方法
    this.simplemde.toTextArea()
    this.simplemde.isPreviewActive() // returns boolean
    this.simplemde.isSideBySideActive() // returns boolean
    this.simplemde.isFullscreenActive() // returns boolean
    this.simplemde.clearAutosavedValue() // no returned value
    this.simplemde.markdown(this.content) // returns parsed html
  },
  methods:{
    handleInput(){
      //do some thing
    }
  }

}
</script>

<style>


</style>
