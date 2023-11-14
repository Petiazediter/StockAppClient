"use client"
import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import useClientAPICall from "./hooks/useClientAPICall";

export default function Home() {

  const [keyword, setKeyword] = useState('')
  const [quickSearchKeyword, setQuickSearchKeyword] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  const { getData } = useClientAPICall()

  useEffect( () => {
    setIsLoading(true)
    getData(keyword)
      .then( v => {
        setIsLoading(false)
        console.log('Data received: ', v)
      })
  }, [keyword])

  useEffect( () => {
    //console.log('Quick search keyword changed: ', quickSearchKeyword)
  }, [quickSearchKeyword])

  return (
    <main className="m-5">
      <h1 className='text-3xl m-4'>Hello Search view!</h1>
      <SearchForm 
        isLoading={isLoading}
        onKeywordChange={setKeyword}
        onQuickSearchKeywordChange={setQuickSearchKeyword}
        />
    </main>  
  )
}
