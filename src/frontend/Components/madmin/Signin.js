import React, { Component } from 'react'
import './Signin.css'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
export default class Signin extends Component {

    constructor(props){
        super(props)
    }

       
    state={
        username:"",
        password:"",
        loggedStatus:""

      
    }
    setDetail=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    passValue=(event)=>{
            const user={
                username:this.state.username,
                password:this.state.password,
        
            }
 

            // axios.defaults.headers.common.authorization='Bearer '+localStorage.getItem("admintoken")
        axios.post("http://localhost:3001/adminlogin",user).then(response=>{
            this.setState({
                loggedStatus:response.data.logged
            })

            localStorage.setItem("admintoken",response.data.token)
          
        console.log(this.state.loggedStatus);
            if(this.state.loggedStatus===false){

                console.log("no admin found");
                var invalidity=document.getElementsByClassName('invalid')[0];
                invalidity.innerHTML="Invalid username or password!!!"
                // return <Redirect to={{pathname:"/adminlogin"}}/>
               
    
         }
    
          
          
        })

        
      
        
        
    }

 
      

     
    render() {
       
        if(this.state.loggedStatus===true){
            return <Redirect to={{pathname:"/admin"}}/>
        }
        
          
          


        
        return (
            
            
            <div>
                
            <div className="login">
                <div className="forms">

                <form>
                  <h2 class="invalid"></h2>
                    <h1>Admin SignIn</h1>
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
                    <button type="button" onClick={this.passValue}>Sign In</button>
                    </div>
                    <a href="">forgot password?</a>
                </form>
                </div>
               
            </div>
            
             
            </div>
        )
    }
}
