import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
//import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import monitor from './views/monitor/index.vue'
import device from './views/device/index.vue'
import user from './views/userCenter/user.vue'
import permissions from './views/userCenter/permissions.vue'
import log from './views/userCenter/log.vue'
import personal from './views/userCenter/personal.vue'
import runLog from './views/system/runLog.vue'
import internetCard from './views/system/internetCard.vue'
import production from './views/production/index.vue'
import cmdhistory from './views/device/cmdhistory.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true,
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-document',
        leaf: true,//只有一个节点
        children: [
            { path: '/index', active:'/index',component: monitor, name: '监控中心' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-news',
        leaf: true,//只有一个节点
        children: [
            { path: '/device', active:'/device', component: device, name: '设备中心' },
            { path: '/cmdhistory',active:'/device', component: cmdhistory, name: '设备中心  /  历史命令' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '用户中心',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/user', active:'/user', component: user, name: '用户管理' },
            { path: '/permissions', active:'/permissions', component: permissions, name: '权限管理' },
            { path: '/log', active:'/log', component: log, name: '用户日志' },
            { path: '/personal', active:'/personal', component: personal, name: '个人资料' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'el-icon-date',
        children: [
            { path: '/runLog', active:'/runLog', component: runLog, name: '系统运行日志' },
            { path: '/internetCard', active:'/internetCard', component: internetCard, name: '互联网卡业务查询' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-date',
        leaf: true,//只有一个节点
        children: [
            { path: '/production', active:'/production', component: production, name: '生产管理' },
        ]
    },
    // {
    //     path: '/',
    //     component: Home,
    //     name: 'Charts',
    //     iconCls: 'el-icon-printer',
    //     children: [
    //         { path: '/echarts', component: echarts, name: 'echarts' }
    //     ]
    // },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;