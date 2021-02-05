import React, { Component } from 'react'

import './Addowner.css'

export default class Addowner extends Component {
    render() {
        return (
            <div>

<div className="login">
                <div className="form">

                <form class="ownerdetails" action="">
                    <h1>Add Owner</h1>
                    <div className="user">
                    <input type="text"  name="name" required/>
                    <br/>
                    <label htmlFor="">Owner Name</label>
                    </div>
                    <div className="mail">
                   <input type="mail" name="mail" required/>
                   <br/>
                    <label htmlFor="">Email address</label>
                   </div>
                   <div className="pass">
                   <input type="password" name="password" required/>
                   <br/>
                    <label htmlFor="">Password</label>
                   </div>
                   <div className="ownernumber">
                   <input type="text" name="ownernumber" required/>
                   <br/>
                    <label htmlFor="">Phone number</label>
                   </div>
                   <div className="address">
                   <input type="text" name="address" required/>
                   <br/>
                    <label htmlFor="">Enter address and Place</label>
                   </div>
                   <div className="theatrename">
                   <input type="text" name="theatrename" required/>
                   <br/>
                    <label htmlFor="">Theatre name</label>
                   </div>
                   <div className="theatreplace">
                   <input type="text" name="theatraplace" required/>
                   <br/>
                    <label htmlFor="">Theatre Place</label>
                   </div>
                  
                   <div className="ownerimage">
                   <input type="file" name="ownerimage" required/>
                   <br/>
                   </div>
                    <div className="ownersign">
                    <button>Submit</button>
                    </div>
                   
                </form>
                </div>
               
            </div>

                


                
            </div>
        )
    }
}
