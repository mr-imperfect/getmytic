import React,{Component} from 'react'
// import '../../../../src/backend/server'
import './Madmin.css'
import axios from 'axios'
// import {Redirect} from 'react-router-dom'
// import Admincontext from '../../../context/Admincontext'

import Dashboard from './Dashboard'
import AdminContext,{Admincontext}  from '../../../../src/context/Admincontext'
import {BrowserRouter as Router,Switch,Route, Redirect,Link} from 'react-router-dom'
import Userlist from '../user/Userlist'

class Madmin extends Component{


constructor(props){
  super(props);
}
state={

}
componentDidMount(){
  const config={headers:{
    authorization:"Bearer "+localStorage.getItem("admintoken")
  }
  }


    axios.get("http://localhost:3001/adminverify",config).then((response)=>{
      console.log(response.data);
      this.setState({
        user:response.data.logged

      })
     
    })
}
  render(){
    if(this.state.user===false){
      return <Redirect to={{pathname:"/adminlogin"}}/>
    }
   
   
  
    
 
    return(
  
      <div className="madmin">
        
           <div className="header">
           <div className="innerheader">
           <h2>getmytic</h2>
           <h4>hii {this.context.adminName}</h4>
           </div>


           
           
               </div>


               <div className="renderplussection">
       <div className="section">
       
          

         <div className="madmin-image">
        
         </div>
<div className="heading">

<h2>admin</h2>
</div>

{/* <div className="dashboard">
 <Link to="/admin/dashboard"> <h4>Dashboard</h4></Link>
</div> */}
{/* <div className="dashboard">
<Link to="/owners"> <h4>Owners</h4></Link>
</div> */}
{/* <div className="dashboard">
<h4>Theaters</h4>
</div> */}
<div className="dashboard">
<Link to="/admin/userlist"><h4>Users</h4></Link>
</div>
{/* <div className="dashboard">
<h4>Bookings</h4>
</div>  */}
<div className="dashboard">
<Link to="/adminmovieedit"><h4>Movies</h4></Link>
</div>
<div className="dashboard">
<Link to="/addmovie"> <h4>Add Movie</h4></Link>
</div>
{/* <div className="dashboard">
<Link to="/addowner"> <h4>Add Owner</h4></Link>
</div> */}
{/* <div className="dashboard">
<Link to="/editprofile"> <h4>Edit Profile</h4></Link>
</div> */}
<div className="dashboard">
<Link to="/movieredirect"> <h4>Added Movies</h4></Link>
</div>




       </div>
       <div className="rendering">
         <Switch>
         <Route path="/admin/dashboard"><Dashboard/></Route>
         <Route path="/admin/userlist"><Userlist/></Route>
         </Switch>
       </div>
       </div>
  
       
 
  
      </div>

    )

  }
 
}

Madmin.contextType=AdminContext;
export default Madmin;