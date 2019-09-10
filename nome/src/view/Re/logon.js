import React, { Component } from 'react';

class logon extends Component {
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
    }]}
    render() {
        return (
            <div className="Re-Login">
            {
                this.state.data.map((item,index)=>{
               return  <div className="Re-box" key={index}> 
                        <div style={{backgroundColor:item.color,color:'#ff671b',fontSize:40}}></div>
                        <p>{item.name}</p>
                       </div>
                })
            }
                
            </div>
        );
    }
}

export default logon;