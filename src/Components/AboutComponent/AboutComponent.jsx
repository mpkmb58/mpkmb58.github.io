import React, { useState } from 'react'
import './AboutComponent.css'
import logo from '../../Assets/img/logo_mahardika_cakrabinaya 1.svg';
import logoKuning from '../../Assets/img/Logo_kuning.svg';
import logoUngu from '../../Assets/img/Logo_ungu.svg';
import logoMerah from '../../Assets/img/Logo_merah.svg';
import logoHijau from '../../Assets/img/Logo_hijau.svg';
import logoBiru from '../../Assets/img/Logo_biru.svg';
// import $ from 'jquery'


function AboutComponent() {
    const contentView = [
        {
            key: 0,
            link: 'DEFINISI',
            isi: <div>
                <h2 className="fw-bold text-center mb-4">DEFINISI MPKMB</h2>
                <p><b>Masa Pengenalan Kampus Mahasiswa Baru (MPKMB)</b> sebagai momentum penyambutan terbesar mahasiswa baru Institut Pertanian Bogor menjadi wadah pertama untuk mengembangkan harapan guna menyiapkan generasi muda di masa depan dengan inovasi dan resolusi budaya orientasi yang lebih bermartabat dan menginspirasi. MPKMB mengenalkan tujuh nilai budaya korporat IPB yaitu keunggulan akademik, spiritualisme, gigih, senang bekerja sama, empati/peduli, tanggung jawab, dan komitmen. Mengusung tema “Perjuangan Merasionalisasi Mimpi untuk Berkontribusi Bagi Negeri” dengan menanamkan tiga nilai utama MPKMB IPB 58 pembelajar, pemimpi, dan penggerak.</p>
            </div>,
            linkStatus: true
        },
        {
            key: 1,
            link: 'NAMA',
            isi: <div>
                <h2 className="fw-bold text-center mb-3">NAMA ANGKATAN</h2>
                <p> Kata "Mahardika" dalam Kamus Besar Bahasa Indonesia (KBBI) memiliki makna <b>berilmu (cerdik, pandai, bijak); berbudi luhur; dan memiliki sifat bangsawan</b>. Kata Cakrabinaya adalah akronim dari cita-cita, kerja, dan kontribusi nyata. Menurut KBBI makna Cakra adalah roda. Segala sesuatu mengalir kembali ke hulu seperti lingkaran. Memungkinkan terjadinya pembaharuan, repetisi, dan regenerasi. Dimana lingkaran yang ada mendorong setiap diri untuk memikirkan secara mendalam setiap momentum yang dilalui, sehingga mahasiswa 58 dapat bertumbuhdan menjadi regenerasi putra-putri terbaik bangsa.</p>

                <p>Dengan nama <b>Mahardika Cakrabinaya</b> diharapkan mahasiswa baru IPB University Angkatan 58 memiliki semangat dalam menjalankan setiap proses sebagai seorang mahasiswa hingga pada akhirnya mereka bisa menjadi insan berkualitas yang berilmu, berbudi luhur, memiliki rasa cinta terhadap tanah airnya, memiliki tekad bulat dalam mewujudkan cita- citanya dan pada akhirnya mampu berkontribusi nyata untuk negeri tercinta Indonesia.</p> </div>,
            linkStatus: false

        },
        {
            key: 2,
            link: 'LOGO',
            isi: <div>
                <h2 className="fw-bold text-center mb-3">LOGO ANGKATAN</h2>
                <div className="text-center my-3">
                    <img src={logo} alt="" />
                </div>
                <p><b>Mahardika Cakrabinaya</b> digambarkan dalam wujud <b>Rusa Terbang</b>. <b>Rusa</b> mencerminkan sosok elegan yang mampu mengatasi berbagai masalah dengan kemurnian hatinya. Kepala rusa yang senantiasa selalu <b>menunduk ke arah kanan</b> menunjukkan keluhuran budi. <b>Bentangan sayap</b> yang dimiliki Rusa ini mencerminkan bentangan cakrawala ilmu pengetahuan. Sesuai dengan harapan dari nama Mahardika Cakrabinaya yaitu insan berkualitas yang berilmu dan berbudi yang luhur.</p></div>,
            linkStatus: false

        },
        {
            key: 3,
            link: 'KELOMPOK',
            isi: <div className="row justify-content-center">
                <div class="col-sm-4 mb-3 text-center">
                    <img src={logoBiru} alt="Logo Mahardika Nawesana" />
                </div>
                <div class="col-sm-4 mb-3 text-center">
                    <img src={logoHijau} alt="Logo Mahardika Reswara" />
                </div>
                <div class="col-sm-4 mb-3  text-center">
                    <img src={logoUngu} alt="Logo Mahardika Arunakara" />
                </div>
                <div class="col-sm-4 mb-3  text-center">
                    <img src={logoMerah} alt="Logo Mahardika Wirakarsa" />
                </div>
                <div class="col-sm-4 mb-3  text-center">
                    <img src={logoKuning} alt="Logo Mahardika Kalawa" />
                </div>
            </div>,
            linkStatus: false

        }
    ]

    let [content, setContent] = useState(contentView[0].isi);


    return (
        <section className="bg-blur py-5">
            <div className="container pt-5">
                <div className="row mb-4">
                    <div className="col text-end"><h5 className="m-0">Beranda/About MPKMB</h5></div>
                </div>
                <div className="row justify-content-between">
                    <div class="overflow-auto about-nav-wrapper col-lg-2 py-3 d-flex flex-lg-column justify-content-lg-start justify-content-center align-items-center bg-grey">
                        {
                            contentView.map(e =>
                                <div onClick={() => {
                                    setContent(contentView[e.key].isi)
                                }} className='shadow-md hash btn rounded-pill my-2 py-1'>
                                    <h5 className="m-0">{e.link}</h5>
                                </div>
                            )
                        }
                    </div>
                    <div className="content col-lg-9 bg-grey about-nav-wrapper p-5 my-4 my-lg-0">
                        {content}
                    </div>
                </div>

            </div>
        </section >
    )
}

export default AboutComponent
