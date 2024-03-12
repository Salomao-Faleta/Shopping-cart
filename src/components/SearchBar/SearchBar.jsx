import { React, useState } from 'react';
import './SearchBar.css';
//Icone de lupa do header
import { IoSearch } from 'react-icons/io5';
import { fetchProducts } from '../../api/fetchProducts';

export function SearchBar() {

    const [searchValue, setSearchValue] = useState('');

    //Barra de pesquisa
    const handleSearch = async (e) => {
        e.preventDefault();

        const products = await fetchProducts(searchValue);

        setSearchValue('');

        console.log(products);        
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="search"
                className="search__input"
                placeholder="Buscar produtos"
                required
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />

            <button type="submit" className="search__button">
                <IoSearch />
            </button>

        </form>

    );
}
