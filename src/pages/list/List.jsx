import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import './List.css'
import { useState } from 'react'
import { format, setDate } from 'date-fns'
import { useLocation } from "react-router-dom";
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem.jsx'



const List = () => {
    const location=useLocation();
    console.log(location);

    const [destination, setdestination] = useState(location.state.destination);
    const [date, setdate] = useState(location.state.date);
    const [opendate, setopendate] = useState("false");
    const [option, setOptions] = useState(location.state.option);
    

    return(
        <div>
            <Navbar/>
            <Header type="list" />
            <div className="listcontainer">
                <div className="listwrapper">
                    <div className="listsearch">
                        <h1 className="lstitle">Search</h1>
                        <div className = "lsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text"></input>
                        </div>
                        <div className = "lsItem">
                            <label>Check-in-Date</label>
                            <span onClick={()=>setopendate(!opendate)}>
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to
                              ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                              {opendate && (<DateRange 
                              onChange={(item)=>setDate([item.selection])}
                              minDate={new Date()}
                              ranges={date}/>
                             )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsoptions">
                                
                                <div className="lsoptionitems">
                                    <span className="optiontext">Min price 
                                    <small> per night</small></span>
                                    <input className="lsoptioninput" type="number"></input>
                                </div>
                                <div className="lsoptionitems">
                                    <span className="optiontext">Max price 
                                    <small> per night</small></span>
                                    <input className="lsoptioninput" type="number"></input>
                                </div>
                                <div className="lsoptionitems">
                                    <span className="optiontext">Adults 
                                    </span>
                                    <input placeholder={option.adult} min={1} className="lsoptioninput" type="number"></input>
                                </div>
                                <div className="lsoptionitems">
                                    <span className="optiontext">Childern 
                                    </span>
                                    <input placeholder={option.childern} min={0} className="lsoptioninput" type="number"></input>
                                </div>
                                <div className="lsoptionitems">
                                    <span className="optiontext">Room 
                                    </span>
                                    <input placeholder={option.room } min={1} className="lsoptioninput" type="number"></input>
                                </div>
                            </div>
                        </div>

                        <button>Search</button>
                    </div>
                    <div className="listresult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default List;