import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';


const useRequest = (url) => {
  const [data, setData] = useState({});
  const [loading, setloading] = useState(true);

    useEffect(() => {
    axios.get(url).then((result) => {
        setloading(false);
        setData(result.data);
        }).catch((err) => {
            toast.error('Error loading Data, Check Spelling and Try again');
        });
    }, [url]);

     return{loading,data};
};
export default useRequest;
