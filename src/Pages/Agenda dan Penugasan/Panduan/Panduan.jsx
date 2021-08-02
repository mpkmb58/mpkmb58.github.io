import React from 'react'
import Magazine from '../../../Components/Magazine/Magazine'
import { Iframe } from './Panduan.style'
import panduanPDF from '../../../Assets/documents/GuideBook.pdf'
import penugasanPDF from '../../../Assets/documents/Panduan Penugasan MPKMB IPB 58.pdf'
import pendaftaranPDF from '../../../Assets/documents/Panduan Pendaftaran Ashura-Ashira Anausa MPKMB IPB 58.pdf'
import kelompokPDF from '../../../Assets/documents/Enrollment Key Mahardika Cakrabinaya.pdf'
import penggunaanCoursePDF from '../../../Assets/documents/Panduan Penggunaan Course.pdf'

function Panduan() {
    const contentView = [
        {
            key: 0,
            link: 'GUIDE BOOK',
            isi: 
            <div>
                <h2 className="fw-bold text-center mb-4 px-1">GUIDE BOOK MPKMB</h2>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <Iframe src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" allow="autoplay"></Iframe>
                    <a href={panduanPDF} className="mt-4 bg-blue py-2 px-4 rounded-pill text-grey" download="Guide Book MPKMB 58.pdf">Download PDF</a>
                </div>
            </div>,
            linkStatus: true
        },
        {
            key: 1,
            link: 'PANDUAN PENUGASAN',
            isi: 
            <div>
                <h2 className="fw-bold text-center mb-4 mx-3">PENUGASAN</h2>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <Iframe src="https://drive.google.com/file/d/1-RZBgCa5csmfwGGEMSuMje2JkFSXV9c0/preview" allow="autoplay"></Iframe>
                    <a href={penugasanPDF} className="mt-4 bg-blue py-2 px-4 rounded-pill text-grey" download="Panduan Penugasan MPKMB IPB 58.pdf">Download PDF</a>
                </div>
            </div>,
            linkStatus: false

        },
        {
            key: 2,
            link: 'PENGGUNAAN COURSE',
            isi: <div>
                <h2 className="fw-bold text-center mb-4">PENGGUNAAN COURSE</h2>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <Iframe src="https://drive.google.com/file/d/1wW4NGT8-ZS2LhZhZlMHddA26oCU5OoIy/preview" allow="autoplay"></Iframe>
                    <a href={penggunaanCoursePDF} className="mt-4 bg-blue py-2 px-4 rounded-pill text-grey" download="Panduan Penggunaan Course.pdf">Download PDF</a>
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
                    <Iframe src="https://drive.google.com/file/d/1TncZ2rKjB1Gp3AhLEILrlVLzHnmHTbc6/preview" allow="autoplay"></Iframe>
                    <a href={kelompokPDF} className="mt-4 bg-blue py-2 px-4 rounded-pill text-grey" download="Enrollment Key Mahardika Cakrabinaya.pdf">Download PDF</a>
                </div>
            </div>,
            linkStatus: false
        }, 
    ]

    
    return (
        <section className= "d-flex flex-column align-items-center justify-content-center">
            <Magazine contentWrapper={contentView} prevPage ="/AgendaPenugasan" prevPrevPage="/" depth="three" prevPrev ="Beranda" prev="Agenda dan Penugasan" current="Panduan"/>
        </section>
    )
}

export default Panduan
