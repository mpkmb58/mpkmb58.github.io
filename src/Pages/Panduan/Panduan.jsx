import React, {Fragment} from 'react'
import AboutComponent from '../../Components/AboutComponent/AboutComponent'
import Footer from '../../Components/Footer/Footer'
import {ContentWrapper, DownloadButton, PDFBox} from './Panduan.style'

function Panduan() {
    return (
        <Fragment>
            <section className ="bg-blur pt-5">
                 <AboutComponent
                    defaultHash = "KETENTUAN"
                    defaultTitle = "KETENTUAN MPKMB"
                    default = {
                        <ContentWrapper >
                            <PDFBox allow="fullscreen" src="https://docs.google.com/document/d/1T_coyGU4ow_m0p4Qrlm0-EUdVuau46F32YgFE2IHKKo/edit"/>
                            <div className="d-flex justify-content-center align-items-center">
                                <DownloadButton className="download-button px-3 py-1">Download PDF</DownloadButton>
                            </div> 
                        </ContentWrapper>
                    }
                    
                    content1Hash = "KETENTUAN"
                    content1Title = "KETENTUAN MPKMB"
                    content1 = 
                    {
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <PDFBox/>
                            <div className="d-flex justify-content-center align-items-center">
                                <DownloadButton className="download-button px-3 py-1">Download PDF</DownloadButton>
                            </div> 
                        </div>
                    }

                    content2Hash = "PENUGASAN"
                    content2Title = "PANDUAN PENUGASAN MPKMB"
                    content2 = 
                    {   <div className="d-flex flex-column justify-content-center align-items-center">
                            <PDFBox/>
                            <div className="d-flex justify-content-center align-items-center">
                                <DownloadButton className="download-button px-3 py-1">Download PDF</DownloadButton>
                            </div> 
                        </div>
                    }

                    content3Hash = "COURSE"
                    content3Title = "PANDUAN PENGGUNAAN COURSE"
                    content3 = 
                    {
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <PDFBox/>
                       <div className="d-flex justify-content-center align-items-center">
                            <DownloadButton className="download-button mx-2 px-3 py-1">Course IPB</DownloadButton>
                            <DownloadButton className="download-button mx-2 px-3 py-1">Download PDF</DownloadButton>
                        </div> 
                        </div>
                    }

                    content4Hash = "TWIBBON"
                    content4Title = "TWIBBON"
                    content4 = 
                    {
                       <div className="d-flex flex-column justify-content-center align-items-center">
                            <PDFBox/>
                            <div className="d-flex justify-content-center align-items-center">
                                <DownloadButton className="download-button px-3 py-1">Download</DownloadButton>
                            </div> 
                        </div>
                    }
                 />
            </section>
            <Footer/>
        </Fragment>
    )
}

export default Panduan
