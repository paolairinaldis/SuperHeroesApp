import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/superHeroReducer';
import {createStore, applyMiddleware} from 'redux';
import {fetchSuperHeroesAPI} from './actions/superHeroActions';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('storeMarvel', store.getState()));
store.dispatch(fetchSuperHeroesAPI(1,50));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);