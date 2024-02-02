import { useState } from "react";

const useFetch = async (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        try{
          const res = await axios.get('http://localhost:1338/api/products?filters[IsNew][$eq]=true&populate=*',);
          
          setData(res.data.data)
          console.log(res)
        }catch(err){
          console.log(err)
        }
      };
      fetchData();
    },[]);
}