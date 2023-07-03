function DisplayTransaction(props){
    console.log(props);
    return (
        <div>
            <h4>History of your transaction</h4>
{props.transactions.map((data)=> (
    <div className="list-Item">
        <div>
        <h6>{data.transactionItem}</h6>
        </div>
        <div>
        <h6>{data.Amount}</h6>
        </div>
        <div>
            {data.transactionType == "Expense" ? <div className="expenseIndicator"></div>:<div className="incomeIndicator"></div>} 
        <h6>{data.transactionType}</h6>
        </div>
    </div>
))}

        </div>
        
    )
}export default DisplayTransaction