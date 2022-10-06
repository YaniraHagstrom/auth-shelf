import './shelfItem.css';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ShelfItem({item}){
    const dispatch = useDispatch();

    const user = useSelector(state=> state.user);
    // const userId = user.id
    const deleteItem = ()=> {
        console.log('delete button clicked')
        dispatch({
            type: 'SAGA_DELETE_ITEM',
            payload: item.id
        })
    }

    return(
        <li>
            <img src={item.image_url} />
            <p>{item.description}</p>
            { user.id === item.user_id ? 
                <IconButton aria-label="delete"             color="primary"
                onClick={deleteItem}
                >
                    <DeleteIcon />
                </IconButton> :
                <IconButton 
                    aria-label="delete" disabled  color="primary">
                    <DeleteIcon />
                </IconButton>
            }
        </li>
    )
}