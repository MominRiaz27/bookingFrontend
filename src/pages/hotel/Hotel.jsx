import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Maillist from "../../components/mailList/maillist.jsx"
import Footer from "../../components/footer/footer.jsx"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft, faCircleArrowRight,faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () =>{
    const photos = [
        {
            src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/228631926.jpg?k=54a67e6a97e82c7182f2a5aa07bb4a566104a7513ac50f84b1815a448e803739&o=&hp=1"
        },
        {
            src:"https://t-cf.bstatic.com/xdata/images/hotel/max500/229038267.jpg?k=698f67f18804c500b98455505af2f477712da48973e9f0e8038755a78ee103ab&o=&hp=1"
        },
        {
            src:"https://t-cf.bstatic.com/xdata/images/hotel/max500/228631909.jpg?k=b4660d7a501d68fdf3b6bb69086c6e375419570f2f2c9988f32d4a178c275004&o=&hp=1"
        },
        {
            src:"https://t-cf.bstatic.com/xdata/images/hotel/max300/228631905.jpg?k=ff36b1430ad564a6641de755c287916790048814576b4f9c67e506c09a225912&o=&hp=1"
        },
        {
            src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/228631912.jpg?k=fd94a0ecc1a4b54b51180cf4b6fb7f589b30fac3c32127f5b18fb4b620a156ac&o=&hp=1"
        },
        {
            src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/228631915.jpg?k=8f3633347741125ba4ec5d7f3e34cfb4123731f7f424c77c2d61221d94e40c85&o=&hp=1"
        }
    ];
    const [slidenumber,setslidenumber]=useState(0);
    const [open,setopen]=useState(false);
    
    const handelopen =(i)=>{
        setslidenumber(i);
        setopen(true);
    }
    const handlemove= (direction)=>{
        let newslidenumber;
        if(direction === "l"){
            newslidenumber = slidenumber === 0 ? 5 : slidenumber-1
        }
        else{
            newslidenumber = slidenumber === 5 ? 0 : slidenumber+1
        }
        setslidenumber(newslidenumber);
    }
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setopen(false)}/>
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handlemove("l")}/>
                <div className="slidewrapper">
                    <img className="sliderImg" src={photos[slidenumber].src} ></img>
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handlemove("r")} />
                </div>}
                <div className="hotelwrapper">
                    <button className="bookNow"> Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">Excellent Location - 500m from Center</span>
                    <span className="hotelPriceHighlight">
                        Book a stay at $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i)=>(
                            <div className="hotelImageWrapper">
                                <img onClick={()=>handelopen(i)} className="hotelImg" src={photo.src}></img>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hoteldetailstexts">
                            <h1 className="hotelTitle">Stay in the Heart of Karakow</h1>
                            <p className="hotelDesc">
                            Ideally set in the Gulberg district of Lahore, 
                            Avari Xpress Gulberg is located 29 km from Wagah Border, 
                            a 16-minute walk from Pace Shopping Mall and 2.1 km from Gaddafi Stadium. 
                            Among the facilities of this property are a restaurant, a 24-hour front 
                            desk and room service, along with free WiFi throughout the property. 
                            The hotel has family rooms.

                            All rooms at the hotel come with air conditioning, a seating area, 
                            a flat-screen TV with satellite channels, a safety deposit box and a
                            private bathroom with a bidet, bathrobes and slippers. Avari Xpress 
                            Gulberg has some accommodations with city views, and rooms have an 
                            electric tea pot. At the accommodation the rooms include bed linen and towels.
                            </p>
                        </div>
                        <div className="hoteldetailsprice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Karkow, this property
                                has an excellent location score of 9.8
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
             <Maillist/>
             <Footer/>
            </div>
        </div>
    )
}
export default Hotel;