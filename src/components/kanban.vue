<template>
<div>
<kanban-board :stages="stages" :blocks="blocks"></kanban-board>
</div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
 methods: {
    updateBlock(id, status) {
      this.blocks.find(b => b.id === Number(id)).status = status;
    },
  },

}
</script>

<style>

</style>
