import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

function* rootSaga() {
	yield all([imagesSaga(), statsSaga()]);
}

export default rootSaga;

// put is to dispatch an action
// take goes with call
// take allows u to get full control and doesnt call a worker saga right away
