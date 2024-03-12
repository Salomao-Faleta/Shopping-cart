import React from 'react';
import './Products.css';
import { useState, useEffect } from 'react';
import { fetchProducts } from '../../api/fetchProducts';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loading } from '../Loading/Loading';

export function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts('vestido')
            .then((response) => {
                setProducts(response);
                setLoading(false);
            });
    }, []);

    return (

        (loading ? <Loading /> : <section className="products container">
            {products.map((product) => <ProductCard key={product.id} data={product} />)}
        </section>
        )
    );
}
