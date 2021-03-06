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
          path: '/custom',
          title: '自定义',
          icon: 'el-icon-location',
          component: Index,
          children: [
            {
              path: 'serchInput',
              title: 'input',
              component: () => import('@/views/custom/searchInput')
            }
          ]
        },
        {
          path: '/demo',
          title: 'demo',
          icon: 'el-icon-lollipop',
          component: Index,
          children: [
            {
              path: 'luckDraw',
              title: '抽奖',
              component: () => import('@/views/demo/luckDraw.vue')
            },
            {
              path: 'htmlToPdf',
              title: '导出pdf',
              component: () => import('@/views/demo/htmlToPdf.vue')
            }
          ]
        },
        {
          path: '/echarts',
          title: '可视化',
          icon: 'el-icon-menu',
          children: [
            {
              path: 'bar',
              title: '柱状图',
              component: () => import('@/views/echarts/bar')
            }
          ]
        },
        {
          path: '/js',
          title: 'js',
          icon: 'el-icon-set-up',
          component: Index,
          children: []
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
