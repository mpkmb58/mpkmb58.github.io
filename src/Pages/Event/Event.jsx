import React from 'react'
import Card from '../../Components/Card/Card'
import bgVirtual from '../../Assets/img/VectorEvent.svg'
import bgCampus from '../../Assets/img/VectorEvent-1.svg'
import bgAgriventure from '../../Assets/img/VectorEvent-2.svg'
import './Event.css'

const bgEvent = (e) => (<div class="event-bg-wrapper position-absolute">
    <img src={e} alt="Illustarasi Event" width="100%" className="element-bg" />
</div>)

function Event() {
    document.title = "MPKMB IPB 58 | Event MPKMB";
    const contentEvent = [
        {
            directTo: '/',
            title: "Virtual Exhibition",
            bgColors: "bg-blue",
            bgImages: bgEvent(bgVirtual)
        },
        {
            directTo: '/',
            title: "360 Campus Tour",
            bgColors: "bg-red",
            bgImages: bgEvent(bgCampus)
        },
        {
            directTo: '/',
            title: "Agriventure",
            bgColors: "bg-orange",
            bgImages: bgEvent(bgAgriventure)
        }
    ]

    return (
        <section className="bg-blur py-5">
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <h2 className="fw-bold text-center text-blue">Event MPKMB</h2>
                </div>
                <div className="row mt-3">
                    {
                        contentEvent.map(e =>
                            <div className="col-lg-4 mt-3 mt-lg-0">
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

export default Event
