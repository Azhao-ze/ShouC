import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div><span onClick={this.fan.bind(this)}> ← </span><span>想听FM</span><input type="text"/></div>
            </div>
        );
    }
    fan(){
        this.props.history.goBack()
    }
}

export default withRouter(Header);