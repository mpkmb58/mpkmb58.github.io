import React, { Fragment, lazy, Suspense , useEffect} from 'react'
import { logoLogo, logoConsole, logoFAQ, penugasan, sponsor} from './SectionB.data'
import panduanPDF from '../../Assets/documents/GuideBook.pdf'
import skRektorPDF from '../../Assets/documents/Surat Edaran - Penetapan Awal Tahun Akademik 2020_2021.pdf'
import './SectionB.css'
import Loader from '../Loader/Loader';
import kelompokPDF from '../../Assets/documents/Enrollment Key Mahardika Cakrabinaya.pdf'
import caption from  '../../Assets/documents/Caption Twibbon.docx'
import twibbon from '../../Assets/documents/Twibbon Mahardika Cakrabinaya.mp4'
import game from '../../Assets/documents/Agriventure 2 (1).apk'
import panduanGame from '../../Assets/documents/Guide Game Agriventure 2 _ The Dream Chaser (1).pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'

const ComingSoon = lazy(() => import('../ComingSoon/ComingSoon'));
const Modal = lazy(() => import('../../Components/Modal/Modal'))
const CardLiniMasa = lazy(() => import('../../Components/CardLiniMasa/CardLiniMasa'))
const Card = lazy(() => import('../Card/Card'))

const ModalDoc = styled.iframe`
        width: 95%;
        aspect-ratio: 16/9;
        z-index: 0;

    @media (max-width : 768px){
        width : 95%;
        aspect-ratio: 3/4;
        z-index: 0;
    }
    
    `
const AboutWrapper = styled.div`
    position: relative;
    z-index: 1;
`

