<template>
    <div class="test">
        <div>
          <el-button type="primary" style="margin-bottom:20px" @click="handleAdd">添加</el-button>
        </div>
        <Table :tableData="tableDataList" :columns="columnList" border></Table>
        <el-dialog title="人员录入" :visible.sync="dialogVisible" width="20%">
          <el-form :model="addForm" label-position="left" label-width="60px" :rules="rules" ref="ruleForm">
            <el-form-item label="姓名" prop="name" >
              <el-input v-model="addForm.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="addForm.age" clearable></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-select v-model="addForm.sex" style="width:282px" clearable>
                <el-option v-for="item in sexList" :label="item.label" :key="item.value" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addCancel('ruleForm')" size="small">取 消</el-button>
            <el-button type="primary" @click="addSure('ruleForm')" size="small">确 定</el-button>
          </div>
        </el-dialog>
    </div>

</template>
<script>
import {mapGetters} from 'vuex';
import Table  from '../../components/Table/table'
export default {
  components: {
    Table
  },
  data () {
    let _this = this;
    let validatorAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入人员年龄'))
      }
      if (typeof(value) !== 'number' || value > 110 || value <= 0) {
        return callback(new Error('请输入合法年龄'))
      }
      callback();
    }
    return {
      columnList: [
        {
          type: 'index',
          label: '序号',
          width: 80,
          align: 'center'
        },
        {
          prop: 'name',
          label: '名字',
          // minWidth: 360,
          align: 'center'
        },
        {
          prop: 'age',
          label: '年龄',
          align: 'center'
        },
        {
          prop: 'nationality',
          label: '国籍',
          align: 'center'
        },
        {
          prop: 'sex',
          label: '性别',
          align: 'center',
          render (h, {record}) {
            if (record.sex === '1') {
              return <span>男</span>
            } else if (record.sex === '0') {
              return <span>女</span>
            }
          }
        },
        {
          label: '操作',
          align: 'center',
          render (h, {record}) {
              return <div>
                <el-button type="text" onClick={() => _this.handleDelete(record.id)}>删除</el-button>
              </div>
          }
        }
      ],
      dialogVisible: false,
      sexList: [
        {value: "0", label: '女'},
        {value: '1', label: '男'}
      ],
      addForm: {
        name: '',
        age: '',
        sex: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入人员姓名', trigger: 'blur' }
        ],
        age: [
          { required: true, validator: validatorAge, trigger: 'blur'}
        ],
        sex: [
          { required: true, message: '请选择人员性别', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  computed: {
    // ...mapGetters(['addNumber']),
    tableDataList () {
      return this.$store.getters.addNationality
    }
  },
  methods: {
    handleDelete (id) {
      this.$store.commit('deletePeople', id);
    },
    handleAdd () {
      this.dialogVisible = true;
      setTimeout(() => {
        this.$refs.ruleForm.resetFields();
      }, 0)
    },
    addSure (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.addForm)
          this.$store.dispatch('addPeople', this.addForm).then(() => {
              this.dialogVisible = false;
          })
        } else {
          // this.$refs[formName].resetFields();
          return false;
        }
      });
    },
    addCancel (formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false;
    }
  }
}

</script>

<style lang="scss">
  .test {
    .el-dialog__footer {
      padding-top: 0;
    }
    .el-dialog__body {
      padding-bottom: 0px;
    }
  }
  
</style>
