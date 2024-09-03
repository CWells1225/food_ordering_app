import React, { useState, useEffect } from 'react';
import { getCollectionAPI } from './Api';

export default function Product() {
    const [product, setProduct] = useState(null);
    const [pro, setPro] = useState(null);

    useEffect(() => {
        const getList = async () => {
            try {
                const data = await getCollectionAPI();
                console.log(data)
                setProduct(data); // Assuming the API returns the products you want to display
                setPro(data); // Set this based on your needs, or remove if unnecessary
            } catch (err) {
                console.log(err);
            }
        };
        getList();
    }, []);

    return (
        <div className='menu-item'>
            {product && product.map((item) => (
                <div
                    key={item.id} // Add a unique key for each item
                    style={{ backgroundImage: `url(${item.image})` }}
                    className='menu-item-image'
                >
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.amount}</p>
                    <button className='btn'>Add to basket</button>
                </div>
            ))}
        </div>
    );
}