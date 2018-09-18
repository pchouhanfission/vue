import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ContactUs from '@/components/ContactUs'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})
