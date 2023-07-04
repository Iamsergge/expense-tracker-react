function CurrencyConvert() {

    return (

        <div className="container">
            <div>
                <h4>Currency converter</h4>

            </div>


            <div className="showCurrency">
                R120
                <input type="number" 
                    placeholder="Enter amount"
                    className="textInput"/><br></br>

                <select className="selectCurrency">
                    <option>USD</option>
                </select>
                <select className="selectCurrency" id="selectedfromcurrenc">
                    <option>EUR</option>
                </select >{" "}
                <br></br>

                <button>converter</button>
            </div>

        </div>

    )



}
export default CurrencyConvert;