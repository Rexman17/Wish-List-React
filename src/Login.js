import React from 'react';
// import {browserHistory} from 'react-router';
import { NavLink } from 'react-router-dom';



class Login extends React.Component {


  render() {
    return (
      <div id="login-container" style={{position: 'fixed', top: '50%', left: '50%'}}>
        <h1 style={{position: 'fixed', top: '40%', left: '40%'}}>Welcome to My Wish List!!!</h1>
        <form style={{position: 'fixed', top: '50%', left: '40%'}}>
          <div className="row">
            <div className="col-6">
              <input type="text" className="form-control" placeholder="first name"/><br />
              <input type="text" className="form-control" placeholder="last name"/>
            </div>
            <div className="col-6">
              <input type="text" className="form-control" placeholder="email"/><br />
              <input type="password" className="form-control" placeholder="password"/>
            </div>
            <NavLink to='/homepage' style={{position: 'fixed', top: '65%', buttom:'20%', left: '46%'}}>
              <button style={{color: '#FF69B4'}}>See My Wishes!</button>
            </NavLink>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;
