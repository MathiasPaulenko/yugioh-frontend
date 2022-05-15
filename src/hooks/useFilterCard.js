import { useState, useEffect, useRef } from 'react';

export const useFilterCard = (url, filters) => {
    
    let queries = "?";
    
    for (const filter in filters) {
        queries += `${filter}=${filters[filter]}&`;
    } 
   
    url += queries;

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            }).catch((error) => {
                setState({
                    loading: false,
                    error: error,
                    data: null
                });

            });

    }, [url]);



    return state;
}