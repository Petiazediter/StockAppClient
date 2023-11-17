'use client'
import { ChangeEvent, FormEvent, useState } from "react"
import { SearchResultData } from "../hooks/useClientAPICall"
import Suggestions from "./Suggestions"

interface Props {
    isLoading?: boolean
    onKeywordChange?: (keyword: string) => void
    onQuickSearchKeywordChange?: (keyword: string) => void
    suggestionData: SearchResultData
    isSuggestionLoading: boolean
    isSuggestionShowing: boolean
}

const SearchForm = (props: Props) => {

    const [quickOptionsTimeout, setQuickOptionsTimeout] = useState<NodeJS.Timeout | undefined>()

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const formValues = Object.fromEntries(formData) as { keyword: string };
        props.onKeywordChange?.(formValues.keyword)
        handleBlur()
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if ( quickOptionsTimeout ) {
            clearTimeout(quickOptionsTimeout)
        }
        setQuickOptionsTimeout(setTimeout( () => {
            props.onQuickSearchKeywordChange?.(e.target.value) 
        }, 300 ))
    }

    const handleBlur = () => {
        if ( quickOptionsTimeout ) {
            clearTimeout(quickOptionsTimeout)
        }
        props.onQuickSearchKeywordChange?.('')
    }

    window.onclick = (e) => {
        if ( 
            e.target !== document.getElementById('search-form')
            && e.target !== document.getElementById('suggestions')
            ) 
        {
            handleBlur()
        }
    }

    return (
        <form 
            onSubmit={handleSearch}
            id='search-form'
            className='my-5 w-1/2 flex gap-2 justify-center flex-col md:flex-row relative' >
            <input 
                disabled={props.isLoading}
                onChange={handleInputChange}
                name="keyword"
                required
                onAbort={handleBlur}
                className="rounded-md px-4 py-2 w-full"
                type="search" placeholder="Search for a stock by name or symbol" />
            <button 
                disabled={props.isLoading}
                className="p-2 bg-blue-600 md:w-1/3 disabled:bg-gray-400 text-white rounded-md"
                type="submit">Search</button>
            { 
                props.isSuggestionShowing ? 
                    <Suggestions
                        isLoading={props.isSuggestionLoading}
                        data={props.suggestionData} /> : 
                    undefined 
            }
        </form>
    )
}

export default SearchForm