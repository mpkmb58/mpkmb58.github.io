import React from 'react'
import Magazine from '../../Components/Magazine/Magazine'
import styled from 'styled-components'
import Accordion from '../../Components/Accordion/AccordionItem'
import './FAQ.css'
import AccordionItem from '../../Components/Accordion/AccordionItems'
import { Fragment } from 'react'
import kelompokPDF from '../../Assets/documents/Enrollment Key Mahardika Cakrabinaya.pdf'
import sk from '../../Assets/documents/Surat Edaran - Penetapan Awal Tahun Akademik 2020_2021.pdf'
import logoPNG from '../../Assets/documents/LOGO MAHARDIKA CAKRABINAYA.png'
function FAQ() {

        const AccordionWrap = styled.div`
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        `

        const contentView = [
            {
            key: 0,
            link: 'UMUM',
            isi: <div>
                <h2 className="fw-bold text-blue text-center mt-3">UMUM</h2>
                <AccordionWrap>
                    <Accordion
                        parentId = "ListPertanyaanUmum"
                        content = {
                            <Fragment>
                                <AccordionItem
                                    parentId="ListPertanyaanUmum"
                                    id = "One"
                                    question = "Kapan MPKMB dilaksanakan?"
                                    answer = {<p>MPKMB akan dilaksanakan pada tanggal <strong>9 - 14 Agustus 2021.</strong> MPKMB akan dilaksanakan selama 5 hari. Telusuri informasi agenda MPKMB pada <a href="/AgendaPenugasan/Agenda" className="fw-bold">halaman agenda.</a></p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanUmum"
                                    id = "Two"
                                    question = "MPKMB IPB 58 akan diselenggarakan secara daring atau luring?"
                                    answer = {<p>Berdasarkan <a href={sk} className="fw-bold" download>Surat Edaran Kegiatan Akademik</a> yang diresmikan pada tahun 2020, seluruh kegiatan akademik dan non-akademik <strong>dilaksanakan secara daring</strong></p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanUmum"
                                    id = "Three"
                                    question = "Platform apa yang digunakan untuk melaksanakan rangkaian MPKMB?"
                                    answer = {<p>Platform yang digunakan untuk melakukan <i>video conference</i> adalah <strong>Zoom Meeting</strong> dan <strong>VOOV</strong>, sedangkan platform yang digunakan untuk melakukan komunikasi secara <i>synchronous</i> adalah <strong>Line Chat.</strong></p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanUmum"
                                    id = "Four"
                                    question = "Platform apa saja yang biasa digunakan untuk mengakses informasi terkini?"
                                    answer = {<p>Informasi terbaru mengenai rangkaian acara MPKMB dapat diakses melalui laman resmi MPKMB dan <a href="https://www.instagram.com/mpkmbipb/" target="_blank" rel="noreferrer" className="fw-bold">Instagram resmi MPKMB</a></p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanUmum"
                                    id = "Seven"
                                    question = "Apakah MPKMB berbeda dengan 7 Habits? Apa perbedaannya?"
                                    answer = {<p>MPKMB <strong>berbeda</strong> dengan 7 Habits. MPKMB bertujuan untuk mengenalkan tentang kampus IPB University dan bagaimana cara menjadi seorang mahasiswa untuk menghadapi dunia perkuliahan, sedangkan 7 Habits merupakan kegiatan yang bertujuan melatih pribadi dengan kebiasaan-kebiasaan yang sangat efektif.</p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanUmum"
                                    id = "Five"
                                    question = "Apakah MPKMB bersifat wajib? Bagaimana jika mahasiswa baru tidak mengikuti rangkaian MPKMB?"
                                    answer = {<p>MPKMB <strong>bersifat wajib</strong> bagi seluruh mahasiswa baru IPB angkatan 58. Apabila mahasiswa baru tidak mengikuti rangkaian MPKMB IPB 58, mahasiswa tersebut diwajibkan untuk mengikuti MPKMB di tahun berikutnya</p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanUmum"
                                    id = "Six"
                                    question = "Apakah ada kemungkinan seseorang untuk tidak lulus MPKMB?"
                                    answer = {<p><strong>Ada.</strong> Contohnya jika peserta tidak mengikuti salah satu kegiatan MPKMB IPB, tidak mengerjakan penugasan, dan melakukan pelanggaran berat selama rangkaian kegiatan MPKMB.</p>}
                                />
                            </Fragment>
                        }
                    />
                </AccordionWrap>
            </div>,
            linkStatus: true
            },
            {
            key: 1,
            link: 'COURSE',
            isi: <div>
                <h2 className="fw-bold text-blue text-center mt-3">COURSE</h2>
                <AccordionWrap>
                    <Accordion
                        parentId = "ListPertanyaanCourse"
                        content = {
                            <Fragment>
                                <AccordionItem
                                    parentId="ListPertanyaanCourse"
                                    id = "One"
                                    question = "Apa itu Course IPB"
                                    answer = {<p>Course IPB merupakan salah satu platform yang digunakan untuk menunjang kegiatan belajar-mengajar IPB University. Seluruh materi dan penugasan rangkaian MPKMB akan dilaksanakan pada halaman <a href="https://course.ipb.ac.id/course/view.php?id=1363" className="fw-bold">course.ipb.ac.id</a></p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanCourse"
                                    id = "Five"
                                    question = "Apa itu NIM?"
                                    answer = {<p>NIM atau Nomor Induk Mahasiswa merupakan nomor unik yang dimiliki oleh setiap mahasiswa sebagai identitas keikutsertaan dalam proses belajar-mengajar pada suatu Universitas.</p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanCourse"
                                    id = "Two"
                                    question = "Apa itu enrollment Key"
                                    answer = {<p><i>Enrollment Key</i> merupakan kode unik yang dimiliki oleh setiap section pada course. Seluruh mahasiswa baru akan diberikan <i>enrollment key</i> untuk mengakses halaman course MPKMB yang tersedia pada <a href="https://course.ipb.ac.id/course/view.php?id=1363" className="fw-bold">course.ipb.ac.id</a> Periksa  <i>enrollment key</i> pada <a href="/Panduan" className="fw-bold">halaman panduan</a> atau unduh informasi pembagian kelompok beserta enrollment key <a href={kelompokPDF} className="fw-bold" download>di sini.</a></p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanCourse"
                                    id = "Three"
                                    question = "Bagaimana jika saya belum memiliki email IPB?"
                                    answer = {<p>Hubungi<i> help center</i> IPB pada laman <a href="https://helpcenter.ipb.ac.id/" className="fw-bold">helpcenter.ipb.ac.id</a> atau ajukan pertanyaan kepada mentor.</p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanCourse"
                                    id = "Four"
                                    question = "Bagaimana jika saya lupa password dari email IPB saya?"
                                    answer = {<p>Hubungi<i> help center</i> IPB pada laman <a href="https://helpcenter.ipb.ac.id/" className="fw-bold">helpcenter.ipb.ac.id</a> atau ajukan pertanyaan kepada mentor.</p>}
                                />
                            </Fragment>
                        }
                    />
                </AccordionWrap>
            </div>,
            linkStatus: true
            },
            {
            key: 2,
            link: 'PENUGASAN DAN SOP',
            isi: <div>
                <h2 className="fw-bold text-blue text-center mt-3">KETENTUAN SOP</h2>
                <AccordionWrap>
                    <Accordion
                        parentId = "ListPertanyaanSOP"
                        content = {
                            <Fragment>
                                <AccordionItem
                                    parentId="ListPertanyaanSOP"
                                    id = "One"
                                    question = "Bagaimana ketentuan pakaian saat kegiatan MPKMB berlangsung?"
                                    answer = {<p>Ketentuan pakaian dapat dilihat visualisasi SOP di <a href="https://youtu.be/iPIchRraXcE" className="fw-bold">Youtube MPKMB IPB</a></p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanSOP"
                                    id = "Two"
                                    question = "Di mana mahasiswa baru dapat melihat pembagian kelompok?"
                                    answer = {<p>Pembagian kelompok besar, sedang, dan kecil dapat diunduh <a href= {kelompokPDF} className="fw-bold" download>disini</a></p>}
                                />
                                <AccordionItem
                                    parentId="ListPertanyaanSOP"
                                    id = "Three"
                                    question = "Di mana bisa mendapatkan logo Mahardika Cakrabinaya dan logo IPB?"
                                    answer = {<p>Logo Mahardika dan logo IPB dapat diakses <a href="ipb.link/logo-mpkmb58" className="fw-bold">disini</a></p>}
                                />
                            </Fragment>
                        }
                    />
                </AccordionWrap>
            </div>,
            linkStatus: true
            },
            
        ]

return (
// className="position-relative z-index-2 d-flex align-items-center justify-content-center"
<section className="d-flex justify-content-center align-items-center"> 
    <Magazine contentWrapper={contentView} depth="two" prevPage="/" prev="Beranda" current="FAQ"/>
</section>
)
}

export default FAQ