<template>
    <div>
      <el-container>
        <el-header height="72px" style="border-bottom: 1px solid #dddddd;">
          <el-row justify="space-between" class="pg-header">
            <div class="logo">
              <router-link to="/admin/menu">
                <img src="../assets/logo.png">
              </router-link>
            </div>
            <div>
              <el-dropdown>
                <span class="el-dropdown-link" style="cursor: pointer">
                  xxx
                  <el-icon class="el-icon--right">
                    <ArrowDown></ArrowDown>
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>View</el-dropdown-item>
                    <el-dropdown-item>Add</el-dropdown-item>
                    <el-dropdown-item>Delete</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </el-row>
        </el-header>
        <div class="main">
          <el-container style="height: 100%">
            <el-aside width="250px">
              <el-scrollbar>
                <el-menu :router="true" :default-active="activeRouter">

                  <el-sub-menu v-for="item in menuList" :index="item.title" :key="item.title">
                    <template #title>
                      <el-icon>
                        <component :is="item.icon"></component>
                      </el-icon>
                      <span>{{item.title}}</span>
                    </template>
                    <el-menu-item v-for="ele in item.children" :index="ele.name" :key="ele.id" :route="{name:ele.name}">
                      {{ele.title}}
                    </el-menu-item>
                  </el-sub-menu>

                </el-menu>
              </el-scrollbar>
            </el-aside>

            <el-main class="body">
              <router-view>

              </router-view>
            </el-main>
          </el-container>
        </div>
      </el-container>
    </div>

</template>

<script setup>

import {computed} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

const route = useRoute();
const store = useStore();

const activeRouter = computed(()=>route.name);

const menuList = computed(() => store.getters.menus);

</script>

<style scoped>
img{
  height: 100%;
}

.pg-header{
  height: 72px;
  align-items: center;
}

.pg-header .logo{
  height: 48px;
}

.pg-header .menu a {
  padding: 0 5px;
  text-decoration: none;
}

.main{
  height: calc(100vh - 72px);
}

.el-menu{
  height: calc(100vh - 72px);
}

.body{
  min-width: 900px;
}

</style>