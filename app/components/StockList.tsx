import { StockData } from "../hooks/useClientAPICall"
import LoadingBlock from "./LoadingBlock"
import StockItem from "./StockItem"

interface Props {
    stocks?: StockData[]
    isLoading: boolean
    loadingBlocks?: number
}

const StockList = ({ stocks, isLoading, loadingBlocks = 5 }: Props) => {

    if ( isLoading ) {
        return Array.from(new Array(5)).map((v) => (<LoadingBlock key={v} />))
    }

    if ( !stocks ) {
        return <h2>Search for a stock by name or symbol</h2>
    }

    if ( stocks && stocks.length === 0 ) {
        return <h2>No results!</h2>
    }

    return (
        <div className='flex flex-col gap-2'>
            { stocks && 
                stocks.map( (stock, i) => {
                    return (
                        <StockItem stock={stock} key={`stock-list-item-${stock['1. symbol']}`} />
                    )
                })
            }
        </div>
    )

}

export default StockList