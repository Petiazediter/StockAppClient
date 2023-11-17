"use client"
import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import useClientAPICall, { SearchResultData } from "./hooks/useClientAPICall";
import StockList from "./components/StockList";
import Suggestions from "./components/Suggestions";

export default function Home() {

  const [keyword, setKeyword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<SearchResultData | undefined>()
  
  const [quickSearchKeyword, setQuickSearchKeyword] = useState<string | undefined>()
  const [quickSearchData, setQuickSearchData] = useState<SearchResultData | undefined>()
  const [isQuickSearchLoading, setIsQuickSearchLoading] = useState(false)
  const [isQuickSearchShowing, setIsQuickSearchShowing] = useState(false)

  const { getData } = useClientAPICall()

  useEffect( () => {
    if ( !(keyword.replaceAll(' ', '') === '') ) {
      setIsLoading(true)
      getData(keyword)
        .then( v => {
          setData(v)
          setIsLoading(false)
        })
    } else {
      setData(undefined)
    }
  }, [keyword])

  useEffect( () => {
    if ( quickSearchKeyword && quickSearchKeyword.replaceAll(' ', '').length >= 3 ) {
      setIsQuickSearchLoading(true)
      setIsQuickSearchShowing(true)
      getData(quickSearchKeyword)
        .then(v => {
          setQuickSearchData(v)
          setIsQuickSearchLoading(false)
        })
    } else {
      setIsQuickSearchShowing(false)
    }
  }, [quickSearchKeyword])

  return (
    <main className="p-5 w-full">
      <h1 className='text-3xl m-4 text-center font-extrabold'>
        Stock App
      </h1>
      <SearchForm 
        isLoading={isLoading}
        onKeywordChange={setKeyword}
        onQuickSearchKeywordChange={setQuickSearchKeyword}
        suggestionData={quickSearchData ?? { bestMatches: []}}
        isSuggestionShowing={isQuickSearchShowing}
        isSuggestionLoading={isQuickSearchLoading}
      />
      <StockList
        isLoading={isLoading} 
        stocks={data?.bestMatches}
      />
    </main>  
  )
}
