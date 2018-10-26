import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

class Login extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    };
    this.login = this.login.bind(this);
    this.loginApi = this.loginApi.bind(this);
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

  login(){
    var a = {
        email:this.state.email,
        password:this.state.password
      }
      this.loginApi(a);
  }

  loginApi(data){
    console.log(data);

    fetch('https://mk-api.herokuapp.com/resume/auth/login', {
      method: 'post',
      body: JSON.stringify(data),
      mode: 'no-cors'
    }).then(function(response) {
      console.log(response);
      window.localStorage.setItem("jwt", response);
      let loc = window.location.origin+"/main";
      window.location.replace(loc);
    }).then(function(data) {
      console.log('Created Gist:', 123);
    });


  }



  render(){   
    return (

      <div>
        <div id="space">
          <div id="buttons">
          <NavLink activeClassName="active"  to="/register"><p id="signupButton" className="blue">Sign In</p></NavLink>
          <NavLink activeClassName="active"  to="/login"><p id="loginButton" className= "yellow"> Login</p></NavLink>
          </div>

              <div>    
              <div className="wrapper">
                <div className="form-signin">       
                  <h2 className="form-signin-heading">Please login</h2>
                  <input value={this.state.email} onChange={evt => this.updateInputValue(evt,'email')} type="text" className="form-control" id="username" placeholder="Email Address" />
                  <input value={this.state.password} onChange={evt => this.updateInputValue(evt,'pass')} type="password" className="form-control" id="password" placeholder="Password" />  
                  <button className="btn btn-lg btn-primary btn-block" onClick={this.login}>Login</button>   
                </div>
              </div>
              </div>
        </div>
    
      </div>
    

      
    )
}

}

export default Login;