function SectionB() {

    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <Fragment>
            <Suspense fallback={<Loader></Loader>}>
                <Suspense fallback={<Loader></Loader>}>
                    <Suspense fallback={<Loader></Loader>}>
                        <Modal
                            id="mentoring"
                            title="MENTORING MPKMB"
                            content={
                                <div className="text-blue">
                                    <Fragment>
                                    <p className="text-blue">Pada kegiatan mentoring, kamu akan diberikan informasi yang diperlukan untuk mengikuti seluruh kegiatan MPKMB. Kamu akan dibagi menjadi beberapa kelompok dan dibimbing oleh seorang  mentor. Unduh informasi pembagian kelompok <a href={kelompokPDF} className="fw-bold" download="Enrollment Key Mahardika Cakrabinaya.pdf">disini.</a></p>
                                    <p> Mentoring akan dilaksakan <strong>dalam dua gelombang</strong> : <br/>
                                        <ul>
                                            <li>Gelombang Pertama : 23 Juli - 7 Agustus 2021</li>
                                            <li>Gelombang Kedua   : 4 Agustus - 7 Agustus 2021</li>
                                        </ul>
                                    </p>
                                    <p>
                                    Informasi lebih lanjut tentang mentoring dapat dibaca pada laman <a className="fw-bold text-decoration-none" target="_blank" rel="noreferrer" href="https://course.ipb.ac.id/course/view.php?id=1363"> course.ipb.ac.id</a></p>
                                    </Fragment>
                                </div>
                            }
                            size="modal-lg"
                        />
                        <Modal
                            id="panduan"
                            title="Panduan MPKMB"
                            content=
                            {
                                <Fragment> 
                                    <ModalDoc loading="lazy" src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" allow="autoplay"></ModalDoc>
                                    <a href={panduanPDF} className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey" download="Guide Book MPKMB 58.pdf">Download PDF</a>
                                </Fragment>
                            }
                            size="modal-lg"
                        />

                        <Modal
                            id="sk"
                            title="Surat Keputusan Rektor"
                            content=
                            {
                                <Fragment>
                                    <ModalDoc loading="lazy" src="https://drive.google.com/file/d/1j7YX38amioVZ70wvJgo76BqY6jzXfGDV/preview" allow="autoplay" ></ModalDoc>
                                    <a href={skRektorPDF} className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey" download="Surat Edaran - Penetapan Awal Tahun Akademik 2020_2021.pdf">Download PDF</a>
                                </Fragment>
                            }
                            size="modal-lg"
                        />
                        <Modal
                            id="twibbon"
                            title="Twibbon Peserta MPKMB"
                            content=
                            {
                                <Fragment>
                                    <ModalDoc loading="lazy" src="https://drive.google.com/file/d/1s9B-SqP9jW-dbOtQLcSXqi6FYJq1dS0U/preview" allow="autoplay" ></ModalDoc>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href={caption} className="text-center mt-3 mx-1 bg-blue py-1 px-3 rounded-pill text-grey" download="Caption Twibbon.docx">Download Caption</a>
                                        <a href={twibbon} className="text-center mt-3 mx-1 bg-blue py-1 px-3 rounded-pill text-grey" download="Twibbon Mahardika Cakrabinaya.mp4">Download Twibbon</a>
                                    </div>
                                </Fragment>
                            }
                            size="modal-lg"
                        />

                        <Modal
                            id="opening"
                            title="Opening MPKMB"
                            content={<p className="text-center text-blue">Upacara pembukaan Masa Pengenalan Kampus Mahasiswa Baru atau <span className="fw-bold">Opening Ceremony MPKMB</span> akan dilaksanakan pada tanggal <span className="fw-bold">9 Agustus 2021.</span></p>}
                            size="modal-lg"
                        />

                        <Modal
                            id="game"
                            title="Agriventure 2 : The Dream Chaser"
                            content=
                            {
                                <Fragment>
                                    <ModalDoc loading="lazy" src="https://drive.google.com/file/d/1XeXTemNGD6cZr_kITZ_vvgrXDZJy0Lw0/preview" allow="autoplay" ></ModalDoc>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href={panduanGame} className="text-center mt-3 mx-1 bg-blue py-1 px-3 rounded-pill text-grey" download="Guide Game Agriventure 2 : The Dream Chaser.pdf">Download Panduan</a>
                                        <a href={game} className="text-center mt-3 mx-1 bg-blue py-1 px-3 rounded-pill text-grey" download="Agriventure 2.apk">Download APK</a>
                                    </div>
                                </Fragment>
                            }
                            size="modal-lg"
                        />

                        <ComingSoon/>
                    </Suspense>
            
                <section className="b" >
                    <div className="container">
                        <div className="row mb-3">
                            <AboutWrapper className="col-12">
                                <Card
                                    directTo="/About"
                                    title="About MPKMB"
                                    color="bg-blue"
                                    background={logoLogo}
                                    texture={true}
                                    bgPositionTop='texture-top-left'
                                    bgPositionBottom='texture-bottom-right'
                                    animateBottom={true}
                                />
                            </AboutWrapper>
                        </div>

                            <div className="row mt-3" data-aos="fade-up">
                                <div className="col-12">

                                    <CardLiniMasa />

                                </div>
                            </div>
                        <Suspense fallback={<Loader></Loader>}>
                        <div class="row mt-3" >
                            <div class="col-md-6" data-aos="fade-right">

                                <Card
                                    directTo="/Event"
                                    title="Event MPKMB"
                                    color="bg-orange"
                                    background={logoConsole}
                                    texture={true}
                                    bgPositionTop='texture-top-left'
                                    bgPositionBottom='texture-bottom-right'
                                    animateTop={true}
                                />

                            </div>
                            <div className="col-md-6 mt-3 mt-md-0" data-aos="fade-left">

                                <Card
                                    directTo="/FAQ"
                                    title="FAQ"
                                    color="bg-orange"
                                    background={logoFAQ}
                                    texture={true}
                                    bgPositionTop='texture-top-right'
                                    bgPositionBottom='texture-bottom-left'
                                    comingsoon = {true}
                                />

                            </div>
                        </div>
                        <div className="row mt-3" data-aos="fade-up">
                            <AboutWrapper className="col-12">

                                <Card
                                    directTo="/AgendaPenugasan"
                                    title="Agenda dan Penugasan"
                                    color="bg-red"
                                    background={penugasan}
                                    texture={true}
                                    bgPositionTop='texture-top-center'
                                    bgPositionBottom='texture-bottom-center'
                                />
                            </AboutWrapper>
                        </div>
                            <Suspense>
                                <div className="row mt-3" data-aos="fade-up" >
                                    <AboutWrapper className="col-12">

                                        <Card
                                            title=''
                                            viewSponsor={sponsor}
                                            color="bg-blue"
                                            background=''
                                            texture={true}
                                            bgPositionTop='texture-top-left'
                                            bgPositionBottom='texture-bottom-right'
                                        />
                                    </AboutWrapper>
                                </div>
                            </Suspense>
                        </Suspense>
                    </div>
                </section>
                </Suspense>
            </Suspense>
        </Fragment>
    )
}

export default SectionB
