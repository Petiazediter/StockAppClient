const getStockData = async (symbol: string) => {
    const res = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`)
    const data = await res.json()
    return data
}

const StockDetailPage = async ({ params, searchParams }: any) => {

    const { symbol } = params
    const stockData = await getStockData(symbol)
    
    console.log(stockData)

    return <main>
        { Object.keys(stockData).map(key => (<li key={`stock-detail-${key}`}>
            <p>key: {key}</p>
            <p>value: {stockData[key]}</p>
        </li>)) 
        }
        <h1>Stock detail page</h1>
        <p>Stock symbol: {symbol}  </p>
    </main>
}

export default StockDetailPage
