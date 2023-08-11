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
                  <el-sub-menu></el-sub-menu>
                </el-menu>
              </el-scrollbar>
            </el-aside>
          </el-container>
        </div>
      </el-container>
    </div>

</template>

<script setup>

</script>

<style scoped>


</style>