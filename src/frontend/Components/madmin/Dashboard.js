import React,{Component} from 'react'
import {Line} from 'react-chartjs-2'
import './Dashboard.css'

class Dashboard extends Component{
    
       
   
    state={ 
        arr:[7,6,5,4,4,3],data:{
        labels:[
            '1-1-2021',
            '2-1-2021',
            '3-1-2021',
            '4-1-2021',
            '5-1-2021',
            '6-1-2021',
        ],
        datasets:[
            {
                label:'Water usage in(L)',
                data:[], 
                backgroundColor:'rgba(255, 16, 98,0.5)',
                borderColor:'blue',
                pointBorderColor:'green',
                pointBackgroundColor:'green'

            }
        ]
    },

    val:""
}
// chartUpdate=(e)=>{

//     this.setState({
//         [e.target.name]:e.target.value

//     })
    

// }
    upda=(chart)=>{

    //   this.state.arr.push(this.state.val)

        // console.log(this.state.arr);
        console.log(this.state.data.datasets[0].data);
        this.state.arr.map((key)=>{
            this.state.data.datasets[0].data.push(key)
        })
        

      console.log(this.state.data.datasets[0].data);
    //    e.preventDefault();
    
        //  console.log("hii");
                // console.log(this.state.data.datasets[0].data);
        //   e.preventDefault();
        //  chart.update();    

      


    }


    render(){
    return (
        <div className="line">

            <h1>User Dashboard</h1>
            <input type="text"  name="val"/>
                <button type="button" onClick={this.upda}>Submit</button>
        
            <div className="dash">
            <Line data={this.state.data} />
            </div>
      
        </div>
    )

    }
}
export default Dashboard
