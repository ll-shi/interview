// 使用map来创建一个权限表。
const roleMap = new Map();
// 数组里面使用对象类型，防止后序代码修改。
const coustomer = [
  {
    name: 'product'
  },
  {
    name: 'list',
  }
];
const admin = [
  ...coustomer,
  {
    name: 'person'
  },
  {
    name: 'demo'
  },
  {
    name: 'permission'
  }
]
const AsyncRouter = [
  {
    path: '/product',
    name: 'product',
    // component: home,
    meta: {
      title: '商品',
      hidden: false,
      icon: 'el-icon-s-goods'
    },
    children:[
      {
        path: 'list',
        name: 'list',
        // component: () => import('../views/goodList.vue'),
        meta:{
          title: '商品列表',
          hidden: false,
          icon: 'el-icon-more'
        },
        children:[
          {
            name:'demo'
          }
        ]
      },
      {
        path: 'add',
        name: 'add',
        props:true,
        // component: () => import('../views/addGood.vue'),
        meta: {
          title: '添加商品',
          hidden: false,
          icon: 'el-icon-circle-plus-outline'
        }
      }
    ]
  },
  {
    path: 'permission',
    name: 'permission',
    // component: home,
    meta:{
      title: '权限管理',
      hidden: false,
      icon: 'el-icon-user'
    },
    children: [
      {
        path:'person',
        name: 'person',
        // component: () => import('../views/permission.vue'),
        meta:{
          title: '管理员列表',
          hidden: false,
          icon: 'el-icon-info'
        }
      }
    ]
  }
];
roleMap.set('coustomer',coustomer);
roleMap.set('admin',admin);
// routerMenu代表一个路由表,需要根据路由名称对路由进行一个一级路由，二级路由进行一个筛选。
function filter(routerMenu,allowRouterName){
  routerMenu.map((router,i) =>{
    // router表示上一级路由,如果一级路由没有权限，子路由不被允许访问
  let children = router.children;
  let index = allowRouterName.indexOf(router.name);
  if(index === -1){
      routerMenu.splice(i,1);
    }
  if(!children){
      return;
  }      
  // 有子路由进行深度搜索
  filter(children,allowRouterName);
  });
}
function filterRouter(role,routerMenu){
  const allowRouterName = roleMap.get(role).map(item => item.name);
  filter(routerMenu,allowRouterName);
}
filterRouter('admin',AsyncRouter);
// filterRouter('coustomer',AsyncRouter);
console.log(AsyncRouter);