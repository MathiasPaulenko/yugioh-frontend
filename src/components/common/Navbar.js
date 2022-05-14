import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
 
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                YuGiOh! Collection
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/collections"
                    >
                        Collection
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='text-white'>Mathias Paulenko Echeverz</span>
                  
                </ul>
            </div>
        </nav>
    )
}