import React, { lazy, Suspense } from 'react'
import logo from '../../Assets/img/logo_mahardika_cakrabinaya 1.svg';
import logoKuning from '../../Assets/img/Logo_kuning.svg';
import logoUngu from '../../Assets/img/Logo_ungu.svg';
import logoMerah from '../../Assets/img/Logo_merah.svg';
import logoHijau from '../../Assets/img/Logo_hijau.svg';
import logoBiru from '../../Assets/img/Logo_biru.svg';
import './About.css'


const Magazine = lazy(() => import('../../Components/Magazine/Magazine'))


function About() {
    const contentView = [
        {
            key: 0,
            link: 'DEFINISI',
            isi: <div>
                <h2 className="fw-bold text-center mb-4">DEFINISI MPKMB</h2>
                <p><b>Masa Pengenalan Kampus Mahasiswa Baru (MPKMB)</b> sebagai momentum penyambutan terbesar mahasiswa baru Institut Pertanian Bogor menjadi wadah pertama untuk mengembangkan harapan guna menyiapkan generasi muda di masa depan dengan inovasi dan resolusi budaya orientasi yang lebih bermartabat dan menginspirasi. MPKMB mengenalkan tujuh nilai budaya korporat IPB yaitu keunggulan akademik, spiritualisme, gigih, senang bekerja sama, empati/peduli, tanggung jawab, dan komitmen. Mengusung tema “Perjuangan Merasionalisasi Mimpi untuk Berkontribusi Bagi Negeri” dengan menanamkan tiga nilai utama MPKMB IPB 58 pembelajar, pemimpi, dan penggerak.</p>
            </div>,
        },
        {
            key: 1,
            link: 'NAMA',
            isi: <div className="pt-5">
                <h2 className="fw-bold text-center mb-3">NAMA ANGKATAN</h2>
                <p> Kata "Mahardika" dalam Kamus Besar Bahasa Indonesia (KBBI) memiliki makna <b>berilmu (cerdik, pandai, bijak); berbudi luhur; dan memiliki sifat bangsawan</b>. Kata Cakrabinaya adalah akronim dari cita-cita, kerja, dan kontribusi nyata. Menurut KBBI makna Cakra adalah roda. Segala sesuatu mengalir kembali ke hulu seperti lingkaran. Memungkinkan terjadinya pembaharuan, repetisi, dan regenerasi. Dimana lingkaran yang ada mendorong setiap diri untuk memikirkan secara mendalam setiap momentum yang dilalui, sehingga mahasiswa 58 dapat bertumbuhdan menjadi regenerasi putra-putri terbaik bangsa.</p>

                <p>Dengan nama <b>Mahardika Cakrabinaya</b> diharapkan mahasiswa baru IPB University Angkatan 58 memiliki semangat dalam menjalankan setiap proses sebagai seorang mahasiswa hingga pada akhirnya mereka bisa menjadi insan berkualitas yang berilmu, berbudi luhur, memiliki rasa cinta terhadap tanah airnya, memiliki tekad bulat dalam mewujudkan cita- citanya dan pada akhirnya mampu berkontribusi nyata untuk negeri tercinta Indonesia.</p> </div>,
        },
        {
            key: 2,
            link: 'LOGO',
            isi: <div >
                <h2 className="fw-bold text-center mb-3">LOGO ANGKATAN</h2>
                <div className="text-center my-3  d-flex justify-content-center">
                    <img loading="lazy" src={logo} alt="Logo Mahardika Cakrabinaya" className="logo-akt" />
                </div>
                <p><b>Mahardika Cakrabinaya</b> digambarkan dalam wujud <b>Rusa Terbang</b>. <b>Rusa</b> mencerminkan sosok elegan yang mampu mengatasi berbagai masalah dengan kemurnian hatinya. Kepala rusa yang senantiasa selalu <b>menunduk ke arah kanan</b> menunjukkan keluhuran budi. <b>Bentangan sayap</b> yang dimiliki Rusa ini mencerminkan bentangan cakrawala ilmu pengetahuan. Sesuai dengan harapan dari nama Mahardika Cakrabinaya yaitu insan berkualitas yang berilmu dan berbudi yang luhur.</p>
            </div>,
        },
        {
            key: 3,
            link: 'KELOMPOK',
            isi: <div className="row justify-content-center">
                <div class="col-md-4 mb-4  text-center ">
                    <img loading="lazy" src={logoBiru} alt="Logo Mahardika Nawesana" className="logo-kelompok" />
                </div>
                <div class="col-md-4  mb-4 text-center ">
                    <img loading="lazy" src={logoHijau} alt="Logo Mahardika Reswara" className="logo-kelompok" />
                </div>
                <div class="col-md-4 mb-4   text-center ">
                    <img loading="lazy" src={logoUngu} alt="Logo Mahardika Arunakara" className="logo-kelompok" />
                </div>
                <div class="col-md-4 mb-4  text-center ">
                    <img src={logoMerah} alt="Logo Mahardika Wirakarsa" className="logo-kelompok" />
                </div>
                <div class="col-md-4  mb-4  text-center ">
                    <img loading="lazy" src={logoKuning} alt="Logo Mahardika Kalawa" className="logo-kelompok" />
                </div>
            </div>,
        }
    ]


    return (
        // className="position-relative z-index-2 d-flex align-items-center justify-content-center" 
        <section className="d-flex justify-content-center align-items-center z-index-2" >
            <Suspense fallback={<h1>Loading</h1>}>
                <Magazine contentWrapper={contentView} />
            </Suspense>
        </section>
    )
}

export default About



