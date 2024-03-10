import React from 'react';
import './ProductCard.css';
import propTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa6';
import { formartCurrency } from '../../utils/formatCurrency';

export function ProductCard( {data} ) {

    const {title, thumbnail, price} = data;


    return (
        <section className="product-card">
            {/* Regex para mudar a qualidade da imagem */}
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="Product Card" className="card__image"/>

            <div className="card__infos">
                <h2 className="card__price">{formartCurrency(price, 'BRL')}</h2>
                <h2 className="card__title">{title}</h2>
            </div>

            <button className="button__addCart" type="button">
                <FaCartPlus />
            </button>

        </section>
    );
}

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;
