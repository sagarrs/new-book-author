import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/login'
import storyReducer from '../reducers/story';

const configureStore = () => {
    const store = createStore(combineReducers({
        users: usersReducer,
        stories: storyReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore