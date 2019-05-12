import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

const store = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Fragment>
					<Header />
					<ImageGrid />
				</Fragment>
			</Provider>
		);
	}
}

export default App;
