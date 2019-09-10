import React, { Component } from 'react';
import DataJson from "../Json/Re.json"
import store from "../store/index"

class detile extends Component {
    state={data:DataJson,DataJsons:[]}
    render() {
        // console.log(DataJson)
        console.log(this.state.DataJsons)
        return (
            <div className="Detile">
                {this.state.DataJsons.length?this.state.DataJsons.map((item,index)=>{
                    return <div key={index}><img src={item.sCoverUrl}/>
                    <ul className="DetileUl">
                        <li><h3>{item.sTitle}</h3></li>
                        <li>{item.sLastTrackTitle}</li>
                        <li>收听{item.iCategory2}</li>
                    {item.emChargeType==0?<span className="Tian" onClick={this.Tian.bind(this,item)}>添加收藏</span>:null}
                   {item.emChargeType==1?<span className="Tian" onClick={this.Shan.bind(this,item.iCreateTime)}>取消收藏</span>:null}


                    </ul>
                    </div>
                }):null}
            </div>
        );
    }
    Tian(itm){
        this.state.DataJsons.forEach((item,index)=>{
            if(item.iCreateTime==itm.iCreateTime){
                item.emChargeType=1
                
            }
        })
        this.setState({})
        store.dispatch({
            type:"Tian",
            Id:itm
        })
    }
    Shan(id){
        this.state.DataJsons.forEach((item,index)=>{
            if(item.iCreateTime==id){
                item.emChargeType=0
                
            }
        })
        this.setState({})
        store.dispatch({
            type:"Shan",
            id:id
        })
    }
    componentDidMount(){
        this.state.data.data.forEach((item,index)=>{
            if(item.req.groupid==this.props.match.params.id){
                this.setState({DataJsons:item.vecAlbumList})
                console.log(this.state.DataJsons)
            }
        })
    }
}

export default detile;