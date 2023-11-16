"use client"
import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import useClientAPICall, { SearchResultData } from "./hooks/useClientAPICall";
import StockList from "./components/StockList";

export default function Home() {

  const [keyword, setKeyword] = useState('')
  const [quickSearchKeyword, setQuickSearchKeyword] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<SearchResultData | undefined>()

  const { getData } = useClientAPICall()

  useEffect( () => {
    if ( !(keyword.replaceAll(' ', '') === '') ) {
      setIsLoading(true)
      getData(keyword)
        .then( v => {
          setData(v)
          console.log('Data: ', v)
          setIsLoading(false)
        })
    } else {
      setData(undefined)
    }
  }, [keyword])

  useEffect( () => {
    //console.log('Quick search keyword changed: ', quickSearchKeyword)
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
        />
      <StockList
        isLoading={isLoading} 
        stocks={data?.bestMatches}
      />
    </main>  
  )
}
