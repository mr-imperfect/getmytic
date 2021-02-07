import axios from 'axios'
import React,{Component} from 'react'
import { Redirect,Link} from 'react-router-dom'

import './Userlogin.css'
class Userlogin extends Component{

    state={
        userusername:"",
        userpassword:"",
        user:""
    }

    setDetail=(event)=>{

        this.setState({
            [event.target.name]:event.target.value
        })

    }

    passValue=()=>{
        let user={
            userusername:this.state.userusername,
            userpassword:this.state.userpassword
        }
        axios.post('https://gentle-refuge-60854.herokuapp.com',user).then((response)=>{
            console.log(response.data.usercreated);
            this.setState({
                user:response.data.usercreated
            })
                // return <Redirect to={{pathname:"/usersignin"}}/>   
                         
            
        })
    }


    render(){
        if(this.state.user===true){
            return <Redirect to={{pathname:"/usersignin"}}/>   
                     
        }
    

        return(

            <div>

            <div className="login">
            
                <div className="forms">
                

                <form>
               
                  <h2 className="invalid"></h2>
                    <h1>User SignUp</h1>
                    <div className="user">
                    <input type="text"  name="userusername" onChange={this.setDetail} required/>
                    <br/>
                    <label htmlFor="">Username</label>
                    </div>
                   <div className="pass">
                   <input type="password" name="userpassword" onChange={this.setDetail} required/>
                   <br/>
                    <label htmlFor="">Password</label>
                   </div>
                    <div className="sign">
                    <button onClick={this.passValue} type="button">Sign Up</button>
                    </div>
                    <Link to="/usersignin">Already have an account?Login</Link>
                </form>
                </div>
               
            </div>
            </div>
            
        )
    }
}

export default Userlogin;