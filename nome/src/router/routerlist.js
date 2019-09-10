import Re from "../view/Re"
import Jing from "../view/Jing"
import List from "../view/List"
import My from "../view/My"
import Detils from "../view/detile"

let routerlist=[
    {
        path:"/re",
        component:Re
    },{
        path:"/jing",
        component:Jing
    },{
        path:"/list",
        component:List
    },{
        path:"/my",
        component:My
    },{
        path:"/detils/:id",
        component:Detils
    },{
        path:null,
        redirect:"/my"
    }
]

export default routerlist