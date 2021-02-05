import axios from 'axios';
import React,{Component} from 'react';
import { Table } from 'reactstrap';

class Userlist extends Component{
  constructor(){
    super();
  }
state={
  userData:[]
}
  componentDidMount(){
    axios.get('http://localhost:3001/userlist').then((user)=>{
      this.setState({
        userData:user.data
      })
    })
  }
 
  render(){
    // console.log(this.state.userData);
    console.log(this.state.userData);
  return (
    
    <Table dark bordered hover>
      <thead>
        <tr>
          <th>User id</th>
          <th>User Name</th>
          <th>User Encrypted Password</th>
          
        </tr>
      </thead>
      <tbody>
      
        {this.state.userData.map((item,key)=>{
          return <tr  key={item.key}>
            <td>
              {item._id}
              
            </td>
            <td>
              {item.userusername}
            </td>
            <td>
              {item.userpassword}
            </td>
          </tr>
        })}
        
    

 
  
      </tbody>
    </Table>
  );

  
  }
}

export default Userlist;