import React, {Fragment} from 'react'
import AboutComponent from '../../Components/AboutComponent/AboutComponent'
import Footer from '../../Components/Footer/Footer'
import logo from '../../Assets/img/logo_mahardika_cakrabinaya 1.svg';
import logoKuning from '../../Assets/img/Logo_kuning.svg';
import logoUngu from '../../Assets/img/Logo_ungu.svg';
import logoMerah from '../../Assets/img/Logo_merah.svg';
import logoHijau from '../../Assets/img/Logo_hijau.svg';
import logoBiru from '../../Assets/img/Logo_biru.svg';
// import './About.css'

function About() {
    return (
        <Fragment>
        <section className="bg-blur pt-5" >
            <AboutComponent
                defaultHash = "DEFINISI"
                defaultTitle = "DEFINISI MPKMB"
                default = {[<p><b>Masa Pengenalan Kampus Mahasiswa Baru (MPKMB)</b> sebagai momentum penyambutan terbesar mahasiswa baru Institut Pertanian Bogor menjadi wadah pertama untuk mengembangkan harapan guna menyiapkan generasi muda di masa depan dengan inovasi dan resolusi budaya orientasi yang lebih bermartabat dan menginspirasi. MPKMB mengenalkan tujuh nilai budaya korporat IPB yaitu keunggulan akademik, spiritualisme, gigih, senang bekerja sama, empati/peduli, tanggung jawab, dan komitmen. Mengusung tema “Perjuangan Merasionalisasi Mimpi untuk Berkontribusi Bagi Negeri” dengan menanamkan tiga nilai utama MPKMB IPB 58 pembelajar, pemimpi, dan penggerak.</p>]}

                content1Hash = "DEFINISI"
                content1Title = "DEFINISI MPKMB"
                content1 = {[<p><b>Masa Pengenalan Kampus Mahasiswa Baru (MPKMB)</b> sebagai momentum penyambutan terbesar mahasiswa baru Institut Pertanian Bogor menjadi wadah pertama untuk mengembangkan harapan guna menyiapkan generasi muda di masa depan dengan inovasi dan resolusi budaya orientasi yang lebih bermartabat dan menginspirasi. MPKMB mengenalkan tujuh nilai budaya korporat IPB yaitu keunggulan akademik, spiritualisme, gigih, senang bekerja sama, empati/peduli, tanggung jawab, dan komitmen. Mengusung tema “Perjuangan Merasionalisasi Mimpi untuk Berkontribusi Bagi Negeri” dengan menanamkan tiga nilai utama MPKMB IPB 58 pembelajar, pemimpi, dan penggerak.</p>]}

                content2Hash = "NAMA"
                content2Title = "NAMA ANGKATAN"
                content2= {<div> <p> Kata "Mahardika" dalam Kamus Besar Bahasa Indonesia (KBBI) memiliki makna <b>berilmu (cerdik, pandai, bijak); berbudi luhur; dan memiliki sifat bangsawan</b>. Kata Cakrabinaya adalah akronim dari cita-cita, kerja, dan kontribusi nyata. Menurut KBBI makna Cakra adalah roda. Segala sesuatu mengalir kembali ke hulu seperti lingkaran. Memungkinkan terjadinya pembaharuan, repetisi, dan regenerasi. Dimana lingkaran yang ada mendorong setiap diri untuk memikirkan secara mendalam setiap momentum yang dilalui, sehingga mahasiswa 58 dapat bertumbuhdan menjadi regenerasi putra-putri terbaik bangsa.</p>

                <p>Dengan nama <b>Mahardika Cakrabinaya</b> diharapkan mahasiswa baru IPB University Angkatan 58 memiliki semangat dalam menjalankan setiap proses sebagai seorang mahasiswa hingga pada akhirnya mereka bisa menjadi insan berkualitas yang berilmu, berbudi luhur, memiliki rasa cinta terhadap tanah airnya, memiliki tekad bulat dalam mewujudkan cita- citanya dan pada akhirnya mampu berkontribusi nyata untuk negeri tercinta Indonesia.</p> </div>}

                content3Hash = "LOGO"
                content3Title = "LOGO ANGKATAN"
                content3 = 
                {<div>
                            <div className="text-center my-3">
                                <div className="logo-akt d-inline-block">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                            <p><b>Mahardika Cakrabinaya</b> digambarkan dalam wujud <b>Rusa Terbang</b>. <b>Rusa</b> mencerminkan sosok elegan yang mampu mengatasi berbagai masalah dengan kemurnian hatinya. Kepala rusa yang senantiasa selalu <b>menunduk ke arah kanan</b> menunjukkan keluhuran budi. <b>Bentangan sayap</b> yang dimiliki Rusa ini mencerminkan bentangan cakrawala ilmu pengetahuan. Sesuai dengan harapan dari nama Mahardika Cakrabinaya yaitu insan berkualitas yang berilmu dan berbudi yang luhur.</p></div>
                }
                
                
                content4Hash = "KELOMPOK"
                content4Title =''
                content4 = {<div className="row justify-content-center">
                            <div class="col-sm-4 mb-3 text-center">
                                <div className="logo-kelompok d-inline-block">
                                    <img src={logoBiru} alt="Logo Mahardika Nawesana" />
                                </div>
                            </div>
                            <div class="col-sm-4 mb-3 text-center">
                                <div className="logo-kelompok d-inline-block">
                                    <img src={logoHijau} alt="Logo Mahardika Reswara" />
                                </div>
                            </div>
                            <div class="col-sm-4 mb-3  text-center">
                                <div className="logo-kelompok d-inline-block">
                                    <img src={logoUngu} alt="Logo Mahardika Arunakara" />
                                </div>
                            </div>
                            <div class="col-sm-4 mb-3 text-center">
                                <div className="logo-kelompok d-inline-block">
                                    <img src={logoMerah} alt="Logo Mahardika Wirakarsa" />
                                </div>
                            </div>
                            <div class="col-sm-4 mb-3  text-center">
                                <div className="logo-kelompok d-inline-block">

                                    <img src={logoKuning} alt="Logo Mahardika Kalawa" />
                                </div>
                            </div>
                        </div>}
            />
        </section>
        <Footer/>
        </Fragment>
    )
}

