import React from "react";
import { Component } from "react";
import './dbStyle.css'
import Transaction from '../../assets/transactions.png'


const DashBoard = () => {   
     return (
          <div>
               <div style={{fontFamily:'Inter-Regular'}}
                    className="mgl30 mgt20">
                    Git Bank
               </div>

               <div>
                    <div>
                         <img src={Transaction} width="35" height="20" className="mgl35 mgt30"/>
                         <label style={{fontFamily:'Inter-Bold', fontSize:'18px', fontWeight:'700px'} }>Dashboard</label> <br/>
                    
                         <img src={Transaction} width="35" height="20" className="mgl35 mgt10"/>
                         <label className="pb50" style={{fontFamily:'Inter-Regular', fontSize:'18px'} }>Transaction</label>
                    </div>
               </div>

               <div>
                    <h1 className="fontSize60 header-color left-allign mg30  pl50 pb50">GIT BANK</h1>
               
               </div>
          </div>
              
     )
}
// 
export default DashBoard;