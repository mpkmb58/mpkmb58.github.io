import React, { Fragment, useState } from 'react'
import Logo from '../../Assets/img/logo_mahardika_cakrabinaya 1.svg'
import './NavbarComponent.css'

function NavbarComponents() {

    const [active, setActive] = useState(false);

    return (
        <Fragment>
            <nav className="navbar fixed-top ">
                <div className="container-lg d-flex justify-content-between align-items-center">
                    <a className="navbar-brand text-red" href="/">
                        <img width=" 100%" src={Logo} alt="" />
                    </a>
                    <div><h2 className="brand-title m-0">MPKMB IPB 58</h2></div>
                    <div onClick={() => setActive(!active)} className={active ? 'menu open px-2 py-3' : 'menu px-2 py-3'}>
                        <div className="box-hamburger"></div>
                    </div>
                </div>
            </nav>
            <div className={active ? 'nav-collaps show position-fixed bg-grey d-flex align-items-center ' : 'nav-collaps  position-fixed bg-grey d-flex align-items-center '}>
                <div className="container-lg d-flex justify-content-center flex-column align-items-center">

                    <div className="row mb-2 ">
                        <div className="col-12">
                            <h2 className="fw-bold hero-banner text-blue" style={{ fontFamily: 'Cinzel Decorative' }}>Menu</h2>
                        </div>
                    </div>
                    <div className="row text-center">
                        <a href="/" className="col-12 my-3 d-block text-decoration-none hover text-blue">
                            Home
                        </a>
                        <a href="/About" className="col-12 my-3 d-block text-decoration-none hover text-blue">
                            About
                        </a>
                        <a href="/Product" className="col-12 my-3 d-block text-decoration-none hover text-blue">
                            Product
                        </a>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}



export default NavbarComponents
