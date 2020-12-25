import Center from '@/views/Center/Center.vue'
import About from '@/views/Center/about.vue'
import All from '@/views/Center/all.vue'
import Await from '@/views/Center/await.vue'
import Consult from '@/views/Center/consult.vue'
import Coupon from '@/views/Center/coupon.vue'
import Going from '@/views/Center/going.vue'
import Student from '@/views/Center/student.vue'
import Success from '@/views/Center/success.vue'
var CenterRouter = [{
    path:'/center',
    component: Center,
    },
    {path:'/center/about',component:About},
    {path:'/center/all',component:All},
    {path:'/center/await',component:Await},
    {path:'/center/consult',component:Consult},
    {path:'/center/coupon',component:Coupon},
    {path:'/center/going',component:Going},
    {path:'/center/student',component:Student},
    {path:'/center/success',component:Success},
    

]
export default CenterRouter