import { useEffect,useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
   
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const abortcont = new AbortController()
        fetch(url,{signal:abortcont.signal})
            .then(res => {
                if (!res.ok) { // Check if the response status is not successful
                    throw Error("Could not fetch data from the resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                if(err.name ==='AbortError'){

                }else{
                    setError(err.message);
                    setLoading(false); 
                }
              
            });
            return abortcont.abort();
    }, [url]);
    return{data,loading,error}
}
 
export default useFetch;