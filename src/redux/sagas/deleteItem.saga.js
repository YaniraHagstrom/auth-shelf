import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


function* deleteItem(action){

    // ITEM ID SENT FROM CLIENT SIDE TO BE DELETED.
    const itemId = action.payload

    try {
        const delItem = yield axios.delete ({
            method: 'DELETE',
            url: `/api/shelf/${itemId}`

        })
    } catch {
        console.log('DELETE ERROR ON DELETEITEM.SAGA.JS');
    }

} // END OF deleteItem



function* deleteItemSaga(){
    yield takeEvery('SAGA_DELETE_ITEM', deleteItem)
}


export default deleteItemSaga;