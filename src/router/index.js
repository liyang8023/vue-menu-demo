import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index'
import Index from '../components/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/map',
          title: '地图',
          icon: 'el-icon-location',
          component: Index,
          children: [
            {
              path: 'baiduMap',
              title: '百度地图',
              component: () => import('@/views/map/baiduMap')
            }
          ]
        },
        {
          path: '/G6',
          title: 'G6',
          icon: 'el-icon-location',
          component: Index,
          children: [
            {
              path: 'g6-editor',
              title: 'g6-editor',
              component: () => import('@/views/G6/g6-editor/index')
            }
          ]
        },
        {
          path: '/vue',
          title: 'vue',
          icon: 'el-icon-lollipop',
          component: Index,
          children: [
            {
              path: 'vueTest',
              title: 'vuexDemo',
              component: () => import('@/views/vue/test.vue')
            }
          ]
        },
        {
          path: '/ElementUI',
          title: 'ElementUI',
          icon: 'el-icon-menu',
          component: resolve => require(['../views/elementUi/UiTest.vue'], resolve)
        },
        {
          path: '/js',
          title: 'js',
          icon: 'el-icon-set-up',
          component: Index,
          children: [
            {
              path: 'function',
              title: 'function',
              component: () => import('@/views/js/function.vue')
            }
          ]
        },
        {
          path: '/css',
          title: 'css',
          icon: 'el-icon-link',
          component: Index,
          children: [
            {
              path: 'centered',
              title: '水平居中',
              component: () => import('@/views/css/centered.vue')
            },
            {
              path: 'graphics',
              title: '画图形',
              component: () => import('@/views/css/graphics.vue')
            },
            {
              path: 'layout',
              title: '三栏布局',
              component: () => import('@/views/css/layout.vue')
            }
          ]
        }
      ]
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
  // console.log(to, from, next);
  if (to.matched.length ===0) {  //如果未匹配到路由
    from.name ? next({ name:from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();    //如果匹配到正确跳转
  }
});

export default router;
