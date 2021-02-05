import React, { Component } from 'react'

import './Editprofile.css'

export default class Editprofile extends Component {
    render() {
        return (
            <div>
                 <div className="login">
                <div className="form">

                <form action="">
                    <h1>Edit Profile</h1>
                    <div className="user">
                    <input type="text"  name="username" required/>
                    <br/>
                    <label htmlFor="">Username</label>
                    </div>
                   <div className="pass">
                   <input type="password" name="password" required/>
                   <br/>
                    <label htmlFor="">Update Password</label>
                   </div>
                   <div className="image">
                   <input type="file" name="image" required/>
                   <br/>
                   </div>
                    <div className="sign">
                    <button>Update Profile</button>
                    </div>
                   
                </form>
                </div>
               
            </div>

                
            </div>
        )
    }
}
