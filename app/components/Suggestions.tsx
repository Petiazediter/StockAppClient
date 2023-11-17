import Link from "next/link"
import { SearchResultData } from "../hooks/useClientAPICall"

interface Props {
    isLoading: boolean
    data: SearchResultData
}

const Suggestions = (props: Props) => {

    const renderContent = () => {
      if ( props.isLoading && props.data.bestMatches.length === 0 ) {
            return Array.from(new Array(5)).map( v => (
                <li key={`loading-content-${v}`} 
                className='my-1 text-gray-300'>
                    <h2 className="bg-gray-300 animate-pulse w-min">Loading...</h2>
                    <p className='bg-gray-300 animate-pulse w-2/3'>Loading...</p>
                </li>
            ))
        }
        else {
            return props.data.bestMatches.slice(0,5).map( match => (
                <li key={`stock-quick-search-${match["1. symbol"]}`} className='my-1 text-blue-500'>
                    <Link href={`/stock/${match["1. symbol"]}`}>
                        <h2 className="relative">{match["2. name"]}</h2>
                        <p className='relative'>{match["1. symbol"]}</p>
                    </Link>
                </li>
            ))
        }
    }

    return <div className='absolute w-3/5 top-full left-0 shadow-md bg-white mt-2 rounded-md p-2'>
        <h1 className='font-bold'>Quick search:</h1>
        <ul className='divide-y-2'>
            {renderContent()}
        </ul>
    </div>
}

export default Suggestions