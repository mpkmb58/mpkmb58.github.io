import React, { Fragment, useState } from 'react'

import Logo from '../../Assets/img/logo_mahardika_cakrabinaya 1.svg'
import './NavbarComponent.css'

function NavbarComponents() {

    const [active, setActive] = useState(false);

    return (
        <Fragment>
            <nav className="navbar fixed-top py-sm-4 py-2">
                <div className="container-fluid d-flex justify-content-between align-items-center px-sm-5 px-2">
                    <div class="nav-brand d-flex align-items-center">
                        <a className="navbar-brand text-red pb-3" href="/">
                            <img width=" 100%" src={Logo} alt="" />
                        </a>
                        <div><h4 className="brand-title m-0 fw-bold">MPKMB IPB 58</h4></div>
                    </div>
                    <div onClick={() => setActive(!active)} className={`menu px-2 py-3 ${active ? `open` : ``}`}>
                        <div className="hamburger"></div>
                    </div>
                </div>
            </nav>
            <div className={`nav-collaps position-fixed bg-grey d-flex align-items-center ${active ? `show` : ``}`}>
                <div className="container-lg d-flex justify-content-center flex-column align-items-center">

                    <div className="row mb-2 ">
                        <div className="col-12">
                            <h2 className="fw-bold hero-banner text-blue" style={{ fontFamily: 'Cinzel Decorative' }}>Menu</h2>
                        </div>
                    </div>
                    <div className="row text-center">
                        <a href="/" className="col-12 hero-banner-link my-3 d-block text-decoration-none hover text-blue">
                            Home
                        </a>
                        <a href="/About" className="col-12 hero-banner-link my-3 d-block text-decoration-none hover text-blue">
                            About
                        </a>
                        <a href="/Event" className="col-12 hero-banner-link my-3 d-block text-decoration-none hover text-blue">
                            Event
                        </a>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}



export default NavbarComponents
