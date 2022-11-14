import React from 'react'

const Search = () => {
    return (
        <div className='search-form'>
            <form className='form-group'>
                <input type='text' className='bg-light' placeholder='جستجو محصولات...' />
                <button className='btn-search'><i className='fa fa-search'></i></button>
            </form>
        </div>
    )
}

export default Search