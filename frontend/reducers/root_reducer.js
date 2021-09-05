import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_errors_reducer';
import error from './session_errors_reducer';


const rootReducer = combineReducers({
    entities,
    session,
    error
});

export default rootReducer;