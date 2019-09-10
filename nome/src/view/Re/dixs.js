import React, { Component } from 'react';

class dixs extends Component {
    state={data:[{
        "name":"网络小说",
        "color":"lightcoral"
    },{
        "name":"情感",
        "color":"lightsalmon"
    },{
        "name":"财经",
        "color":"linen"
    },{
        "name":"相声",
        "color":"lightskyblue"
    },{
        "name":"儿童",
        "color":"lightgrey"
    },{
        "name":"儿童",
        "color":"lightgrey"
    }]}
    render() {
        return (
            <div className="Divx">
            {
                this.state.data.map((item,index)=>{
               return  <div className="Divx-box" key={index} style={{backgroundColor:item.color,color:"#666666"}}> 
                        <div ></div>
                        <p>{item.name}</p>
                       </div>
                })
            }
                
            </div>
        );
    }
}

export default dixs;