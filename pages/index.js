import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from './../stores/main'
import {onReady} from "./../actions/main"
import withRedux from 'next-redux-wrapper'


class Main extends React.Component
{
    static getInitialProps ({ store, isServer }) {
        
        return { isServer }
      }

      componentDidMount()
      {
          this.props.onReady();
      }

      render()
      {
          console.log("App ",this.props.isReady)
         return (<div>Hello</div>) 
      }
}

export const mapStatetoProps = (state)=>{
    return {
        isReady:state.isReady
    }
}
export const mapDispatchToProps = (dispatch)=>{
    return {
        onReady:bindActionCreators(onReady,dispatch)
    }
}

export default withRedux(initStore,mapStatetoProps,mapDispatchToProps)(Main)
