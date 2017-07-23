<template>
<div>
  <data-tables :data='tableData' :actions-def='actionsDef' :checkbox-filter-def='checkFilterDef' :action-col-def='actionColDef'>
    <el-table-column prop="flow_no" label="No." sortable="custom">
    </el-table-column>
    <el-table-column prop="content" label="Content" sortable="custom">
    </el-table-column>
    <el-table-column prop="flow_type" label="Type" sortable="custom">
    </el-table-column>
  </data-tables>
</div>

</template>

<script>
export default {
   data() {
    return {
      tableData: [],
      actionsDef: {
          colProps: {
            span: 5
          },
          def: [{
            name: 'new',
            handler: () => {
              this.tableData.push({
                'content': 'hello world',
                'flow_no': 'FW201601010004',
                'flow_type': 'Help',
                'flow_type_code': 'help',
              })
            },
            buttonProps: {
              type: 'text'
            }
          }, {
            name: 'import',
            handler: () => {
              this.$message('import clicked')
            },
            icon: 'upload'
          }]
        },
        checkFilterDef: {
          props: 'flow_type',
          def: [{
            'code': 'repair',
            'name': 'Repair'
          }, {
            'code': 'help',
            'name': 'Help'
          }]
       },
       actionColDef: {
       		label: 'Actions',
          def: [{
            handler: row => {
              this.$message('Edit clicked')
							row.flow_no = "hello word"
            },
            name: 'Edit'
          }, {
            icon: 'message',
            type: 'text',
            handler: row => {
              this.$message('RUA in row clicked')
              console.log('RUA in row clicked', row)
            },
            name: 'RUA'
          }]
        }

    }
   },
   methods: {
      getRowActionsDef() {
        let self = this
        return [{
          type: 'primary',
          handler(row) {
            self.$message('Edit clicked')
            console.log('Edit in row clicked', row)
          },
          name: 'Edit'
        }]
      },

   },
   created(){
       this.$http.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.tableData = response.body;
      });
   }

}
</script>

<style>

</style>


