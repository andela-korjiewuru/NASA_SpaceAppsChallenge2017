import React from 'react';
import ReactDOM  from 'react-dom';
import Input from './input.js';
import Log from './Log';
import getData from './getData';


 export default class Emergency extends React.Component{
      constructor(props){
        super(props);
        this.state = {
             reports: []
        };
      }
    handleUpdate(){
        const PATH_BASE = "http://firefightapp.herokuapp.com/api/v1/reports";
        fetch(`${PATH_BASE}`, {method:'GET'}).then(response => response.json()).then(json =>{ 
        var data = json.data;
        this.setState({ reports: data });
    });
    }
     componentDidMount(){
         this.handleUpdate();
     }
     render(){
         return(
             <div className="row">
                <div className="col s12 m4 input card-container">
                    <Input />
                </div>
                <div className="col s12 m8 input card-container">
                    <Log reports={this.state.reports} />
                </div>
            </div>
         );
     }
}