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

</script>

<style scoped>


</style>