import axios from 'axios'
import React,{Component} from 'react'
import './Userlogin.css'
class Userlogin extends Component{

    state={
        userusername:"",
        userpassword:""
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
        axios.post('http://localhost:3001/',user)
    }


    render(){

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
                    <a href="">Already have an account?Login</a>
                </form>
                </div>
               
            </div>
            </div>
            
        )
    }
}

export default Userlogin;