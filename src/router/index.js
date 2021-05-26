import Vue from 'vue'
import Router from 'vue-router'
import SplashScreen from '@/pages/SplashScreen'
import CallCenterInformation from '@/pages/CallCenterInformation'
Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'splash-screen',
            component: SplashScreen
        },
        {
            path: '/callcenter-information',
            name: 'callcenter-information',
            component: CallCenterInformation
        },
    ]
})