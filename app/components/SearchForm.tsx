'use client'

import { FormEvent } from "react"
const SearchForm = () => {

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('search button clicked! :)')
    }
    
    return (
        <form 
            onSubmit={handleSearch}
            id='search-form'
            className='flex gap-2 flex-col md:flex-row'>
            <input 
                className="rounded-md px-4 py-2"
                type="search" placeholder="Search for a stock by name or symbol" />
            <button 
                className="p-2 bg-blue-600 text-white rounded-md"
                type="submit">Search</button>
        </form>
    )
}

export default SearchForm