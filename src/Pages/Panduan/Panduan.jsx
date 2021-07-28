import React, {Fragment} from 'react'
import AboutComponent from '../../Components/AboutComponent/AboutComponent'
import Footer from '../../Components/Footer/Footer'
import {ContentWrapper, DownloadButton, PDFBox} from './Panduan.style'

function Panduan() {
    return (
        <Fragment>
            <section className ="bg-blur pt-5">
                 <AboutComponent
                    defaultHash = "GUIDE BOOK"
                    defaultTitle = "GUIDE BOOK MPKMB"
                    default = {
                        <ContentWrapper >
                            <PDFBox src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" allow="autoplay"/>
                            <div className="d-flex justify-content-center align-items-center">
                                <DownloadButton className="download-button px-3 py-1">Download PDF</DownloadButton>
                            </div> 
                        </ContentWrapper>
                    }
                    
                    content1Hash = "GUIDE BOOK"
                    content1Title = "GUIDE BOOK MPKMB"
                    content1 = 
                    {
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <PDFBox src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" allow="autoplay"/>
                            <div className="d-flex justify-content-center align-items-center">
                                <DownloadButton className="download-button px-3 py-1">Download PDF</DownloadButton>
                            </div> 
                        </div>
                    }

                    content2Hash = "PENUGASAN"
                    content2Title = "PANDUAN PENUGASAN MPKMB"
                    content2 = 
                    {   <div className="d-flex flex-column justify-content-center align-items-center">
                            <PDFBox src="https://drive.google.com/file/d/1-RZBgCa5csmfwGGEMSuMje2JkFSXV9c0/preview" allow="autoplay"/>
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
                            <PDFBox src="https://drive.google.com/file/d/1wW4NGT8-ZS2LhZhZlMHddA26oCU5OoIy/preview" width="640" height="480" allow="autoplay"/>
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
