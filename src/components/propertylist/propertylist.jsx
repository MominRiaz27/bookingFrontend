import React from "react";
import "./propertylist.css"

const propertylist =() =>{
    const {data,loading,error} = useFetch(
        "/hotels/countByType")

    return(
        <div className="plist">
            {loading?"loading items":
             (<><div className="plistItem">
                <img className="plistImg" src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="/>
                <div className="plistTitles">
                    <h1>Hotels</h1>
                    <h2>{data[0]}</h2>
                </div>
            </div>
            <div className="plistItem">
                <img className="plistImg" src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="/>
                <div className="plistTitles">
                    <h1>Appartments</h1>
                    <h2>{data[1]}</h2>
                </div>
            </div>
            <div className="plistItem">
                <img className="plistImg" src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="/>
                <div className="plistTitles">
                    <h1>Villas</h1>
                    <h2>{data[4]}</h2>
                </div>
            </div>
            <div className="plistItem">
                <img className="plistImg" src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="/>
                <div className="plistTitles">
                    <h1>Cabins</h1>
                    <h2>{data[3]}</h2>
                </div>
            </div>
            <div className="plistItem">
                <img className="plistImg" src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o="/>
                <div className="plistTitles">
                    <h1>Resort</h1>
                    <h2>{data[2]}</h2>
                </div>
            </div></>)}
            
        </div>
    )
}
export default propertylist;