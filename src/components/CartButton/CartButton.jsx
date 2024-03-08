import React from 'react';
import './CartButton.css';
import { HiOutlineShoppingCart } from 'react-icons/hi2';

export function CartButton(){
    return (
        <button type="button" className="cart__button">
            <HiOutlineShoppingCart />

            <span className="cart-status">3</span>
        </button>
    );
}
