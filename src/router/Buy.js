import Buy from '@/views/Buy/buy.vue'
import Index from '@/views/Buy/ind.vue'
import Stu from '@/views/Buy/stu.vue'
import addStu from '@/views/Buy/addStu.vue'
import Teacher from '@/views/Buy/celteacher.vue'
var BuyRouter = [
    {path:'/buy',component:Index,redirect:'/buy/buy1',children:[
    {path:'buy1',component:Buy},
    {path:'stu',component:Stu},
    {path:'addstu',component:addStu},
    {path:'teacher',component:Teacher},
    ]},
    
]

export default BuyRouter