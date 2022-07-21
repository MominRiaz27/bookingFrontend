import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) =>{
    const [data,setData] = useState([])
    const [loading,setloading] = useState([false])
    const [error,seterror] = useState([false])

    useEffect(()=>{
        const fetchdata = async ()=>{
            setloading(true)
            try {
                const res = await axios.get(url)
                setData(res.data);
            } catch (error) {
                seterror(error)
            }
            setloading(false)
            console.log("inside fetch", data)

        };
        fetchdata()

    },[url]);

    const reFetch = async ()=>{
        setloading(true)
        try {
            const res = await axios.get(url)
            setData(res.data);
        } catch (error) {
            seterror(error)
        }
        setloading(false)
    };
    return{data,loading,error,reFetch}

}
export default useFetch;