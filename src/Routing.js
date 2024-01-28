import React,{useReducer} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './redbus/router/Home'
import {Context} from './redbus/context/Context'
import {state,updateState} from './redbus/context/Reducer'
export const Routing=()=>{
    const [a,b]=useReducer(updateState,state);
    return(
        <Context.Provider value={{a,b}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}