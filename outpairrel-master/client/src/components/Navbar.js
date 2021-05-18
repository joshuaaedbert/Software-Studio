import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link className="brand-logo">Outpairrel</Link>
                    
                    <ul className="right">
                        <li><a>Shop</a></li>
                        <li><a>My cart</a></li>
                        <li><a><i className="material-icons">shopping_cart</i></a></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;