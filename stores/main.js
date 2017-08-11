import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initState = {
    isReady:false
}

export const actionTypes = 
{
    READY:'READY'
}

export const reducer = (state = initState,action ) =>{
  switch(action.type)
  {
      case actionTypes.READY :
        return Object.assign({},state,{
            isReady:action.data
        })
      break;

    default :return state
  }
}

export const initStore = (initialState = initState ) =>{
    return createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunkMiddleware)))
}