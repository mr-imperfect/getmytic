import React, { Component } from 'react'
import './Addmovie.css'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
export default class Addmovie extends Component {
    state={
        title:"",
        cast:"",
        director:"",
        description:"",
        date:"",
        category:"",
    wideimageaddress:""

    }
    
    movieCredentials=(e)=>{
       
       this.setState({
           [e.target.name]:e.target.value
       })


    }
    credentialDetail=(e)=>{
        
        const movieDetails={
            title:this.state.title,
            cast:this.state.cast,
            director:this.state.director,
            description:this.state.description,
            date:this.state.date,
            category:this.state.category,
            wideimageaddress:this.state.wideimageaddress,
        }
    
            
            axios.post("http://localhost:3001/addmovie",movieDetails).then((response)=>{
                console.log(response.data);
            })
    

        
        
        e.preventDefault();
        


    }

    render() {
        

        return (
            <div>
                <div className="container">
                    <h1>Add Movie</h1>
                    <form action="" class="addmovieform">
                        <input type="text" name="title" placeholder="Movie Title" onChange={this.movieCredentials} required/>
                        <input type="text" name="cast" placeholder="Cast" onChange={this.movieCredentials} required/>
                        <input type="text" name="director" placeholder="Director" onChange={this.movieCredentials} required/>
                        <input type="text" name="description" placeholder="Description" onChange={this.movieCredentials} required/>
                        <input type="text" placeholder="wideimageaddress" name="wideimageaddress" onChange={this.movieCredentials} required/>
                        <input type="date" name="date" placeholder="dd/mm/yyyy" onChange={this.movieCredentials} required/>
                        <input type="text" name="category" placeholder="Category" onChange={this.movieCredentials} required/>
                        {/* <input type="text" placeholder="Trailer link"/> */}
                       
                      <button onClick={ this.credentialDetail}>add movie</button>

                    </form>

                </div>
                
            </div>
        )
    }
}
