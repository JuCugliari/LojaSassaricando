/* eslint-disable */

import { useState, useEffect } from 'react';

function getJson(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then(res => res.json())
        .then(value => setData(value))
        .catch(error => setError(error))
        .finally(() => setLoading(false))        
    }, [url]);

    return [data,loading];
}

export default getJson;
