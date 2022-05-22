import React, { Component } from 'react'

export default class JsxFun extends Component {
    constructor(props){
        super()
        console.log(props,'props')
    }
  render() {
    return (
      <div>
          {this.props.name}
          {this.props.address}
      
      </div>
    )
  }
}
