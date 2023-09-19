import React from "react";
import axios from "axios";
import './Navbar.css';

function Navbar({item0, item1, item2, item3}){
    return(
        
        <div className='navbar'>

            <div className='nome'>
                {item0}
            </div>

            <div className='navbar-content'>
            <div className='navbar-content-children'>
                {item1}
            </div>
            <div className='navbar-content-children'>
                {item2}
            </div>
            <div className='navbar-content-children'>
                {item3}
            </div>
        
            </div>
        </div>
        

    )
}

export default Navbar;