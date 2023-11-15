import { StockData } from "../hooks/useClientAPICall"
import StockItem from "./StockItem"

interface Props {
    stocks: StockData[]
}

const StockList = (props: Props) => {

    return (
        <div className='flex flex-col gap-2'>
            {props.stocks.map( (stock, i) => {
                return (
                    <StockItem stock={stock} key={`stock-list-item-${stock['1. symbol']}`} />
                )
            })}
        </div>
    )

}

export default StockList