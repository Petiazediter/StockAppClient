export default function Home() {
  return (
    <main className="m-5">
      <h1 className='text-3xl m-4'>Hello Search view!</h1>
      <form className='flex gap-2 flex-col md:flex-row'>
        <input 
          className="rounded-md px-4 py-2"
          type="search" placeholder="Search for a stock by name or symbol" />
        <button 
          className="p-2 bg-blue-600 text-white rounded-md"
          type="submit">Search</button>
      </form>
    </main>  
  )
}
