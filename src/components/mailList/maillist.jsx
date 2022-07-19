import "./maillist.css"

const mailList = () =>{
    return(
        <div className="mail" >
            <h1 className="mailTitle">Save Time , Save money</h1>
            <span className="mailDesc">Sign up and we'll send best deals to you </span>
            <div className="mailinputcontainer">
                <input type="text" placeholder="Your Email"></input>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default mailList;