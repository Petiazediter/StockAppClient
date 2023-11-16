interface Props {
    data: {key: string, value: any}[]
    itemClassName?: string
    containerClassName?: string
}

const CardList = (props: Props) => {
    return (
    <ul 
        className={`grid grid-cols-1 md:grid-cols-3 gap-2 ${props.containerClassName}`}>
        { props.data.map( (item) => (
            <li
                className={`shadow-md my-2 p-5 rounded-md ${props.itemClassName}`}
                key={item.key}>{item.value}</li>
        ))}
    </ul>)  
}

export default CardList