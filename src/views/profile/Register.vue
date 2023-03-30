<template>
  <nav-bar #center>{{ $route.meta.title }}</nav-bar>
  <div class="register">
    <div class="logo">
      <img src="/1.png" />
    </div>
    <div class="regform">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="name"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="password_confirmation"
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请确认密码' }]"
          />
          <van-field
            v-model="email"
            name="邮箱"
            label="邮箱"
            placeholder="请输入邮箱"
            :rules="[{ required: true, message: '请输入邮箱' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <div class="tologinbtn" @click="tologin">已有账号?立即登录!</div>
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import NavBar from "../../components/common/NavBar.vue";
import { useRouter } from "vue-router";
import { reactive, toRefs, ref } from "vue";
import { register } from "../../network/user";
import { showSuccessToast, showNotify } from "vant";
import "vant/es/toast/style";
import "vant/es/notify/style";
export default {
  name: "Register",
  components: {
    NavBar,
  },

  setup() {
    const router = useRouter();
    // 已有账号跳转登录界面
    const tologin = () => {
      router.push({ path: "/login" });
    };
    // 设置注册表单;
    const userinfo = reactive({
      name: "",
      password: "",
      password_confirmation: "",
      email: "",
    });

    const regex = /^\S+@\S+\.\S+$/;
    const onSubmit = () => {
      if (userinfo.password != userinfo.password_confirmation) {
        showNotify("两次输入的密码不一致");
      } else {
        register(userinfo)
          .then((res) => {
            if (res.status == "201") {
              showSuccessToast("注册成功");
            }
            userinfo.password = "";
            userinfo.password_confirmation = "";
          })
          .catch((err) => {
            console.log("出错了");
          });
      }
    };
    return {
      ...toRefs(userinfo),
      onSubmit,
      tologin,
    };
  },
};
</script>
<style scoped>
.register {
  position: absolute;
}
.regform {
  position: relative;
  top: 10vh;
}
.logo {
  top: 45px;
  text-align: center;
  position: relative;
}
.logo img {
  width: 100vw;
  vertical-align: middle;
  text-align: center;
}
.tologinbtn {
  text-align: center;
  padding: 10px;
  color: rgb(6, 146, 99);
}
</style>
