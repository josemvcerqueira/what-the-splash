import { take, fork, put, call } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

function* handleStatsRequest(id) {
	// retry three times in case of failure
	for (let i = 0; i < 3; i++) {
		try {
			yield put(loadImageStats(id));
			const res = yield call(fetchImageStats, id);
			yield put(setImageStats(id, res.downloads.total));
			return true;
		} catch (error) {}
	}

	yield put(setImageStatsError(id));
}

function* watchStatsRequest() {
	while (true) {
		// take gets access to the state
		const { images } = yield take(IMAGES.LOAD_SUCCESS);

		for (let image of images) {
			yield fork(handleStatsRequest, image.id);
		}
	}
}

export default watchStatsRequest;
