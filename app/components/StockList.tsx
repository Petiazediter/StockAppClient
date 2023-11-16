import { StockData } from "../hooks/useClientAPICall"
import StockItem from "./StockItem"
import CardList from "./CardList"

interface Props {
    stocks?: StockData[]
    isLoading: boolean
}

const StockList = ({ stocks, isLoading }: Props) => {
    if ( !stocks && !isLoading ) {
        return <h2>Search for a stock by name or symbol</h2>
    }

    if ( stocks && stocks.length === 0 ) {
        return <h2>No results!</h2>
    }

    return (
      
        <CardList 
            isLoading={isLoading}
            data={stocks?.map( (stock) => (
                {
                    key: stock['1. symbol'],
                    value: (<StockItem stock={stock} />)
                }
            ))}
            itemClassName="cursor-pointer"
        />
    )

}

export default StockList