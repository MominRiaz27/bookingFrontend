import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faPerson, faCar, faTaxi, } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

import { DateRange } from 'react-date-range';
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import {useNavigate} from "react-router-dom"


const Header = ({type}) => {
    const [destination, setdestination] = useState("");

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [option, setoption] = useState(
        {
            adult: 1,
            childern: 0,
            room : 1,
        }
    );
    
    const handleOption =(name , operation)=>{
        setoption(prev=>{
            return{
                ...prev, [name]: operation==='i' ? option[name]+1: option[name]-1,
            };
        });
    }
    const navigate = useNavigate();
    const handlesearch =() =>{
        navigate("/hotels" , {state: {destination, date, option}})
    }

    return (
        <div className="header">
            <div className = {type==="list"? "headercontainer listmode" : "headercontainer"}>
                <div className="headerlist">
                    <div className="headerlistitem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerlistitem ">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                { type !=='list' 
                &&<> <h1 className="headerTitle">A life of discounts? It's Genius.</h1>
                <p className="headerDesc">
                    Get rewarded for your travels - unlock instant savings of 10% or more
                    with a free lamabooking account
                </p>
                <button className="headerbtn">Sign in / Register</button>
                <div className="headersearch">
                    <div className="headersearchitem">
                        <FontAwesomeIcon icon={faBed} className="headericon" />
                        <input type="text" placeholder="where are you going?"
                            className="headersearchinput"
                            onChange={e=>setdestination(e.target.value)}
                            />
                    </div>
                    <div onClick={() => setOpenDate(!openDate)} className="headersearchitem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headericon" />
                        <span className="headersearchtext">
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to
                              ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>

                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                            className="date"
                        />}
                    </div>
                    <div className="headersearchitem">
                        <FontAwesomeIcon icon={faPerson} className="headericon" />
                        <span onClick={()=>setOpenOptions(!openOptions)} className="headersearchtext">{`${option.adult} adult - ${option.childern} childern - ${option.room} room`}</span>
                        
                        { openOptions && <div className="option">
                            <div className="optionItem">
                                <span className="optionText" >Adult </span>
                                <div className="optionCounter">
                                <button  className= "optionCounterbutton" onClick={()=>{handleOption("adult","i")}}>+</button>
                                <span className="optionCounternumber">{option.adult}</span>
                                <button disabled={option.adult<=1} className="optionCounterbutton"  onClick={()=>{handleOption("adult","d")}}>-</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText" >Childern </span>
                            <div className="optionCounter">
                                <button className= "optionCounterbutton" onClick={()=>{handleOption("childern","i")}}>+</button>
                                <span className="optionCounternumber">{option.childern}</span>
                                <button disabled={option.childern==0} className="optionCounterbutton"  onClick={()=>{handleOption("childern","d")}}>-</button>
                            </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText" >Room </span>
                            <div className="optionCounter">
                                <button className= "optionCounterbutton" onClick={()=>{handleOption("room","i")}}>+</button>
                                <span className="optionCounternumber">{option.room}</span>
                                <button disabled={option.room<=1} className="optionCounterbutton"  onClick={()=>{handleOption("room","d")}}>-</button>
                            </div>
                            </div>
                        </div>
                        }

                    </div>
                    <div className="headersearchitem">
                        <button onClick={handlesearch} className="headerbtn">Search</button>
                    </div>

                </div> </>}
            </div>

        </div>
    );
};
export default Header;