import {combineReducers,createStore,compose,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import music from './common/pages/music/redux/reducer'
const reducer = combineReducers({
  music
});

const middlewares = [thunkMiddleware,logger];
const storeEnhancers = compose(
    applyMiddleware(...middlewares),

);

export default createStore(reducer,{},storeEnhancers)