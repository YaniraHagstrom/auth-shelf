import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


function* addItem(action){
    // console.log('in addItem*');
    try{
        // console.log('in addItem*. Here is action.payload:', action.payload);
        // action.payload is object: { description: ' ' , image_url: ' ' }
        yield axios({
            method: 'POST',
            url: '/api/shelf',
            data: action.payload
        })
        yield put ({
            type: 'SAGA_GET_ITEMS'
        })
    }
    catch(error) {
        console.log('error in addItem*:', error)
    }
}



function* addItemSaga(){
    yield takeEvery('SAGA_ADD_ITEMS', addItem)
}


export default addItemSaga;