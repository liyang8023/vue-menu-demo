<template>
    <div class="layout">
        <el-container>
          <!-- 侧边栏 -->
          <el-aside>
            <el-menu v-if="menuList" :default-active="activeNav" @select="selectMenu" text-color="#fff" background-color="#545c64" active-text-color="#ffd04b">
              <template v-for="(menu, index) in menuList" >
                <el-menu-item v-if="!menu.children" :key="index" :index="index.toString()" @click="handleSubmenuClick(menu)">
                  <i :class="menu.icon"></i>
                  <span slot="title"> {{menu.title}}</span>
                </el-menu-item>

                <el-submenu v-if="menu.children" :key="index" :index="index.toString()">
                  <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>{{menu.title}}</span>
                  </template>
                  <el-menu-item v-for="(item, i) in menu.children" :key="i" :index="`${index}-${i}`" @click="handleSubItemClick(menu, item)">
                    {{item.title}}
                  </el-menu-item>
                </el-submenu>
              </template>
            </el-menu>
          </el-aside>
          <el-container>
            <!-- 顶部导航 -->
            <el-header class="header-style">
                <img src="../../assets/logo.png" alt="" style="width:50px; height: 50px;">
                <span>Hello World!</span>
            </el-header>
            <!-- 内容区 -->
            <el-main>
              <router-view ref="contentChart" :key="key"/>
            </el-main>
          </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
      ],
      activeNav: ''
    }
  },
  created () {
    this.menuList = this.$router.options.routes[0].children;
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
    this.activeNav = this.$store.state.layout.menuActive;
  },
  computed: {
    key () {
      return this.$route.path
    }
  },
  methods: {
    // 不含二级菜单的菜单栏点击
    handleSubmenuClick (item) {
      this.$router.push({
        path: item.path
      })
    },
    // 二级菜单 菜单栏点击
    handleSubItemClick (menu, item) {
      this.$router.push({
        path: menu.path + '/' + item.path
      })
    },
    // 菜单选择
    selectMenu (index) {
      this.$store.commit('changeMenuActive', index);
    }
  }
}
</script>

<style lang="scss">
  .layout {
    height: 100%;
    .header-style {
      text-align: left;
      // background-color: #545c64;
      border-bottom: 1px solid #ddd;
      margin-bottom: 2px;
      font-size: 16px;
      img {
        position: relative;
        top: 6px;
      }
    }
    .el-container, .el-menu {
      height: 100%;
    }
    .el-aside {
      width: 200px !important;
      .el-menu {
        text-align: left;
      }
      .el-menu--inline .el-menu-item {
        padding-left: 55px !important;
      }
      .el-submenu .el-menu-item {
        min-width: 150px;
      }
    }
  }
</style>
