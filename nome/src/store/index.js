import React, { Component } from 'react';
import {createStore} from "redux"
let reducer=(state={Sc:[]},action)=>{
    let newState=JSON.parse(JSON.stringify(state))
    switch (action.type){
        case "Tian" :newState.Sc.push(action.Id)
        return newState;
        case "Shan":
        let a= newState.Sc.findIndex(item=>item.iCreateTime==action.id)
        newState.Sc.splice(a,1)
        
        return newState;
        default:return newState
    }
}
let store = createStore(reducer)
export default store