import { takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';

// watcher saga -> actions -> worker saga

// worker saga
function* handleImagesLoad() {
	console.log('fetching images from unsplash');
}

// watcher saga
function* rootSaga() {
	yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;

// put is to dispatch an action

// take goes with call
// take allows u to get full control and doesnt call a worker saga right away
