import { React, useState} from 'react';

import './SearchBar.css';

//Icone de lupa do header
import { IoSearch } from 'react-icons/io5';

export function SearchBar() {

    const [searchValue, setSearchValue] = useState('');

    return (
        <form className="search-bar">
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
