<template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" >
    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import { post } from '@/lib/http'

export default {
    data() {
      var validateifexist = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
      };
      return {
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { validator: validateifexist, trigger: 'blur' }
          ],
          password: [
              {validator: validateifexist, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              console.log(this.ruleForm)
            post('/user/', { username: this.ruleForm.username, password: this.ruleForm.password}).then((data) =>{
                alert(data.msg)
            }).catch((err) => {
                console.log(err)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>