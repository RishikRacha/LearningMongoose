import React from 'react'
import { useSelector } from 'react-redux'  

function Details() {
    const data = useSelector((store) => {return store.name})


    return (
        <div className='detailsContainer'>
            <h1>Details Component</h1>
            <h2>Name: <span>{data}</span></h2>
        </div>
    )
}

export default Details