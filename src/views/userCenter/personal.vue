<template>
  <section style="margin-top:20px;">
  <el-row :gutter="20">
    <el-col :span="6" style="border-right:solid 2px #e6eaef;border-left:solid 2px #e6eaef;padding:0;">
        <div class="grid-center">
           <img class="head" src="">
           <h3>demo01</h3>
           <span>demo</span>
        </div>
        <div class="grid-per">
           <h3>详情资料</h3>
           <ul>
             <li>
               <label>手机号</label><br>
               <span>15392489971</span>
             </li>
             <li>
               <label>邮箱</label><br>
               <span>15392489971</span>
             </li>
             <li>
               <label>城市</label><br>
               <span>15392489971</span>
             </li>
             <li style="border-bottom:none;">
               <label>简介</label><br>
               <span>15392489971</span>
             </li>
           </ul>
        </div>
    </el-col>
    <el-col :span="18">
        <el-tabs type="border-card">
            <el-tab-pane label="个人信息">
                <el-form ref="form" :model="form" label-width="150px">
                    <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">保存</el-button>
                </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="修改密码">
               <el-form ref="form" :model="form" label-width="150px">
                  <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="newpass">
                    <el-input type="password" v-model.number="ruleForm2.newpass"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
  </el-col>
  </el-row>
  </section>
</template>
<script>
export default {
   data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          newpass: ''
        },
        rules2: {
          newpass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
              labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };

    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
<style scoped lang="less">
.grid-center{
    border-top:solid 3px #e6eaef;
    text-align:center;
    padding:10px 0;
   .head{
       width:100px;
       height:100px;
       border:solid 1px #aaa;
   }  
}
.grid-per{
    border-top:solid 3px #e6eaef;
    border-bottom:solid 1px #e6eaef;
    padding-top:10px;
    h3{
        margin:0;
        padding-left:10px;
    }
    ul{
        padding:0;
        li{
            padding:10px;
            list-style:none;
            border-bottom:solid 1px #f4f4f4;
        }
    }
}
</style>