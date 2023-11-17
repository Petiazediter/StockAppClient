export interface StockData {
    "1. symbol": string,
    "2. name": string,
    "3. type": string,
    "4. region": string,
    "5. marketOpen": string,
    "6. marketClose": string,
    "7. timezone": string,
    "8. currency": string,
    "9. matchScore": string
}
export interface SearchResultData {
    bestMatches: StockData[]
}

const useClientAPICall = () => {
    const fetchAPI = async (keyword: string): Promise<SearchResultData> => {
        const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`)
        const data = await response.json()
        if ( data['bestMatches'] ) {
            return data as SearchResultData;
        } else if ( data['Information'] ) {
            console.warn('API call limit reached! Using fake information!')
            return {
                "bestMatches": [
                    {
                        "1. symbol": "TSCO.LON",
                        "2. name": "Tesco PLC",
                        "3. type": "Equity",
                        "4. region": "United Kingdom",
                        "5. marketOpen": "08:00",
                        "6. marketClose": "16:30",
                        "7. timezone": "UTC+01",
                        "8. currency": "GBX",
                        "9. matchScore": "0.7273"
                    },
                    {
                        "1. symbol": "TSCDF",
                        "2. name": "Tesco plc",
                        "3. type": "Equity",
                        "4. region": "United States",
                        "5. marketOpen": "09:30",
                        "6. marketClose": "16:00",
                        "7. timezone": "UTC-04",
                        "8. currency": "USD",
                        "9. matchScore": "0.7143"
                    },
                    {
                        "1. symbol": "TSCDY",
                        "2. name": "Tesco plc",
                        "3. type": "Equity",
                        "4. region": "United States",
                        "5. marketOpen": "09:30",
                        "6. marketClose": "16:00",
                        "7. timezone": "UTC-04",
                        "8. currency": "USD",
                        "9. matchScore": "0.7143"
                    },
                    {
                        "1. symbol": "TCO2.FRK",
                        "2. name": "TESCO PLC ADR/1 LS-05",
                        "3. type": "Equity",
                        "4. region": "Frankfurt",
                        "5. marketOpen": "08:00",
                        "6. marketClose": "20:00",
                        "7. timezone": "UTC+02",
                        "8. currency": "EUR",
                        "9. matchScore": "0.5455"
                    },
                    {
                        "1. symbol": "TCO0.FRK",
                        "2. name": "TESCO PLC LS-0633333",
                        "3. type": "Equity",
                        "4. region": "Frankfurt",
                        "5. marketOpen": "08:00",
                        "6. marketClose": "20:00",
                        "7. timezone": "UTC+02",
                        "8. currency": "EUR",
                        "9. matchScore": "0.5455"
                    }
                ]
            } as SearchResultData
        }
        throw new Error('Something went wrong with the API call')
    }


    return { getData: fetchAPI }
}

export default useClientAPICall;