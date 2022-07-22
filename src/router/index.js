import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Group from '../views/Group.vue'
import Contact from '../views/Contact.vue'
import Setting from '../views/Setting.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/group',
        component: Group
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/settings',
        component: Setting
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router