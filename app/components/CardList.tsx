import LoadingBlock from "./LoadingBlock"

type Props = {
    isLoading?: boolean
    data?: {key: string, value: any}[]
    itemClassName?: string
    containerClassName?: string
}

const CardList = (props: Props) => {
    if ( (!props.data && !props.isLoading) || (props.data && props.data.length === 0) ) {
        return 'No results!'
    }

    return (
        <ul 
            className={`grid w-full grid-cols-1 md:grid-cols-3 gap-2 ${props.containerClassName}`}>
            { 
                props.isLoading ?
                    Array.from(new Array(5)).map((v) => (
                        <LoadingBlock key={v} />
                    ))
                : props.data!.map( (item) => (
                    <li
                        className={`shadow-md my-2 p-5 rounded-md ${props.itemClassName}`}
                        key={item.key}>{item.value}
                    </li>
                )
            )}
        </ul>
    )  
}

export default CardList