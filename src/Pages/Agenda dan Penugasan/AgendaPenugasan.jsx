import React, {Fragment} from 'react'
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
        <Fragment>
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
        </Fragment>
    )
}

export default AgendaPenugasan
