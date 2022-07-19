import React from "react";
import "./featured.css"

const featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img className="featuredImg" src="https://t-cf.bstatic.com/xdata/images/city/540x270/688248.webp?k=c121c615e7f6657d379d5537411b79d4444037649e74990e8d6f5b815eb54772&o=">    
                </img>
                <div className="featuredTitle">
                    <h1>Lahore</h1>
                    <h3>123 properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://t-cf.bstatic.com/xdata/images/city/540x270/640439.webp?k=2278a7b0a4b067a8ff5f442b9f24a092ccfb29cfcb5cb216cdc293c7752441f8&o=">    
                </img>
                <div className="featuredTitle">
                    <h1>Karachi</h1>
                    <h3>123 properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://t-cf.bstatic.com/xdata/images/city/540x270/633456.webp?k=8aed245c357a6a806aa975de9de54daccfda9dd957e89f16dbada97daa571ada&o=">    
                </img>
                <div className="featuredTitle">
                    <h1>Rawalpindi</h1>
                    <h3>123 properties</h3>
                </div>
            </div>
        </div>
    )
}
export default featured;