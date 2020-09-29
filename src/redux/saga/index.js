import {put, call, takeEvery} from 'redux-saga/effects';
import {getData, LOAD_DATA} from "../actions/actionData";

import {fetchData} from "../../api";

function* workerLoadData() {
    try {
        const data = yield call(fetchData)
        yield put(getData(data))
    } catch (e) {
        console.log(e)
    }
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}