import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import root reducer
import rootReducer from './reducers/index';

// Default data
import config from './data/config';
import posts from './data/posts';
import comments from './data/comments';


const defaultState = {
    posts,
    comments
};

export const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);
