import Link from "next/link"
import { StockData } from "../hooks/useClientAPICall"

interface Props {
    stock: StockData
}

const StockItem = ({stock}: Props) => {
    return <Link href={`/stock/${stock['1. symbol']}`} key={`stock-list-item-${stock['1. symbol']}`}>
        <h2 className='font-bold text-lg'>{stock['2. name']}</h2>
        <p className='text-sm'>{stock['1. symbol']}</p>
    </Link>
}

export default StockItem