import { combineReducers } from 'redux'
import postReducer from './postReducer'
import buttonReducers from './buttonReducer'
import createbuttonReducers from './createbuttonReducer'
import updatebuttonReducers from './updatebuttonReducer'
const reducers = combineReducers({
    posts: postReducer,
    buttons: buttonReducers,
    createbuttons: createbuttonReducers,
    updatebuttons: updatebuttonReducers,

})
export default (state, action) => reducers(state, action)