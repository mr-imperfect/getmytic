import axios from 'axios'
import React, { Component} from 'react'
import {Redirect} from 'react-router-dom'
import './Adminmovieedit.css'
// import {Link} from 'react-router-dom'
import { Table } from 'reactstrap';

class Adminmovieedit extends Component{
    state={
        moviedetails:[],

        responsestatus:""
    }
    componentDidMount(){
        axios.get('http://localhost:3001/movieredirect').then((response)=>{
            // console.log(response.data);
            this.setState({
                moviedetails:response.data
            })
            // console.log(this.state.moviedetails);

            });
    }
   delete=(id)=>{
     console.log(id);
    axios.delete(`http://localhost:3001/deletemovie/${id}`).then((resp)=>{
      console.log(resp.data.resp.status);
      this.setState({
        responsestatus:resp.data.resp.status
      })
      if(this.state.responsestatus===true){
        return <Redirect to={{pathname:"/adminmovieedit"}}/>
       
      }
    })
   }
    render(){
        return(
            
    <Table className="rt-table">
    <thead>
      <tr>
        <th>movie id</th>
        <th>Name</th>
        <th>Actor</th>
        <th>Director</th>
        <th>Description</th>
        <th>Released Date</th>
        <th>Category</th>
        <th>Edit</th>
        <th>Delete</th>
       
        
      </tr>
    </thead>
    <tbody>
        

      {this.state.moviedetails.map((key)=>{
          
          return <tr  key={key._id}>
              <td>{key._id}</td>
              <td>{key.title}</td>
              <td>{key.cast}</td>
              <td>{key.director}</td>
              <td>{key.description}</td>
              <td>{key.date}</td>
              <td>{key.category}</td>
              
              
              <td>
              <button className="btn btn-warning ed">Edit</button>
              </td>
              <td>        
                
                 <button className="btn btn-danger ed" onClick={()=>this.delete(key._id)}>Delete</button>
                
              </td>
        </tr>
      })}
    

    </tbody>
  </Table>
        )
    }

}



export default Adminmovieedit