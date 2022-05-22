import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'dhanashree'
      }
      console.log('constructor LifeCycleB')
    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps LifeCycleB')
        return null
    }
    componentDidMount(){
        console.log('componentDidMount LifecycleB')
    }
  render() {
      console.log('render')
      return <div>LifeCycle B</div>
 }
}
export default LifeCycleB