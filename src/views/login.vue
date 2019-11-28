<template>
  <div>
    <van-nav-bar title="用户注册" height="40px">
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>
    <!-- <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-button type="primary" size="large" @click="loginto">登录</van-button>
    </van-cell-group>-->
    <van-tabs v-model="active">
      <van-tab title="用户名密码登录">
        <van-cell-group style="padding-top:25px;">
          <van-field
            v-model="username"
            required
            clearable
            right-icon="question-o"
            placeholder="用户名 / 邮箱 / 手机号"
            @click-right-icon="$toast('question')"
          />

          <van-field v-model="password" type="password" placeholder="请输入密码" required />

          <van-button type="danger" size="large" @click="loginto" style="margin-top:20px;">登录</van-button>
        </van-cell-group>
      </van-tab>
      <van-tab title="手机号码登录 2">
        <van-cell-group style="padding-top:25px;">
          <van-field
            v-model="username"
            required
            clearable
            right-icon="question-o"
            placeholder="请输入手机号码"
            @click-right-icon="$toast('question')"
          />

          <van-row>
            <van-col span="14">
          <van-field v-model="password" type="password" placeholder="请输入密码" required />

            </van-col>
            <van-col span="10">
              <van-button type="default" style="width:100%;">获取验证码</van-button>
            </van-col>
            
          </van-row>

          <van-button type="danger" size="large" @click="loginto" style="margin-top:20px;">登录</van-button>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    loginto() {
      this.$axios
        .get("http://192.168.54.65:3000/login", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          if (response.data.code == 201) {
            Toast("登录失败");
            // alert('失败')
          } else {
            // console.log(response);
            let token = response.data.result.token;
            localStorage.login = token;
            this.$router.push("/my");
          }
        })
        .catch(error => {
          window.console.log(error);
          localStorage.user = this.username;
          localStorage.password = this.password;
          this.$router.push("/my");
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
