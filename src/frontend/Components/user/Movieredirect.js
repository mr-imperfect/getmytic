import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Movieredirect.css'
import Redirected from './Redirected';
import { Redirect } from 'react-router-dom';
// import {Dropdown,ButtonGroup,DropdownButton} from 'react-bootstrap';
// import Addmovie from '../madmin/Addmovie'
export default class Movieredirect extends Component {
    state={
        title: [],
        cast:[],
        director: [],
        description: [],
        date: [],
        category:[],
        imageaddress:[],
        everydata:[]
    }
    componentDidMount(){
        axios.get('http://localhost:3001/movieredirect').then((response)=>{
            // console.log(response.data);
            this.setState({
                everydata:response.data
            })

            });

            
               
            

            
            // this.setState({
               
         
            //     title:response.data[0].title,
            //     cast:response.data[0].cast,
            //     director:response.data[0].director,
            //     description:response.data[0].description,
            //     date:response.data[0].date,
            //     category:response.data[0].category,
            //     imageaddress:response.data[0].wideimageaddress
            // })
        // })
    }
    // logout=()=>{
      
    //     return <Redirect to={{pathname:"/usersignin"}}/>  
    // }
    // addmovie=()=>{
    //     return <Redirect to={{pathname:"/addmovie"}}/>
    //     // <Link to="/addmovie"></Link>
    // }
    // logout=()=>{
    //     return <Redirect to={{pathname:"/"}}/>
    // }
    render() {
        // console.log(this.state.everydata);
        
        {this.state.everydata.map((titles,key)=>{
            //  console.log(titles.title);
             {this.state.title.push(titles.title)}
             {this.state.cast.push(titles.cast)}
             {this.state.director.push(titles.director)}
             {this.state.description.push(titles.description)}
             {this.state.date.push(titles.date)}
             {this.state.category.push(titles.category)}
             {this.state.imageaddress.push(titles.wideimageaddress)}
            
             
                })}
            //    let leng= this.state.everydata.length
            //    console.log(leng);

            //    for(var i=0;i<leng;i++){

            //     // console.log(this.state.title[i]);
            //     // console.log(this.state.cast[i]);
            //     // console.log(this.state.director[i]);
            //     // console.log(this.state.description[i]);
            //     // console.log(this.state.date[i]);
            //     // console.log(this.state.category[i]);


            //    }

                
        return (

    
<div>
            <header>
            <div className="header-container">
                <h2>getmytic</h2>

                <form action="">
                    <input type="text" placeholder="Search for movies here.."/>
        </form>

                <div className="button">

                    {/* <select name="" id=""> */}

                    {/* <option value="">hi user</option> */}

                        <Link to="/addmovie">add movie</Link>
                        <br/>
                        <Link to="/usersignin">Logout</Link>
                        
                    {/* </select> */}

             </div>



            </div>
        </header>
<div className="success">

    {this.state.everydata.map((ed)=>{
console.log(ed.title);

        return <Redirected title={{title:ed.title,cast:ed.cast,director:ed.director,description:ed.description,date:ed.date,category:ed.category,image:ed.wideimageaddress}}/>

    })} 

 </div>
                
        
       
 </div>

    
        )
    }
}
