import React, { Component } from 'react'
import './myStyles1.css'

 class form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username : ''
      }
    }
    
    handleNameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }

    submitHandle=event=>{
            alert(`${this.state.username}`)
        }

  render() {
    return (
        <div>
        <form  onSubmit={this.submitHandle}>
            <div className="container">
                <label className=' card mgl30 mgt30' >Name: </label>
                <input className=''
                type     =  'text'
                value    =  {this.state.username}
                onChange =  {this.handleNameChange}
                 />      <br/>

                <label className='mgl30'> Account Type : </label> 
                <select className='mgt20'>
                    <option value='savings'>Savings</option>
                    <option value='joint'>Joint Account</option>
                    <option value='FD'>Fixed Deposit</option>
                </select><br/>

                <div className='pb20'>
                    <button className='mgl400 blue '>Submit</button>    
                    <button className='mgl20 blue'>Feeback</button>
                </div>
            </div>
        </form>
        
        </div>
    )
  }
}
export default form



