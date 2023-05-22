import React, { Component } from "react";

class TransactionButton extends Component{

    constructor() {
        super() 
            this.state = {
                
                message: 'Click the button to complete the Transaction.',
                balance: '100',
                withdraw: 0
            }
    }

    changeMessage=()=>{
        this.setState(prevState=>({

            balance: prevState.balance - prevState.withdraw,
            message: 'Transaction has been completed',
            withdraw: 0
        }))
    }

    changeAmount=()=> {
        this.setState((prevState) => ({
            withdraw : prevState.withdraw + 1

        }))
    }

    render() {
        return(
            <div>
                Account Balance : <span/> {this.state.balance}<br/>
                Enter the Amount to withdraw : {this.state.withdraw} <span/> <br/>
                    <button onClick={()=>this.changeAmount()}>increment </button><br/>
                {this.state.message}<br/>
                <button onClick={()=>this.changeMessage()}>Finish</button>
            </div>
             
        )
    }
}

export default TransactionButton;