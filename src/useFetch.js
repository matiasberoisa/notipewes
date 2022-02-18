import { useState, useEffect } from "react";
import { RouterContext } from "react-router";

const useFetch = (url) => {
const [data, setData] = useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout (() => {
            fetch(url, { signal : abortCont.signal})
        .then(res => {
            if (!res.ok) {
                throw Error('no se ha ha podido recuperar la pagina para su busqueda');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err =>{
        if (err.name === 'abortError') {
            console.log('fetchAborted');
        } else {
            setIsPending(false);
            setError(err.message);
        } 
    })
}, 1000);
return () => abortCont.abort();
}, [url]);
return { data, isPending, error };
}


export default useFetch;