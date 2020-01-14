
# # Demo

## 目录结构说明

``` shell
├── build/                            // 构建脚本
├── config/                           // 项目环境变量
├── src/
│  ├── assets/                        // 组件资源目录，这里的资源会被webpack构建
│  ├── components/                    // 全局组件，公用的放在components目录，否则放在views里
│  ├── router/                        // vue-router的路由目录
│  │  └──index.js                     // router配置
│  ├── store/                         // vuex文件目录
│  │  ├── modules/                    // 可以创建不同的模块区         //
│  │  └──index.js                     // 引入vuex，集中设置所有应用层级的stats状态
│  ├── views/                         // 具体业务页面组件，可以建立子目录
│  ├── App.vue                        // 根组件
│  └── main.js                        // 入口逻辑
├── index.ejs                         // index.html模板
├── static/                           // 非组件的资源文件，如图片、字体
├── test/
│  ├── unit/                          // 单元测试
│  │  ├── specs                       // 测试用例的目录结构和被测试的文件保持一致，文件名以.spec.js结尾
│  └── e2e/
├── package.json
└── nginx.conf
```

## Dependency

- vue2
- vue-router
- vuex
- element-ui
- vue-baidu-map
- @antv/g6-editor

## 主要搭建项目，用vue + element-ui搭建一个菜单栏，配置路由，实现类似后台管理系统
