import React from 'react'
import logoinstagram from '../../Assets/img/logo-instagram copy.svg'
import logoline from '../../Assets/img/logo-line copy.svg'
import logoyoutube from '../../Assets/img/logo-youtube copy.svg'
import logotiktok from '../../Assets/img/logo-tiktok copy.svg'
import logotwitter from '../../Assets/img/logo-twitter copy.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer bg-blue text-grey">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 px-lg-5">
                        <div className="text">
                            <h3 className="fw-bold">Sekretariat MPKMB IPB</h3>
                            <br></br>
                            <p>Panitia Pusat MPKMB IPB<br></br>
                                Direktorat Kemahasiswaan dan Pengembangan Karir<br></br>
                                Institut Pertanian Bogor
                            </p>
                            <a target="_blank" href="https://goo.gl/maps/E6wDLDQx7UTtNYws5">
                                <p className="text-grey">Jalan Lingkar Kampus IPB Darmaga, Babakan, Dramaga, Babakan, Kec. Dramaga, Bogor, Jawa
                                    Barat 16680</p>
                            </a>
                            <p>Jam kerja pukul 08.00 - 16.00 WIB<br></br>
                                <a href="mailto:mpkmbipb@apps.ipb.ac.id">
                                    <p className="text-grey">mpkmbipb@apps.ipb.ac.id</p>
                                </a>
                            </p>
                        </div>
                        <br />
                    </div>
                    <div className="col-md-6 px-lg-5">
                        <div className="text">
                            <h3 className="mt-md-0 mt-2 fw-bold">Pusat Informasi:</h3>
                            <br />
                            <p>Narahubung MPKMB: <a href="http://">+62813-8201-8481</a></p>
                            <p>Official Account MPKMB:</p>
                            <div className="social-media">
                                <div className="socmed-col-1 d-flex flex-column">
                                    <a href="https://page.line.me/731qklyo?openQrModal=true" target="_blank" className="p-2 d-flex align-items-center text-grey">
                                        <div className="boxed me-3">
                                            <img loading="lazy" src={logoline} alt="Logo sosmed" />
                                        </div>Line
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCdHt1R2mPVPZkP_Zr0eKGFw" target="_blank" className="p-2 d-flex align-items-center text-grey">
                                        <div className="boxed me-3">
                                            <img loading="lazy" src={logoyoutube} alt="Logo sosmed" />
                                        </div> Youtube
                                    </a>
                                    <a href="https://twitter.com/mpkmb_ipb" target="_blank" className="p-2 d-flex align-items-center text-grey">
                                        <div className="boxed me-3">
                                            <img loading="lazy" src={logotwitter} alt="Logo sosmed" />
                                        </div> Twitter
                                    </a>
                                </div>
                                <div className="socmed-col-2 d-flex flex-column">
                                    <a href="https://www.instagram.com/mpkmbipb/" target="_blank" className="p-2 d-flex align-items-center text-grey">
                                        <div className="boxed me-3">
                                            <img loading="lazy" src={logoinstagram} alt="Logo sosmed" />
                                        </div> Instagram
                                    </a>
                                    <a href="https://www.tiktok.com/@mpkmbipb?_d=secCgYIASAHKAESMgowfGCHhsOIHkNzGDEUdLAQfetAQnD8AVXU1zx1s0R91n8ho2y6LnfX6isqqhEv0kOnGgA%3D&_r=1&checksum=b5cdd4c55d7278c9236947ed8730d871d7bbf09f3507736238fe17710b747723&language=en&sec_uid=MS4wLjABAAAAGU7XXkDW76tKvjKiH3wZ1r_ky2O9zZZ8dinT84aIsZ51sRtqOHIfm1BbpK6D2AEs&sec_user_id=MS4wLjABAAAALPzXoVaBBAxzqVz_8KSf_dPQhk1uUoThv6My1XHDvkMb_gVBXkMFJ6ROQxZLaFYN&share_app_id=1180&share_author_id=6965485347060909057&share_link_id=EBD899B2-50CD-4B13-993E-D5BE1C117095&source=h5_t&tt_from=copy&u_code=d7hl03dm1mfihh&user_id=6722943081283503106&utm_campaign=client_share&utm_medium=ios&utm_source=copy" target="_blank" className="p-2 d-flex align-items-center text-grey">
                                        <div className="boxed me-3">
                                            <img loading="lazy" src={logotiktok} alt="Logo sosmed" />
                                        </div> TikTok
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright pt-1">
                <h6 class="text-center"><i class="fa fa-copyright" aria-hidden="true"></i> 2021. Divisi IT MPKMB IPB</h6>
            </div>
        </div>
    )
}

export default Footer
