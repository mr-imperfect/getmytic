import React, { Component,createContext } from 'react';
import axios from 'axios';
 const AdminContext=createContext();
 export class Admincontext extends Component {
    state={
        adminName:"admin",
    }

    


    
    render() {
        const {adminName}=this.state;
        return (
            <AdminContext.Provider value={{

                adminName
               
            }}>
                {this.props.children}
            </AdminContext.Provider>

        )
    }
}

export default AdminContext ;