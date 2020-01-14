<template>
    <div>
        <el-table
            :data="tableData"
            :height="tableHeight"
            :border="border"
        >
            <template v-for="(item, index) in columns">
                <el-table-column
                    :key="index" 
                    v-bind="item"
                    v-if="item.render">
                    <template slot-scope="{row, column, $index}" >
                        <column-render
                            :renderCol="item.render"
                            :record="row"
                            :value="row[item.dataIndex]"
                            :index="$index"
                        ></column-render>
                    </template>
                </el-table-column>
                
                <el-table-column
                    :key="index" 
                    v-bind="item"
                    v-else>
                </el-table-column>
            </template>
      </el-table>
    </div>
</template>

<script>
import ColumnRender from './column-render';
export default {
    name: 'Table',
    data () {
        return {}
    },
    components: {
        ColumnRender
    },
    props: {
        tableData: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array,
            default: () => []
        },
        tableHeight: {
            type: Number,
            default: () => 500
        },
        border: {
            type: Boolean
        }
    }
}

</script>

<style lang="scss">
    .el-table--border {
        border: 1px solid #666;
    }
    // .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    //     border: 1px solid #666;
    //     border-top: 0; 
    // }
    // .has-gutter th{
    //     border: 1px solid #666;
    //     border-top: 0; 
    // }

    .el-table td, .el-table th.is-leaf {
        border: 1px solid #666;
    }
</style>