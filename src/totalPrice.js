import React from "react";


const TotalItems=(props)=>{
    return(
        <div className="total-container">
            <span>Total Price is : $ {props.total}</span>
        </div>
    )
}

export default TotalItems;