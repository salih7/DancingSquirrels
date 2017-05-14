import React from 'react';
import Signup from './Signup.jsx';
import LocalLogin from './LocalLogin.jsx';
import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom';


const Login = () => {
  return (
    <Router>    
      <div className="loginForms">
        <div>
          <div>
            <a href="/login/facebook">
              <img src="https://scontent.fsnc1-4.fna.fbcdn.net/v/t39.2365-6/16344632_403881753293914_7761668832074137600_n.png?oh=5c9cd7483ae09e1bb47951d3a4d70749&amp;oe=59BE20ED" alt="" width="300"/>
            </a>
          </div>
          <div>
            <a href="/login/google">
              <img src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png" width="300"/>
            </a>
          </div>
          <div>
            <a href="/login/github"><img src='https://help.dropsource.com/wp-content/uploads/sites/4/2017/02/gh-login-button.png' width ="300"/></a>
          </div>
          <div className="login">
            <Link to="/login/local">Login</Link>
          </div>
          <div className="login">
            <Link to="/signup">Signup</Link>
          </div>
        </div>
        <Route path="/login/local" component={LocalLogin} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  )
}


export default Login;