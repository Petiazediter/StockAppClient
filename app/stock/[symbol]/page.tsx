import CardList from "@/app/components/CardList"

const getStockData = async (symbol: string) => {
    const res = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`, {
        cache: 'force-cache'
    })
    const data = await res.json()
    
    if ( data.Name && data.Symbol && data.Description ) {
        return data
    }

    console.warn('No data found for symbol or API endpoint is not available. Using mock data.')
    
    return {
        Symbol: 'MSFT',
        AssetType: 'Common Stock',
        Name: 'Microsoft Corporation',
        Description: "Microsoft Corporation is an American multinational technology company which produces computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 21 in the 2020 Fortune 500 rankings of the largest United States corporations by total revenue; it was the world's largest software maker by revenue as of 2016. It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Amazon, and Facebook.",
        CIK: '789019',
        Exchange: 'NASDAQ',
        Currency: 'USD',
        Country: 'USA',
        Sector: 'TECHNOLOGY',
        Industry: 'SERVICES-PREPACKAGED SOFTWARE',
        Address: 'ONE MICROSOFT WAY, REDMOND, WA, US',
        FiscalYearEnd: 'June',
        LatestQuarter: '2023-09-30',
        MarketCapitalization: '2747483816000',
        EBITDA: '108530999000',
        PERatio: '35.86',
        PEGRatio: '2.275',
        BookValue: '29.7',
        DividendPerShare: '2.79',
        DividendYield: '0.0081',
        EPS: '10.31',
        RevenuePerShareTTM: '29.35',
        ProfitMargin: '0.353',
        OperatingMarginTTM: '0.476',
        ReturnOnAssetsTTM: '0.146',
        ReturnOnEquityTTM: '0.391',
        RevenueTTM: '218310001000',
        GrossProfitTTM: '135620000000',
        DilutedEPSTTM: '10.31',
        QuarterlyEarningsGrowthYOY: '0.272',
        QuarterlyRevenueGrowthYOY: '0.128',
        AnalystTargetPrice: '402.33',
        TrailingPE: '35.86',
        ForwardPE: '27.03',
        PriceToSalesRatioTTM: '9.14',
        PriceToBookRatio: '11.05',
        EVToRevenue: '9.21',
        EVToEBITDA: '18.55',
        Beta: '0.885',
        '52WeekHigh': '373.13',
        '52WeekLow': '217.42',
        '50DayMovingAverage': '334.54',
        '200DayMovingAverage': '312.6',
        SharesOutstanding: '7432260000',
        DividendDate: '2023-12-14',
        ExDividendDate: '2023-11-15'
    }
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
