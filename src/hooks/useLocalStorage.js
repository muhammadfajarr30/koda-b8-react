import React, { useState, useEffect } from "react";

export default function useLocalStorage(key) {
    const [data, setData] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(data))  
    },[key, data])
    return [data, setData]
}