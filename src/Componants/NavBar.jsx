import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:"90px"}}>
                <div className="container-fluid">
                    
                    <a className="navbar-brand" href="/"> <h2 className='fw-bold mx-3'>VILLA</h2> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-5">
                                <a className="nav-link active fw-bold" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-5" >
                                <a className="nav-link fw-bold" href="/properties" > Properties  </a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link fw-bold" href="/properties-deatils"> Properties  Details</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link fw-bold" href="/contacts"> Contact Details  </a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className=" me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Scheduled To Visit</button>
                        </form>
                    </div>

                    </div>
                
            </nav>
        </>
    )
}

export default NavBar