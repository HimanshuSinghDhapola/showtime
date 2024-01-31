import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = ( url ) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const {data: response} = await axios.get(url);
                setData(response);
            }catch(err){
                console.log(err);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return {
        data,
        loading,
    };
}

export default useFetchData;