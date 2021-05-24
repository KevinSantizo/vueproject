import Vue from 'vue'
import Router from 'vue-router'
import CallCenterWaiting from '@/pages/CallCenterWaiting'
import CallCenterPersonalInformation from '@/pages/CallCenterPersonalInformation'
Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'callcenter-waiting',
            component: CallCenterWaiting
        },
        {
            path: '/callcenter-personal-information',
            name: 'callcenter-personal-information',
            component: CallCenterPersonalInformation
        }
    ]
})