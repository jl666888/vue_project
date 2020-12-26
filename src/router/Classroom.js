import Classroom from "@/views/Classroom/Classroom.vue"
import Efficient from '@/views/Classroom/efficient.vue'


import Search from '@/views/Classroom/search.vue'
import Village from '@/views/Classroom/village.vue'

var ClassroomRouter = [{
    path:'/classroom',
    component:Classroom,   
    },
    {path:'/classroom/efficient',component:Efficient},
    {path:'/classroom/search',component:Search},
    {path:'/classroom/village',component:Village},
]
export default ClassroomRouter