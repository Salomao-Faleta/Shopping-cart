import React from 'react';
import './Products.css';
import { useState, useEffect } from 'react';
import { fetchProducts } from '../../api/fetchProducts';
import { ProductCard } from '../ProductCard/ProductCard';

export function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts('camisinha')
            .then((response) => {
                setProducts(response);
            });
    }, []);

    console.log(products);

    return (
        <section className="products container">

            <ProductCard />

        </section>
    );
}
