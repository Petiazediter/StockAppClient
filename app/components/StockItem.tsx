import { StockData } from "../hooks/useClientAPICall"

interface Props {
    stock: StockData
}

const StockItem = ({stock}: Props) => {
    return <li className='shadow-md my-2 p-5 rounded-md cursor-pointer'>
        <h2 className='font-bold text-lg'>{stock['2. name']}</h2>
        <p className='text-sm'>{stock['1. symbol']}</p>
    </li>
}

export default StockItem