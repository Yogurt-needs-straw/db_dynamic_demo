<template>
    <div class="box">
        <p>
            <input type="text" placeholder="用户名" v-model="state.user">
        </p>
        <p>
            <input type="text" placeholder="密码" v-model="state.pwd">
        </p>
        <p>
<!--            <select v-model="state.role">-->
<!--                <option :value="ele.value" v-for="ele in state.roleList" :key="ele.value">{{ ele.text }}</option>-->
<!--            </select>-->
        </p>
        <p>
            <input type="button" value="登录" @click="doLogin"/>
        </p>
    </div>
</template>

<script setup>

import {reactive} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter()

const state = reactive({
    user: "wupeiqi",
    pwd: "123",
})

function doLogin() {
    //1.向后台发送请求且登录成功
    //2.返回信息
    const context = {
      routers:["menu","info","more","nine","six","admin","role","user"],
      menus:[
        {
          id:1,
          title:"权限管理",
          icon:"User",
          children:[
            {name:"menu",title:"菜单"},
            {name:"role",title:"角色"},

          ]
        },
        {
          id:2,
          title:"VIP中心",
          icon:"Box",
          children:[
            {name:"user",title:"用户"},
          ]
        },
      ],
      permissions:{
        "user":["GET","DELETE"],
        "order":["GET","POST","PUT","DELETE"],
        "order-detail":["GET","PUT","DELETE"],
      },
      token:"400f1d6e-65f7-483c-84fc-86b50a65b2d7",
    };
    //3.保存vuex
    store.commit("login", context);

    //4.跳转后台
    router.replace({name: context.routers[0]})

}


</script>

<style scoped>
.box {
    border: 1px solid #ddd;
    width: 300px;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
}
</style>