import React, { Component } from 'react';
import store from "../store/index"
class My extends Component {
    state={tru:[false,false,false,false]}
    render() {
        // console.log(store.getState())
        let {tru}=this.state
        // console.log(tru)s
        return (
            <div className="My">
                <div className={tru[0]?"My-box":"My-guan"}><div className="My-Box-sC" onClick={this.Kai.bind(this,0)}><h3>我的已购</h3><span>{!tru[0]?"→":"↓"}</span></div></div>


                <div className={tru[1]?"My-box":"My-guan"} >
                <div className="My-Box-sC" onClick={this.Kai.bind(this,1)}><h3>我的收藏</h3><span>{!tru[1]?"→":"↓"}</span></div>
                {store.getState().Sc.length?store.getState().Sc.map((item,index)=>{
                    return <div key={index} className="MY-BOx"><img src={item.sCoverUrl}/>
                    <ul className="MyUl">
                        <li><h4>{item.sTitle}</h4></li>
                        <li>{item.sLastTrackTitle}</li>
                        <li>收听{item.iCategory2}</li>
                    </ul></div>
                }):null }
                </div>

                <div className={tru[2]?"My-box":"My-guan"} ><div className="My-Box-sC" onClick={this.Kai.bind(this,2)}><h3>我的下载</h3><span>{!tru[2]?"→":"↓"}</span></div></div>
                <div className={tru[3]?"My-box":"My-guan"} ><div className="My-Box-sC" onClick={this.Kai.bind(this,3)}><h3>最近收听</h3><span>{!tru[3]?"→":"↓"}</span></div></div>
            </div>
        );
    }
    Kai(id){
        // console.log(id)
        this.state.tru[id]=!this.state.tru[id]
        this.setState({tru:this.state.tru})
    }
}

export default My