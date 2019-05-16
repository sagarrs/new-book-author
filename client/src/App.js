import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import LoginForm from './components/authentication/Login'
import Home from './components/layout/Home'
import Register from './components/authentication/Register'
import Story from './components/stories/Story'
import {startLogout} from './redux/actions/logout'
import {isAuthenticated} from '../src/commons/isAuth'
import './App.css';

function App(props) {
  console.log(props.users)
  return (
    <BrowserRouter>
        <div>

        <Link to="/">Home</Link>
        {
          isAuthenticated(props.users) &&(
            <div>
              logged in
              <Link to="/logout">Logout</Link>
            </div>
          )
        }

        {
          !isAuthenticated(props.users) &&(
            <div>
              logged in
              <Link to="/login">Login</Link><br/>
              <Link to="/register">Register</Link><br/>
            </div>
          )
        }

            {/* <Link to="/logout">Logout</Link><br/>
            <Link to="/login">Login</Link><br/>
            <Link to="/register">Register</Link><br/> */}

          <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/login" component={LoginForm} exact={true}/>
            <Route path="/register" component={Register}/>
            <Route path="/story" component={Story}/>

            <Route path="/logout" component={() => {
              return (
                <div>
                  {props.dispatch(startLogout())}
                  <Link to="/" className="btn btn-outline-success">Redirect To Home</Link>
                </div>
              )
            }}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(App);
