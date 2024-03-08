import React from 'react';
import './Products.css';
import { useState, useEffect } from 'react';
import { fetchProducts } from '../../api/fetchProducts';

export function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts('camisas')
            .then((response) => {
                setProducts(response);
            });
    }, []);

    console.log(products);

    return (
        <section className="products container">

        

           
        </section>
    );
}
