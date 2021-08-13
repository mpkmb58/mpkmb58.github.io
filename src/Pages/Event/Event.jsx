import React, { lazy, Suspense } from 'react'
import bgVirtual from '../../Assets/img/VectorEvent.svg'
import bgCampus from '../../Assets/img/VectorEvent-1.svg'
import bgAgriventure from '../../Assets/img/VectorEvent-2.svg'
import './Event.css'
import Loader from '../../Components/Loader/Loader'
const Card = lazy(() => import('../../Components/Card/Card'))

const bgEvent = (e) => (<div class="event-bg-wrapper position-absolute">
    <img loading="lazy" src={e} alt="Illustarasi Event" width="100%" className="element-bg" />
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
            directTo: '//ipb.link/mpkmb-airlines',
            title: "MPKMB Airlines",
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
        <section className="d-flex justify-content-center align-items-center position-relative z-index-3">
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <h2 className="fw-bold text-center text-blue">Event MPKMB</h2>
                </div>
                <div className="row mt-3">
                    <Suspense fallback={<Loader></Loader>}>
                        {
                            contentEvent.map(e =>
                                <div className="col-lg-4 mt-3 mt-lg-0">
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
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default Event
