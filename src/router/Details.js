import Activity from '@/views/Details/activity.vue'
import Learn from '@/views/Details/learn.vue'
import Mobile from '@/views/Details/mobile.vue'
import NewUser from '@/views/Details/newUser.vue'
import Clas from '@/views/Details/clas.vue'
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