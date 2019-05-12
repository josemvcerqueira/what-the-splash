import { takeEvery, put } from 'redux-saga/effects';

// watcher saga -> actions -> worker saga

// worker saga
function* workerSaga() {
	console.log('Hey from worker');
	yield put({ type: 'ACTION_FROM_WORKER' });
}

// watcher saga
function* rootSaga() {
	yield takeEvery('Hello', workerSaga);
}

export default rootSaga;
