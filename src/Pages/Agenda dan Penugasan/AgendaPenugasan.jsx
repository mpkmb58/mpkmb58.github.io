import React from 'react'
import bgAgenda from '../../Assets/img/Vectoragenda-logo.svg'
import bgPanduan from '../../Assets/img/Vectorpanduan-logo.svg'
import bgPenugasan from '../../Assets/img/VectorPenugasan.svg'
import Card from '../../Components/Card/Card'
import Modal from '../../Components/Modal/Modal'

const bgEvent = (e) => (<div class="event-bg-wrapper position-absolute">
    <img src={e} alt="Illustarasi Event" width="100%" className="element-bg" />
</div>)

function AgendaPenugasan() {
    document.title = "MPKMB IPB 58 | Agenda dan Penugasan";
    const contentEvent = [
        {
            directTo: '/Agenda',
            title: "Agenda",
            bgColors: "bg-blue",
            bgImages: bgEvent(bgAgenda)
        },
        {
            directTo: '/Panduan',
            title: "Panduan",
            bgColors: "bg-red",
            bgImages: bgEvent(bgPanduan)
        },
        {
            directTo: '/',
            title: "Penugasan",
            bgColors: "bg-orange",
            bgImages: bgEvent(bgPenugasan)
        }
    ]
    return (
        <Modal
                id="mentoring"
                title="MENTORING MPKMB"
                content={<p className="text-center text-blue"><span className="fw-bold">Mentoring</span> merupakan rangkaian acara MPKMB yang bertujuan untuk mempersiapkan calon mahasiswa baru dalam menjalani rangkaian acara utama MPKMB. Mentoring pada MPKMB tahun 2021 dilaksanakan pada tanggal <span className="fw-bold">23 Juli - 7 Agustus 2021 untuk gelombang pertama</span>, <span className="fw-bold">sedangkan 4 - 7 Agustus 2021 untuk gelombang kedua.</span></p>}
                size="modal-lg"
        />
        <section className=" py-5">
            <div class="container pt-5">
                <div className="row justify-content-center">
                    <h2 className="fw-bold text-center text-blue">Agenda dan Penugasan</h2>
                </div>
                <div class="row mt-3">
                    {
                        contentEvent.map(e =>
                            <div class="col-lg-4 mt-3 mt-lg-0">
                                <Card
                                    directTo={e.directTo}
                                    title={e.title}
                                    color={e.bgColors}
                                    background={e.bgImages}
                                    customSize='card-event-size'
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default AgendaPenugasan
