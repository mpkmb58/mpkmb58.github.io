import React from 'react'
import bgAgenda from '../../Assets/img/Vectoragenda-logo.svg'
import bgPanduan from '../../Assets/img/Vectorpanduan-logo.svg'
import bgPenugasan from '../../Assets/img/VectorPenugasan.svg'
import Card from '../../Components/Card/Card'

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
        <section className="bg-blur py-5">
            <div class="container pt-5">
                <div className="row justify-content-center">
                    <h2 className="fw-bold text-center text-blue">Agenda dan Penugasan</h2>
                </div>
                <div class="row mt-3">
                    {
                        contentEvent.map(e =>
                            <div class="col-md-4 mt-3 mt-md-0">
                                <Card
                                    directTo={e.directTo}
                                    title={e.title}
                                    color={e.bgColors}
                                    backgorund={e.bgImages}
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
