import React from 'react';
import './ProductCard.css';
import { FaCartPlus } from 'react-icons/fa6';

export function ProductCard() {
    return (
        <section className="product-card">
            <img src="https://http2.mlstatic.com/D_700281-MLB70204637893_062023-W.jpg" alt="Product Card" className="card__image"/>

            <div className="card__infos">
                <h2 className="card__price">R$200.00</h2>
                <h2 className="card__title">BLAAAAA</h2>
            </div>

            <button className="button__addCart" type="button">
                <FaCartPlus />
            </button>

        </section>
    );
}
