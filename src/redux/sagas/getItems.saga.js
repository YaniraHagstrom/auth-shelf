import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


function* getItems(){

}



function* getItemsSaga(){
    yield takeEvery('SAGA_GET_ITEMS', getItems)
}


export default getItemsSaga;