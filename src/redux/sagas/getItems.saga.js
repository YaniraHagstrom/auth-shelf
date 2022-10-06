import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


function* getItems(){
    try{ const dbItems = yield axios({
        method: 'GET',
        url: '/api/shelf'
    })
    yield put({
        type: 'SET_ITEMS',
        payload: dbItems.data
    })
    }catch (error) {
        console.log('Error getting items:', error);
    }
}



function* getItemsSaga(){
    yield takeEvery('SAGA_GET_ITEMS', getItems)
}


export default getItemsSaga;