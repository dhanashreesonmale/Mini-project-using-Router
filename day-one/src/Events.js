import React, { Component } from 'react'

export default class Events extends Component {
    constructor(props){
        super()
        console.log(props,'props')
    }
    click(name){
        console.log(name,'name')
    }

  render() {
    return (
      <div>

          {this.props.name}
          <button onClick={()=>this.click('hello')}>Ok</button>
      </div>
    )
  }
}
