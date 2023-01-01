import React from 'react'
import loading from './loading.gif'
const Spinner=()=>{
    return(
        <div className="text-center bg-transparent">
            <img src={loading} alt="..."></img>
            <p style={{color: "black", fontWeight: "600", fontSize: "22px", fontFamily: "'Chewy' , cursive", cursor: "context-menu"}}>Loading....</p>
        </div>
    )
}

export default Spinner