import Activity from '@/views/details/activity.vue'
import Learn from '@/views/details/learn.vue'
import Mobile from '@/views/details/mobile.vue'
import NewUser from '@/views/details/newUser.vue'
import Clas from '@/views/details/clas.vue'
var DetailsRouter = [
    {
        path: '/Details/activity',
        component: Activity
    },
    {
        path: '/Details/learn',
        component: Learn
    },
    {
        path: '/Details/mobile',
        component: Mobile
    },
    {
        path: '/Details/newUser',
        component: NewUser
    },
    {
        path: '/Details/clas',
        component: Clas
    },
]
export default DetailsRouter