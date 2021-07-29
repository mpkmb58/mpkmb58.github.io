import React from 'react'
import Magazine from '../../../Components/Magazine/Magazine'
import { AboutStyle } from '../../About/About.style'
import { Iframe } from './Panduan.style'
import panduanPDF from '../../../Assets/documents/GuideBook.pdf'
import penugasanPDF from '../../Assets/documents/'
function Panduan() {
    const contentView = [
        {
            key: 0,
            link: 'GUIDE BOOK',
            isi: 
            <div>
                <h2 className="fw-bold text-center mb-4">GUIDE BOOK MPKMB</h2>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <Iframe src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" allow="autoplay"></Iframe>
                    <a href={panduanPDF} className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey" download="Guide Book MPKMB 58.pdf">Download PDF</a>
                </div>
            </div>,
            linkStatus: true
        },
        {
            key: 1,
            link: 'PANDUAN PENUGASAN',
            isi: 
            <div>
                <h2 className="fw-bold text-center mb-4">PANDUAN PENUGASAN</h2>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <Iframe src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" allow="autoplay"></Iframe>
                    <a href={panduanPDF} className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey" download="Guide Book MPKMB 58.pdf">Download PDF</a>
                </div>
            </div>,
            linkStatus: false

        },
        {
            key: 2,
            link: 'PENGGUNAAN COURSE',
            isi: <div>
                <h2 className="fw-bold text-center mb-4">PANDUAN PENGGUNAAN COURSE</h2>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <Iframe src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" allow="autoplay"></Iframe>
                    <a href={panduanPDF} className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey" download="Guide Book MPKMB 58.pdf">Download PDF</a>
                </div>
            </div>,
            linkStatus: false
        },
        {
            key: 3,
            link: 'PEMBAGIAN KELOMPOK',
            isi: <div>
                <h2 className="fw-bold text-center mb-4">INFORMASI PEMBAGIAN KELOMPOK</h2>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <Iframe src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" allow="autoplay"></Iframe>
                    <a href={panduanPDF} className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey" download="Guide Book MPKMB 58.pdf">Download PDF</a>
                </div>
            </div>,
            linkStatus: false
        }
    ]

    
    return (
        <AboutStyle>
            <Magazine contentWrapper={contentView} />
        </AboutStyle>
    )
}

export default Panduan
