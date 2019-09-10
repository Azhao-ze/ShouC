import React, { Component } from 'react';
import Routerlist from "../router/routerlist"
import Routerview from "../router/routerview"
import {HashRouter,NavLink} from "react-router-dom"
import {withRouter} from "react-router-dom"
class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home-box">
                <ul>
                   <NavLink to="/my">  <li>我的</li></NavLink> 
                   <NavLink to="/re">  <li>热门</li></NavLink> 
                   <NavLink to="/list"><li>分类</li></NavLink> 
                   <NavLink to="/jing"><li>精品</li></NavLink> 
                 </ul>
                </div>
                <div>
                        <Routerview router={Routerlist}></Routerview>
                 
                </div>
            </div>
        );
    }
}

export default withRouter(Home);