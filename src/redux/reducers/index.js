import { combineReducers } from 'redux'
import postReducer from './postReducer'
import buttonReducers from './buttonReducer'
import createbuttonReducers from './createbuttonReducer'
import updatebuttonReducers from './updatebuttonReducer'
import dataReducers from './dataReducer'
import InputReducers from './InputReducer'
import BackgroundcolorReducers from './backgroundColorReducer'
import DisplayMenuReducers from './displayMenuReducer'
const reducers = combineReducers({
    posts: postReducer,
    buttons: buttonReducers,
    createbuttons: createbuttonReducers,
    updatebuttons: updatebuttonReducers,
    data: dataReducers,
    input: InputReducers,
    colormenu: BackgroundcolorReducers,
    displayMenu: DisplayMenuReducers,

})
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => reducers(state, action)