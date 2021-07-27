import React, {Fragment} from 'react'
import AboutComponent from '../../Components/AboutComponent/AboutComponent'
import Footer from '../../Components/Footer/Footer'

function Panduan() {
    return (
        <Fragment>
            <section className ="bg-blur pt-5">
                 <AboutComponent
                    defaultHash = "DEFINISI"
                    defaultTitle = "DEFINISI MPKMB"
                    default = {[<p><b>Masa Pengenalan Kampus Mahasiswa Baru (MPKMB)</b> sebagai momentum penyambutan terbesar mahasiswa baru Institut Pertanian Bogor menjadi wadah pertama untuk mengembangkan harapan guna menyiapkan generasi muda di masa depan dengan inovasi dan resolusi budaya orientasi yang lebih bermartabat dan menginspirasi. MPKMB mengenalkan tujuh nilai budaya korporat IPB yaitu keunggulan akademik, spiritualisme, gigih, senang bekerja sama, empati/peduli, tanggung jawab, dan komitmen. Mengusung tema “Perjuangan Merasionalisasi Mimpi untuk Berkontribusi Bagi Negeri” dengan menanamkan tiga nilai utama MPKMB IPB 58 pembelajar, pemimpi, dan penggerak.</p>]}
                 />
            </section>
            <Footer/>
        </Fragment>
    )
}

export default Panduan
