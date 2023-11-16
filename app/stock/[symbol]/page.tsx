import CardList from "@/app/components/CardList"

const getStockData = async (symbol: string) => {
    const res = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`)
    const data = await res.json()
    return data
}

type StockDetails = {
    Name: string
    Symbol: string
    AssetType: string
    Description: string
} & Record<string, string>

const StockDetailPage = async ({ params, searchParams }: any) => {

    const { symbol } = params
    const stockData: StockDetails = await getStockData(symbol)
    
    console.log(stockData)

    const cardData = Object.entries(stockData).filter(([key]) => (key !== 'Description' && key !== 'Name' && key !== 'Symbol'))

    return <main className="p-5">
        <h1 className='m-2 font-extrabold text-2xl'>{stockData.Name} <span className='text-blue-500'>({stockData.Symbol})</span></h1>
        <p className='text-xs text-gray-600 mb-5'>{stockData.Description}</p>
        <CardList 
            data={cardData.map(([key,value]) => ({ key, value: <>
                <h1>{key}</h1>
                <p>{value}</p>
            </> }))} 
        />
    </main>
}

export default StockDetailPage
