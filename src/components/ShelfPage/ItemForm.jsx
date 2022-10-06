import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ItemForm() {

    const dispatch = useDispatch();

    const [newItem, setNewItem] = useState('');
    const [newItemDescription, setNewItemDescription] = useState('');
    const [newItemImage, setNewItemImage] = useState('');
    

    const handleAddItem = () => {
        console.log('in handleAddItem');
    }

    return (
        <div>
            <h3>
                Add an Item!
            </h3>
            <div>
                <TextField 
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
                id="filled-basic" 
                label="description" 
                variant="filled" />
            </div>
            <div>
                <TextField 
                value={newItemImage}
                onChange={(e) => setNewItemImage(e.target.value)}
                id="filled-basic" 
                label="image url" 
                variant="filled" />
            </div>
            <div>
                <Button onClick={handleAddItem} variant="contained">Add to Shelf</Button>
            </div>
        </div>
    )

}


export default ItemForm;