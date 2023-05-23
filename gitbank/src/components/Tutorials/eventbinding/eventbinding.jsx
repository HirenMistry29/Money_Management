import React, { Component } from "react";

class eventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'EVENT BINDING'
      }
      this.clickHandler = this.clickHandler.bind(this)
      
      
    }
    
    clickHandler() {
        this.setState({
            message: 'THANK YOU'
        })
        
    }

    render () {
        return (
            <div>
                <div><h1>{this.state.message}</h1></div>
                <button onClick={()=>this.clickHandler()}>WITHDRAW</button>
            </div>
            
        )
    }
} 

export default eventBinding;