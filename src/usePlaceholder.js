import { useState, useEffect } from 'react';
import logo from './logo.svg';

const usePlaceholder = (src) => {
    const [url, setUrl] = useState(logo);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setUrl(src);
        console.log("I am useEffect")
    }, [setUrl, src]);

    // by default useEffect renders more than once, by passing 
    // [setUrl, src] it will only re-render when these things change

    return url;
}

export default usePlaceholder;