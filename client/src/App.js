import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'

import LoginForm from './components/authentication/Login'
import Home from './components/layout/Home'
import Register from './components/authentication/Register'
import Story from './components/stories/ListStory'
import {startLogout} from './redux/actions/logout'
import {isAuthenticated} from '../src/commons/isAuth'

import StoryNew from './components/stories/NewStory'
import ShowStory from './components/stories/ShowStory'
import EditStory from './components/stories/EditStory'

import './App.css';

function App(props) {
  return (
    <BrowserRouter>
        <div className="container">
          {/* <nav>
              <ul>
                <li className="logo">Author</li>
              </ul>
            
              <ul>
                <li><Link to="/">  Home </Link></li>
                <li><Link to="/about">  About </Link></li>
                <li><Link to="/mission">  Mission </Link></li>
                <li><Link to="/contact">  Contact </Link></li>
                <li><Link to="/login">  Login </Link></li>
              </ul>  
          </nav> */}

            {
              isAuthenticated(props.users) &&(
                <div>
                  {/* logged in */}
                  <nav>
                    <ul>
                      <li className="logo">Author</li>
                    </ul>
                  
                    <ul>
                      <li><Link to="/logout">Logout</Link></li>
                    </ul>  
                  </nav>
                  <Switch>
                    <Route path="/" component={Story} exact={true}/>
                    <Route path="/login" component={Story} exact={true}/>
                    <Route path="/register" component={Story} exact={true}/>
                    <Route path="/story" component={Story} exact={true}/>
                    <Route path="/story/new" component={StoryNew} exact={true}/>
                    <Route path="/story/show/:id" component={ShowStory} exact={true}/>
                    <Route path="/story/edit/:id" component={EditStory} />

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
              )
            }

            {
              !isAuthenticated(props.users) &&(
                <div>
                  {/* logged out */}
                  <nav>
                    <ul>
                      <li className="logo">Author</li>
                    </ul>
                  
                    <ul>
                      <li><Link to="/">  Home </Link></li>
                      <li><Link to="/">  About </Link></li>
                      <li><Link to="/">  Mission </Link></li>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Register</Link></li>
                    </ul>  
                  </nav>
                  <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/login" component={LoginForm} exact={true}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/story" component={LoginForm} exact={true}/>
                    <Route path="/story/new" component={LoginForm} exact={true}/>
                  </Switch>
                </div>
              )
            }

              {/* <Link to="/logout">Logout</Link><br/>
              <Link to="/login">Login</Link><br/>
              <Link to="/register">Register</Link><br/> */}

            {/* <Switch>
              <Route path="/" component={Home} exact={true}/>
              <Route path="/login" component={LoginForm} exact={true}/>
              <Route path="/register" component={Register}/>
              <Route path="/story" component={Story} exact={true}/>
              <Route path="/story/new" component={StoryNew}/>

              <Route path="/logout" component={() => {
                return (
                  <div>
                    {props.dispatch(startLogout())}
                    <Link to="/" className="btn btn-outline-success">Redirect To Home</Link>
                  </div>
                )
              }}/>
            </Switch> */}
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
