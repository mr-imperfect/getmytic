import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'
export default class Login extends Component {
    state={
        username:"",
        password:""

      
    }
    setDetail=(event)=>{

        this.setState({
            [event.target.name]:event.target.value
        })



    }
    
    passValue=(event)=>{
        const user={
            username:this.state.username,
            password:this.state.password
        }
        axios.post("http://localhost:3001/login",user)
        // console.log({"username":this.state.username});
        // console.log({"password":this.state.password});
    }
   
  

      

     
    render() {
        
        return (
            <div>
            <div className="login">
                <div className="form">

                <form>
                    <h1>Admin Signup</h1>
                    <div className="user">
                    <input type="text"  name="username" onChange={this.setDetail} required/>
                    <br/>
                    <label htmlFor="">Username</label>
                    </div>
                   <div className="pass">
                   <input type="password" name="password" onChange={this.setDetail} required/>
                   <br/>
                    <label htmlFor="">Password</label>
                   </div>
                    <div className="sign">
                    <button onClick={this.passValue} type="button">Sign Up</button>
                    </div>
                </form>
                </div>
               
            </div>
            </div>
        )
    }
}
