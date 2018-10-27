

import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Main from './components/main/Main';


// const NavBar = () => (
//   <ul>
//     <li>
//       <NavLink activeClassName="active"  to="/">Home</NavLink>
//     </li>
//     <li>
//       <NavLink to="/admin">Admin</NavLink>
//     </li>
//     <li>
//       <NavLink
//         to={{
//           pathname: '/logs',
//           search: '?filter=active', 
//           state: { fromNavBar: true }
//         }}
//       >
//         Logs
//       </NavLink>
//     </li>
//     <li>
//       <NavLink replace={true} to="/children">Children</NavLink>
//     </li>
//   </ul>
// );

const App = () => (
  <div className="App">
    
      <Router>
        <div>
          {/* <NavBar /> */}
          <Route exact path="/" component={Register} />
          <Route strict path="/login" component={Login} />
          <Route strict path="/register" component={Register} />
          <Route exact path="/main" component={Main} />
          <Route path="/logs" render={() => <h1>Logs</h1>} />
          <Route
            path="/children"
            children={({ match }) => {
              if (match) {
                return <h1>Children</h1>;
              }
              return null;
            }}
          />
        </div>
      </Router>
  </div>
);

export default App;