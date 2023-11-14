"use client"
import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";

export default function Home() {

  const [keyword, setKeyword] = useState('')
  const [quickSearchKeyword, setQuickSearchKeyword] = useState<string | undefined>()

  useEffect( () => {
    console.log('Keyword changed: ', keyword)
  }, [keyword])

  useEffect( () => {
    console.log('Quick search keyword changed: ', quickSearchKeyword)
  }, [quickSearchKeyword])

  return (
    <main className="m-5">
      <h1 className='text-3xl m-4'>Hello Search view!</h1>
      <SearchForm 
        onKeywordChange={setKeyword}
        onQuickSearchKeywordChange={setQuickSearchKeyword}
        />
    </main>  
  )
}
