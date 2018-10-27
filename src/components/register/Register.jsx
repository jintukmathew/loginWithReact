
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email:'',
          password:''
        };
        this.register = this.register.bind(this);
        this.registerApi = this.registerApi.bind(this);
      }

      updateInputValue(evt , inputArea) {
        if(inputArea == "name"){
            
            this.setState({
                name: evt.target.value
            });

        }
        if(inputArea == "email"){
            this.setState({
                email: evt.target.value
            });

        }
        if(inputArea == "pass"){
            this.setState({
                password: evt.target.value
            });

        }
      }

      register(){
        var a = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
          }
          this.registerApi(a);
      }

      registerApi(data){
        console.log(data);

        fetch('https://mk-api.herokuapp.com/resume/auth/register', {
          method: 'post',
          body: JSON.stringify(data),
          mode: 'no-cors',
          credentials: 'include'
        }).then(function(response) {
          console.log(response);
          //return response.json();
          let loc = window.location.origin+"/login";
          window.location.replace(loc);
        }).then(function(data) {
          console.log('Created Gist:', 123);
        });


      }


  render(){   
    return (

        <div>
            <header className="App-header">
                <div id="space">
                <div id="buttons">
                <NavLink activeClassName="active"  to="/register"><p id="signupButton" className="yellow">Sign In</p></NavLink>
                <NavLink activeClassName="active"  to="/login"><p id="loginButton" className= "blue"> Login</p></NavLink>
                </div>

                    <div>    
                    <div className="wrapper">
                        <div className="form-signin">       
                        <h2 className="form-signin-heading">Please register</h2>
                        <input value={this.state.name} onChange={evt => this.updateInputValue(evt,'name')} type="text" className="form-control" id="name" placeholder="Name" />
                        <input value={this.state.email} onChange={evt => this.updateInputValue(evt,'email')} type="text" className="form-control" id="username" placeholder="Email Address" />
                        <input value={this.state.password} onChange={evt => this.updateInputValue(evt,'pass')} type="password" className="form-control" id="password" placeholder="Password" />  
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.register}>Sign In</button>   
                        </div>
                    </div>
                    </div>
                </div>
            </header>
    
        </div>
    

      
    )
}

}

export default Register;