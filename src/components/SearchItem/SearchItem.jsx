import "./SearchItem.css"

const SearchItem = () =>{
    return(
        <div className="searchitem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/317509856.webp?k=ff6943ecedc84e948f60cb543d2b10b909059510252edd3c0f396a01f7513222&o=&s=1"
                 className="siImg">
            </img>
            <div className="siDes">
                <h1 className="siTitle">Tower Street Appartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiop">Free Airport Taxi</span>
                <span className="siSubtitle">
                    Studio Appartment in air Conditioning
                </span>
                <span className="siFeatures">
                    Entire Studio - 1 bathroom - 21m 1 full bed
                </span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later , so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellentt</span>
                    <button>8.9 </button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxop">includes taxs and fees</span>
                    <button className="siCheckButton">See Avalibility</button>
                </div>
            </div>
        </div>
    )
}
export default SearchItem;