import React, { Component } from 'react'
import './App.css'
// import Login from './frontend/Components/madmin/Login'
import Ownerlist from './frontend/Components/madmin/Ownerlist'
import Madmin from './frontend/Components/madmin/Madmin'
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import Login from './frontend/Components/madmin/Login'
import Editprofile from './frontend/Components/madmin/Editprofile'
import Addowner from './frontend/Components/madmin/Addowner'
// import Getmytic from './frontend/Components/user/Getmytic'
// import Signin from './frontend/Components/madmin/Signin'
import Userlogin from './frontend/Components/user/Userlogin'
import Usersignin from './frontend/Components/user/Usersignin'

import axios from 'axios';
import Signin from './frontend/Components/madmin/Signin'
import AdminContext,{Admincontext} from '../src/context/Admincontext';
import Addmovie from './frontend/Components/madmin/Addmovie'
import Movieredirect from './frontend/Components/user/Movieredirect'
import Adminmovieedit from './frontend/Components/madmin/Adminmovieedit'
// import Cinemaredirect from './frontend/Components/user/Cinemaredirect'
// import Admincontext from '../src/context/Admincontext'


export default class App extends Component {



  constructor(props){
    super(props)
    
  }
 


 
    // console.log(this.state.ifUser);
  
 

  render(){
    
   
    

    return (
      <div className="app">
        
       
       
        <Router> 
     
       
{/*           
             <Route exact path="/"> <Signin/> </Route>  */}

          
                 <Route  exact  path="/" exact> <Usersignin/></Route>
                 
                 <Admincontext>   
                   
           <Route path="/admin">
                   
<Madmin/>  

</Route>

          
    </Admincontext>

                 

            
                  <Switch>

           {/* <Route path="/adminloginerror"> <Adminloginerror/> </Route> */}

           <Route path="/userlogin"> <Userlogin/></Route>
           {/* <Route path="/userlist"> <Userlist/></Route> */}
           <Route path="/adminlogin"> <Signin/> </Route> 
           <Route path="/movieredirect"> <Movieredirect/>
           
           </Route> 
     
   
          
           
           <Route path="/adminmovieedit"> <Adminmovieedit/> </Route> 
           <Route path="/movieredirect"> <Redirect/> </Route> 
          {/* <Route path="/getmytic"> <Getmytic/>  </Route>  */}


          
          
           {/* <Route path="/master"> <Cinemaredirect/> </Route> */}
        
       
          <Route path="/owners"> <Ownerlist/> </Route>
          <Route path="/addmovie"> <Addmovie/> </Route>
          <Route path="/editprofile"> <Editprofile/> </Route>
          <Route path="/addowner"> <Addowner/> </Route>
          <Route path="/login"> <Login/> </Route>
          </Switch>



        </Router>
        
      </div>
    )
  }
}
