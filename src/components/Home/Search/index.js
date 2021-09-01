import React from 'react'
import { useEffect } from 'react';
import './styleSearch.css'

export default function Search() {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "script/text.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);


    return (
        <div>
            <div className="search-box">
                <input type="text" placeholder="Search anything" className="search-input" />
                <a href="#" className="search-btn">
                    <i className="fas fa-search" />
                </a>
            </div>


        </div>
    )
}


