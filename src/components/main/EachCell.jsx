import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css'

class EachCell extends Component {

    constructor(props) {
        super(props);
      }

  render(){   
    return (

      <div className="carContentainer">
          <div className="card">
            <img src={this.props.data.image} alt="Avatar"/>
            <div className="container1">
                <h4><b>{this.props.data.name}</b></h4> 
                <p>{this.props.data.description}</p> 
            </div>
            </div>
      </div>
    

      
    )
}

}

export default EachCell;