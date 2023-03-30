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
            v-model="email"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请使用邮箱登录' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <div class="toregister" @click="toregister">没有账号？立即注册！</div>
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
import { useUserStore } from "../../store/user";
import { reactive, toRefs } from "vue";
import { login } from "../../network/user";
import { showSuccessToast } from "vant";
import "vant/es/toast/style";
import "vant/es/notify/style";
export default {
  name: "Login",
  components: {
    NavBar,
  },

  setup() {
    const store = useUserStore();
    const router = useRouter();
    // 已有账号跳转登录界面
    const toregister = () => {
      router.push({ path: "/register" });
    };
    // 设置注册表单;
    const userinfo = reactive({
      email: "",
      password: "",
    });

    const onSubmit = () => {
      login(userinfo).then((res) => {
        if (res.status == "200") {
          window.localStorage.setItem("token", res.data.access_token);
          showSuccessToast("登录成功");
          store.setIsLogin;
          userinfo.email = "";
          userinfo.password = "";
          setTimeout(() => {
            router.go(-1);
          }, 1000);
        }
      });
    };
    return {
      ...toRefs(userinfo),
      onSubmit,
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
.toregister {
  text-align: center;
  padding: 10px;
  color: rgb(6, 146, 99);
}
</style>
