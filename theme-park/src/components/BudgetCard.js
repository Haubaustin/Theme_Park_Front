const BudgetCard = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}

export default BudgetCard