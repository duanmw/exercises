<template>
  <div class="box">
    <mu-text-field
      label="邮箱"
      @blur="checkEmail()"
      label-float
      hintText="请输入邮箱"
      type="email"
      icon="email"
      v-model="email"
      :errorText="errorEmailMsg"
    />
    <div class="tip-btn">
      <mu-tooltip content="此邮箱用于获取验证码或通知消息">
        <mu-button small color="#aaa" icon>
          <mu-icon v-show="!isEmail" value=":icon ion-md-help-circle-outline"></mu-icon>
          <mu-icon
            v-show="isEmail"
            size="20"
            value=":icon ion-md-checkmark-circle-outline"
            color="blue"
          ></mu-icon>
        </mu-button>
      </mu-tooltip>
    </div>
    <br>
    <mu-text-field
      label="验证码"
      @blur="checkVCode()"
      label-float
      hintText="请输入验证码"
      type="text"
      icon="verified_user"
      v-model="verifyCode"
      :errorText="errorVCodeMsg"
      prefix="#"
    />
    <div class="get-btn">
      <mu-button
        color="primary"
        full-width
        flat
        :disabled="!(isEmail&&controll)"
        @click="send"
      >{{verifyBtn}}</mu-button>
    </div>
    <br>
    <mu-text-field
      label="密码"
      label-float
      hintText="请输入密码"
      type="password"
      icon="locked"
      v-model="password"
      @blur="checkPassword()"
      :errorText="errorPasswordMsg"
    />
    <div class="register-btn">
      <mu-button color="primary" @click="register" full-width>注册</mu-button>
    </div>
    <div>{{isVCode}} {{isPassword}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      verifyCode: "",
      password: "",
      errorEmailMsg: "",
      errorVCodeMsg: "",
      errorPasswordMsg: "",
      controll: true, //控制“获取”按钮禁用状态
      verifyBtn: "获取"
    };
  },
  methods: {
    send() {
      this.$toast.info("验证码已发送至您的邮箱");
      this.controll = false; //禁用按钮
      // console.log("send---");
      let num = 5;
      // this.verifyBtn = num + "s";
      let timeId = setInterval(() => {
        this.verifyBtn = --num + "s";
        if (num == 0) {
          clearInterval(timeId);
          this.verifyBtn = "重新获取";
          this.controll = true; //恢复按钮可用
        }
      }, 1000);
    },
    register() {
      this.$toast.info("注册");
    },
    checkEmail() {
      // console.log(value);
      if (this.isEmail) {
        this.errorEmailMsg = "";
      } else {
        this.errorEmailMsg = "邮箱格式不正确";
      }
    },
    checkVCode() {
      if (this.isVCode) {
        this.errorVCodeMsg = "";
      } else {
        this.errorVCodeMsg = "验证码为6位数字";
      }
    },
    checkPassword() {
      if (this.isPassword) {
        this.errorVCodeMsg = "";
      } else {
        this.errorPasswordMsg = "密码必须为6-10位";
      }
    }
  },

  computed: {
    isEmail: function() {
      //根据email值的变化返回bool值
      let emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (emailReg.test(this.email)) {
        //邮箱格式正确为true，错误为false
        this.errorEmailMsg = "";
        return true;
      } else {
        return false;
      }
    },
    isVCode: function() {
      //根据verifyCode值的变化返回bool值
      let codeReg = /^[0-9]{6}$/;
      if (codeReg.test(this.verifyCode)) {
        //判断6位数字
        this.errorVCodeMsg = "";
        return true;
      } else {
        // this.errorVCodeMsg = "验证码为6位数字";
        return false;
      }
    },
    isPassword: function() {
      //根据输入密码password返回返回bool值
      if (this.password) {
        if (this.password.length >= 6 && this.password.length <= 10) {
          this.errorPasswordMsg = "";
          return true;
        } else {
          this.errorPasswordMsg = "密码必须为6-10位";
          return false;
        }
      } else {
        return false;
      }
    }
  },
  created() {
    // this.tableData = this.tableData1[0]
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 350px;
  min-height: 300px;
  margin: 10px;
  border: 1px solid #ccc;

  .tip-btn {
    // font-size: 16px;
    display: inline-block;
    margin-left: 26px;
  }

  .get-btn {
    display: inline-block;

    .mu-flat-button .mu-button-wrapper {
      padding: 0 4px;
    }
  }

  .register-btn {
    padding: 0 8px;
  }
}
</style>