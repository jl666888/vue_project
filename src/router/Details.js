import Activity from '@/views/details/activity.vue'
import Learn from '@/views/details/learn.vue'
import Mobile from '@/views/details/mobile.vue'
import NewUser from '@/views/details/newUser.vue'
import Clas from '@/views/details/clas.vue'
var DetailsRouter = [
    {path:'/details/activity',component:Activity},
    {path:'/details/learn',component:Learn},
    {path:'/details/mobile',component:Mobile},
    {path:'/details/newUser',component:NewUser},
    {path:'/details/clas',component:Clas}
]
export default DetailsRouter