import { useEffect, useState } from "react";
import { makeRequest } from "../../makeRequest";

const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
          const res = await makeRequest.get(url);
          setData(res.data.data)
      };
      fetchData();
    },[url]);

    return {data}
};

export default useFetch