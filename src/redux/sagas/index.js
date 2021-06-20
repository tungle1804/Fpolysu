import { all } from 'redux-saga/effects'
import menuSaga from './menuSaga'

export default function* rootSaga() {
    yield all([
        menuSaga(),
    ])
}