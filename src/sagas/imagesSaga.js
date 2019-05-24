import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setError } from '../actions';

export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
	try {
		// select effect allows you to grab a slice of the state
		const page = yield select(getPage);
		// call suspends the saga until the fetchimages is suceeded
		const images = yield call(fetchImages, page);
		// put is to dispatch an action
		yield put(setImages(images));
	} catch (error) {
		// dispatch error
		yield put(setError(error.toString()));
	}
}

function* watchImagesLoad() {
	yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesLoad;
