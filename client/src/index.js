import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {getUser} from './redux/actions/login'
import configureStore from './redux/store/configureStore';

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(addUser({email: "user6@gmail.com", password: "user1234"}))

store.dispatch(getUser())

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));