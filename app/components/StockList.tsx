import Link from "next/link"
import { StockData } from "../hooks/useClientAPICall"
import LoadingBlock from "./LoadingBlock"
import StockItem from "./StockItem"
import CardList from "./CardList"

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
    
    /*<ul className=' grid grid-cols-1 md:grid-cols-3 gap-2'>
            { stocks.map( (stock, i) => {
                    return (
                        <Link href={`/stock/${stock['1. symbol']}`} key={`stock-list-item-${stock['1. symbol']}`}>
                            <StockItem stock={stock} />
                        </Link>
                    )
                })
            }
        </ul> */

    return (
      
        <CardList 
            data={stocks.map( (stock) => (
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