
<template>

  <div class="app-container">
    我是table
    <div class="block"> 
      <vue-button btn-text="添加" btn-type="primary" v-on:click="add"></vue-button>
    </div> 
    
    <v-table
            :width="1000"
            :columns="columns"
            :table-data="tableData"
            :show-vertical-border="true"
            :row-click="rowClick"
            :column-cell-class-name="columnCellClass"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
    ></v-table>

    
  </div>
</template>

<script>
import axios from 'axios'
import vueButton from '../Button'
export default {
  components: {
    vueButton
  },
  data() {
    return {
      
                tableData: [
                    {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                    {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                    {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                    {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                    {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
                ],
                columns: [
                    {field: 'tableName', title:'表名', width: 100, titleAlign: 'center',columnAlign:'center'},
                    {field: 'name', title: '表中文名', width: 260, titleAlign: 'center',columnAlign:'center'},
                    {field: 'comment', title: '注释', width: 330, titleAlign: 'center',columnAlign:'center'},
                    {field: 'id', title: '地址', titleAlign: 'center',columnAlign:'left',hid:'true'}
                ]
    }
  },
  filters: {
   
  },
  created() {
  },
  mounted() {
    axios.get("/metatable/list").then(res=>{
      console.log(res)
      this.tableData = res.data
      console.log(this.tableData)
    })
  },
  methods: {
   
            columnCellClass(rowIndex,columnName,rowData){

                // 给三行column为‘hobby’的列设置className
                if (rowIndex === 1 && columnName==='hobby'){

                    return 'column-cell-class-name-test';
                }

                // 给第二行设置className
                if (rowIndex ===1){

                    return 'column-cell-class-name-test2';
                }

                // 给姓名为‘周伟’的行设置className
                if (rowData.name === '周伟'){

                    return 'column-cell-class-name-test';
                }
            },

            rowClick(rowIndex,rowData){
               console.log(rowIndex);
               console.log(rowData);
            },

            add() {
              alert("Test")
            }
  }
}
</script>

<style>
.v-table-title-class {
   font-weight: normal;
    color: #a30b0b;
    text-shadow: 0 0 0 #333333;
}
.title-cell-class-name-test{
        background-color: #f60;
        color:#fff;
    }
    .column-cell-class-name-test{
        background-color: #187;
    }
    .column-cell-class-name-test .v-table-body-cell{
        border-color: #187;
    }
    .column-cell-class-name-test2{
        background-color: #2db7f5;
        font-weight: bold;
    }
    .column-cell-class-name-test2 .v-table-body-cell{
        border-color: #2db7f5;
    }
</style>

