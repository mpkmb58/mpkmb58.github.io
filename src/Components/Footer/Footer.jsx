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
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 px-lg-5">
                        <div className="text">
                            <h3>Sekretariat MPKMB IPB</h3>
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
                        <br/>
                    </div>
                    <div className="col-md-6 px-lg-5">
                        <div className="text">
                            <h3>Pusat Informasi:</h3>
                            <br/>
                            <p>Narahubung MPKMB: <a href="http://">+62813-8201-8481</a></p>
                            <p>Official Account MPKMB:</p>
                            <div className="social-media d-flex">
                                <div className="socmed-col-1 d-flex flex-column">
                                    <a className="p-2 d-flex align-items-center text-grey">
                                        <div className="boxed me-3">
                                            <img src={logoline} alt="" srcset="" />
                                        </div>Line
                                    </a>
                                    <a className="p-2 d-flex align-items-center text-grey">
                                        <div className="boxed me-3">
                                            <img src={logoyoutube} alt="" srcset="" />
                                        </div> Youtube
                                    </a>
                                    <a className="p-2 d-flex align-items-center text-grey">
                                        <div className="boxed me-3">
                                            <img src={logotwitter} alt="" srcset="" />
                                        </div> Twitter
                                    </a>
                                </div>
                                <div className="socmed-col-2 d-flex flex-column">
                                    <a className="p-2 d-flex align-items-center text-grey">
                                        <div className="boxed me-3">
                                            <img src={logoinstagram} alt="" srcset="" />
                                        </div> Instagram
                                    </a>
                                    <a className="p-2 d-flex align-items-center text-grey">
                                        <div className="boxed me-3">
                                            <img src={logotiktok} alt="" srcset="" />
                                        </div> TikTok
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <h6 class="text-center"><i class="fa fa-copyright" aria-hidden="true"></i> 2021. Divisi IT MPKMB IPB</h6>
            </div>
        </div>
    )
}

export default Footer
