import updateSections from './updateComponent'
import {combineReducers} from 'redux'

const allreducers = combineReducers({
    story : updateSections,
});

export default allreducers;