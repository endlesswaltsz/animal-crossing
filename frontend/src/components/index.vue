<template>

  <el-container style="height:100%">
    <el-header style="padding:0">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#0667D6"
        text-color="azure"
        active-text-color="#ffd04b"
        style="border:0"
      >
        <span
          style="color: azure;
    font-size: 23px;
    padding: 20px;
    text-align: center;"
        >Pateo Paas</span>
        <el-menu-item index="1" style="float:right">Log out</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside>
        <el-row class="tac" style="height:100%">
          <el-col  style="height:100%">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              style="height:100%"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title"><router-link :to="{ path: 'user'}">User</router-link></span>
                  
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
              
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>Main</el-main>
      <div><router-view></router-view></div>
    </el-container>
  </el-container>

</template>

<script>
export default {
  name: "index",
  props: {
    msg: String
  }
};
</script>

<script>
export default {
  data() {
    return {
      // activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
<style>
.el-header,
.el-footer {
  /* background-color: #0667d6; */
  color: #333;
  padding: 0,0;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
  width: 100px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>