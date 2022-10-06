import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ShelfItem from './ShelfItem';


export default function ShelfList(){
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch({
            type: 'SAGA_GET_ITEMS'
        })

    },[]);

    const items = useSelector(store=> store.items);

    return(
        <ul>
            {items.map(item => (
                <ShelfItem key={item.id} item={item}/>
            ))}

        </ul>
    )
}