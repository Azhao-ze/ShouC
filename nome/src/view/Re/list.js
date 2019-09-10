import React, { Component } from 'react';
import {Redirect,Route,HashRouter,Switch,withRouter} from "react-router-dom"

class list extends Component {
    render() {
        let {item}=this.props
        console.log(this.props.item.req.groupid)
        return (
            <div className="Re-list" onClick={this.Deti.bind(this,item.req.groupid)}>
                <img src={item.stGroupInfo.sPicUrl}/>
                <ul>
                    <li><h3>{item.stGroupInfo.sName}</h3></li>
                    <li>观影收听{item.stGroupInfo.sName}</li>
                    <li>收听{item.stGroupInfo.iGroupId}</li>
                </ul>
            </div>
        );
    }
    Deti(id){
        this.props.history.push({pathname:"/detils/"+id})
    }
}

export default withRouter(list);