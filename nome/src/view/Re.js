import React, { Component } from 'react';
import Imgs from "./Re/Imgs"
import Datajson from "../Json/Re.json"
import Login from "./Re/logon"
import Divx from "./Re/dixs"
import List from "./Re/list"
class Re extends Component {
    state={data:Datajson.data}
    render() {
       let {data}=this.state
       console.log(data)
        return (
            <div className="Re">
                <Imgs></Imgs>
                <Login></Login>
                <Divx></Divx>
                <div className="Re-Ps">
                <h3>热门专辑</h3>
                <span>查看更多</span>
                </div>
                {data.map((item,index)=>{
                    return <List key={index} item={item}></List>
                })}
            </div>
        );
    }
}

export default Re;