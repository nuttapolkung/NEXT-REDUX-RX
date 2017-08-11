import {actionTypes} from "./../stores/main"

export const onReady = () => (dispatch)=>{
    return dispatch({type:actionTypes.READY,data:true})
}