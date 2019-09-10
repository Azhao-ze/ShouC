import React, { Component } from 'react';
import {Redirect,Route,HashRouter,Switch} from "react-router-dom"


const Routerview=(props)=>{
    let {router}=props
    // console.log(router)
    return <Switch>
        {
            router.map((item,index)=>{
                return item.component?<Route path={item.path} key={index} render={(props)=>{
                    return <item.component children={item.children} {...props}/>
                }}></Route>:<Redirect key={index} to={item.redirect}></Redirect>
            })
        }
    </Switch>
}
export default Routerview