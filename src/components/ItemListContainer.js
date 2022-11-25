import React, { useEffect, useState } from 'react'
import { getItems } from '../services/firebaseConfig'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';

export default function ItemListContainer() {

    const [items, setItems] = useState([]);
    const [loadingItems, setLoadingItems] = useState(true);
    
    const {categoryName} = useParams();

    useEffect(() => {
        getItems(categoryName)
        .then(data => {
            setItems(data.docs.map(product => { return {id: product.id, ...product.data()}}));
        })
        .catch( errorMessage => {
            console.error(errorMessage);
        })
        .finally(() => { 
            setLoadingItems(false);
        })
        
    }, [categoryName]);

    if (loadingItems) return <h3>Loading Books...</h3>
    
    return (
        <>
        {<div><ItemList items={items}/></div>}
        </>
    )
}


