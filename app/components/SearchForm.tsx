'use client'
import { ChangeEvent, FormEvent, useState } from "react"

interface Props {
    isLoading?: boolean
    onKeywordChange?: (keyword: string) => void
    onQuickSearchKeywordChange?: (keyword: string) => void
}

const SearchForm = (props: Props) => {

    const [quickOptionsTimeout, setQuickOptionsTimeout] = useState<NodeJS.Timeout | undefined>()

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const formValues = Object.fromEntries(formData) as { keyword: string };
        props.onKeywordChange?.(formValues.keyword)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if ( quickOptionsTimeout ) {
            clearTimeout(quickOptionsTimeout)
        }
        setQuickOptionsTimeout(setTimeout( () => {
            props.onQuickSearchKeywordChange?.(e.target.value) 
        }, 300 ))
    }

    return (
        <form 
            onSubmit={handleSearch}
            id='search-form'
            className='flex gap-2 flex-col md:flex-row'>
            <input 
                disabled={props.isLoading}
                onChange={handleInputChange}
                name="keyword"
                required
                className="rounded-md px-4 py-2"
                type="search" placeholder="Search for a stock by name or symbol" />
            <button 
                disabled={props.isLoading}
                className="p-2 bg-blue-600 text-white rounded-md"
                type="submit">Search</button>
        </form>
    )
}

export default SearchForm