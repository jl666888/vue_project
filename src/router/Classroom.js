import Classroom from "@/views/Classroom/Classroom.vue"
import Efficient from '@/views/Classroom/efficient.vue'
import Efficient2 from '@/views/Classroom/efficient2.vue'
import OneTo from '@/views/Classroom/one-to.vue'
import Search from '@/views/Classroom/search.vue'
import Village from '@/views/Classroom/village.vue'
import Weekend from '@/views/Classroom/weekend.vue'
var ClassroomRouter = [{
    path:'/classroom',
    component:Classroom,   
    },
    {path:'/classroom/efficient',component:Efficient},
    {path:'/classroom/efficient2',component:Efficient2},
    {path:'/classroom/oneto',component:OneTo},
    {path:'/classroom/search',component:Search},
    {path:'/classroom/village',component:Village},
    {path:'/classroom/weekend',component:Weekend},
]
export default ClassroomRouter