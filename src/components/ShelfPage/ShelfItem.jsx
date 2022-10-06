import './shelfItem.css';

export default function ShelfItem({item}){

    return(
        <li>
            <img src={item.image_url} />
            <p>{item.description}</p>
        </li>
    )
}