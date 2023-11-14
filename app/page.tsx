"use client"
import { useState } from "react";
import SearchForm from "./components/SearchForm";

export default function Home() {

  const [keyword, setKeyword] = useState('')
  const [quickSearchKeyword, setQuickSearchKeyword] = useState<string | undefined>()

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
