import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'PARENT'
      }
      this.greetParent=this.greetParent.bind(this);
    }

    greetParent(CHILD){
        alert(`hello ${this.state.parentName} from ${CHILD} `)
    }
    
    render() {
    return (
      <div>
        <Child greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default Parent;
