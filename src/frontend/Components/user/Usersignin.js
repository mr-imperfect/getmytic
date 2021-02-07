import axios from 'axios'
import React,{Component} from 'react'
import { Redirect,Link } from 'react-router-dom'
import './Usersignin.css'
class Usersignin extends Component{

    state={
        userusername:"",
        userpassword:"",
        userLogged:""
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
        axios.post('http://localhost:3001/usersignin',user).then(response=>{
            console.log(response.data);
            this.setState({
                userLogged:response.data
            })

        })

        if(!this.state.userLogged.userLogged){
            console.log("no admin found");
            var invalidity=document.getElementsByClassName('invalid')[0];
            invalidity.innerHTML="Invalid username or password!!!"
            
     }
      
    }
  

    render(){
       
       
        if(this.state.userLogged.userLogged){
            return <Redirect to={{pathname:"/movieredirect"}}/>   
                     
        }
    
     
        return(

            

            <div>
                

            <div className="login">
            
                <div className="forms">
                

                <form>
               
                  <h2 className="invalid"></h2>
                    <h1>User SignIn</h1>
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
                    <button onClick={this.passValue} type="button">Sign In</button>
                    </div>
                    <Link to="/">Dont have an account?</Link>
                </form>
                </div>
               
            </div>
            </div>
            
        )
    }
}

export default Usersignin;