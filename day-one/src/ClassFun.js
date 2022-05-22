import React, { Component } from 'react'

export default class ClassFun extends Component {
  constructor(){
    super()
    this.state={name:'dhanashree',address:'pune'}
    this.setName=this.setName.bind(this)
  }
  setName(){
    this.setState({name:'xyz'})
    this.setState({address:'satara'})
    this.setState({name:_name})
  }

  render() {
    return (
      <div>
        name:{this.state.name}<br></br>

        address:{this.state.address}
        <button onClick={()=>this.setName('hii')}>change btn</button>



      </div>
    )
  }
}




     