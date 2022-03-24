import React from "react";

const SearchBar = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input
                type='text'
                name='search'
                placeholder="Search Parks"
                onChange={props.onChange}
            />
            <button type="submit">
                Search
            </button>
        </form>
    )
}

export default SearchBar