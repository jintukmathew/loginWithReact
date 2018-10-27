import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import EachCell from './EachCell';
import './Style.css';


class Main extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: [{"_id":"5b7069b117656643aa1767b1","name":"Project 1","description":"2","image":"http://placehold.it/300","technology":"2","link":"1","team":2,"__v":0},{"_id":"5b706f9dcca899473afa3540","name":"Project 2","description":"project description","image":"http://placehold.it/300","technology":"asd","link":"asd","team":2,"__v":0},{"_id":"5bc1f966a332ca0004c2855f","name":"Project 4","description":"aaa","image":"http://placehold.it/300","technology":"MEAN","link":"https://github.com/RohitLuthra19/react-bootstrap-app","team":1,"__v":0}],
        };
      }
    
      componentDidMount() {
        fetch('https://mk-api.herokuapp.com/resume/project/all')
          .then(response => response.json())
          .then(data => {
              this.setState({ data })
                console.log(data);
          });
      }

  render(){   
    return (

      <div>
          <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                        <li><a href="#">Page 1-1</a></li>
                        <li><a href="#">Page 1-2</a></li>
                        <li><a href="#">Page 1-3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Page 2</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span> Account</a></li>
                    <li><NavLink activeClassName="active"  to="/login"><a href="#"><span className="glyphicon glyphicon-log-in"></span> LogOut</a></NavLink></li>
                    </ul>
                </div>
            </nav>
            <div className="flex">
            {this.state.data.map(key => (
            <EachCell 
                key={key._id}
                data={key}
                >
                </EachCell>
            ))
            }
            </div>

      </div>
    

      
    )
}

}

export default Main;