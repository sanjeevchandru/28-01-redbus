import detail from './details.json'
export const state={
    arr:detail.det,
    arr1:detail.title
}
export const updateState=(state,action)=>{
    if(action.type==="update"){
        return {...state,arr:action.payload}
    }
}