export default About
 

// default hash : DEFINISI
//default title : DEFINISI MPKMB
// default : <p><b>Masa Pengenalan Kampus Mahasiswa Baru (MPKMB)</b> sebagai momentum penyambutan terbesar mahasiswa baru Institut Pertanian Bogor menjadi wadah pertama untuk mengembangkan harapan guna menyiapkan generasi muda di masa depan dengan inovasi dan resolusi budaya orientasi yang lebih bermartabat dan menginspirasi. MPKMB mengenalkan tujuh nilai budaya korporat IPB yaitu keunggulan akademik, spiritualisme, gigih, senang bekerja sama, empati/peduli, tanggung jawab, dan komitmen. Mengusung tema “Perjuangan Merasionalisasi Mimpi untuk Berkontribusi Bagi Negeri” dengan menanamkan tiga nilai utama MPKMB IPB 58 pembelajar, pemimpi, dan penggerak.</p>

// content2 hash : NAMA
//content 2 title : NAMA ANGKATAN
// content 2 : <div> <p> Kata "Mahardika" dalam Kamus Besar Bahasa Indonesia (KBBI) memiliki makna <b>berilmu (cerdik, pandai, bijak); berbudi luhur; dan memiliki sifat bangsawan</b>. Kata Cakrabinaya adalah akronim dari cita-cita, kerja, dan kontribusi nyata. Menurut KBBI makna Cakra adalah roda. Segala sesuatu mengalir kembali ke hulu seperti lingkaran. Memungkinkan terjadinya pembaharuan, repetisi, dan regenerasi. Dimana lingkaran yang ada mendorong setiap diri untuk memikirkan secara mendalam setiap momentum yang dilalui, sehingga mahasiswa 58 dapat bertumbuhdan menjadi regenerasi putra-putri terbaik bangsa.</p><br/><p>Dengan nama <b>Mahardika Cakrabinaya</b> diharapkan mahasiswa baru IPB University Angkatan 58 memiliki semangat dalam menjalankan setiap proses sebagai seorang mahasiswa hingga pada akhirnya mereka bisa menjadi insan berkualitas yang berilmu, berbudi luhur, memiliki rasa cinta terhadap tanah airnya, memiliki tekad bulat dalam mewujudkan cita- citanya dan pada akhirnya mampu berkontribusi nyata untuk negeri tercinta Indonesia.</p> </div>


// content3 hash : LOGO
// content 3 title : LOGO ANGKATAN
// // Content 3 : <div>
//             <div className="text-center my-3 ">
//                 <div className="logo-akt d-inline-block">
//                     <img src={logo} alt="" />
//                 </div>
//             </div>
//             <p><b>Mahardika Cakrabinaya</b> digambarkan dalam wujud <b>Rusa Terbang</b>. <b>Rusa</b> mencerminkan sosok elegan yang mampu mengatasi berbagai masalah dengan kemurnian hatinya. Kepala rusa yang senantiasa selalu <b>menunduk ke arah kanan</b> menunjukkan keluhuran budi. <b>Bentangan sayap</b> yang dimiliki Rusa ini mencerminkan bentangan cakrawala ilmu pengetahuan. Sesuai dengan harapan dari nama Mahardika Cakrabinaya yaitu insan berkualitas yang berilmu dan berbudi yang luhur.</p></div>


// content4 hash : KELOMPOK
// content 4 : <div className="row justify-content-center">
//             <div class="col-sm-4 mb-3 text-center">
//                 <div className="logo-kelompok d-inline-block">
//                     <img src={logoBiru} alt="Logo Mahardika Nawesana" />
//                 </div>
//             </div>
//             <div class="col-sm-4 mb-3 text-center">
//                 <div className="logo-kelompok d-inline-block">
//                     <img src={logoHijau} alt="Logo Mahardika Reswara" />
//                 </div>
//             </div>
//             <div class="col-sm-4 mb-3  text-center">
//                 <div className="logo-kelompok d-inline-block">
//                     <img src={logoUngu} alt="Logo Mahardika Arunakara" />
//                 </div>
//             </div>
//             <div class="col-sm-4 mb-3 text-center">
//                 <div className="logo-kelompok d-inline-block">
//                     <img src={logoMerah} alt="Logo Mahardika Wirakarsa" />
//                 </div>
//             </div>
//             <div class="col-sm-4 mb-3  text-center">
//                 <div className="logo-kelompok d-inline-block">

//                     <img src={logoKuning} alt="Logo Mahardika Kalawa" />
//                 </div>
//             </div>
//         </div>;