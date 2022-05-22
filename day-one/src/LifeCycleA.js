
import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'dhanashree'

      }
      console.log('LifeCycleA constructor')
    }
    static getDerivedStateFromProps(state,props){
        console.log('getDerivedStateFromProps LifeCycleA')
        return null
    }
    componentDidMount(){
        console.log('componenetDidMount LifecycleA')
    }
  render() {
    console.log('render LifeCycleA')
    return(
        <div>
            <div>LifeCycleA</div>
            <LifeCycleB/>
        </div>
    )

    
    

  }
}
export default LifeCycleA
