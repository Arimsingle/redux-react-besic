import { combineReducers } from 'redux'
import { numberReducer } from './number/reducer'
import { photoReducer } from './photo/reducer'
export const reducers = combineReducers({
    number: numberReducer,
    photo: photoReducer,
})
