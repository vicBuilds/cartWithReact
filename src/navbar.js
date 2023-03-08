import React from "react";

const Navbar= (props)=>{
    
    return(
        <div className="navBar">
            <span style={{color:'white', fontSize:40}}>Cart</span>
            <img src='https://cdn-icons-png.flaticon.com/512/833/833314.png'className="cart-icon"/>
            <span className="item-count">{props.count}</span>

        </div>
    )
}

export default Navbar;