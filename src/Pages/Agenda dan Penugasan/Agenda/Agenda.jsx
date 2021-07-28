import React from 'react'
import bgCeremony from '../../../Assets/img/VectorLogo-harian-1.svg'
import bgFaculty from '../../../Assets/img/VectorLogo-harian-2.svg'
import bgCreature from '../../../Assets/img/VectorLogo-harian-3.svg'
import bgYoung from '../../../Assets/img/VectorLogo-harian-4.svg'
import bgClosing from '../../../Assets/img/VectorLogo-harian-5.svg'
import Card from '../../../Components/Card/Card'


const bgEvent = (e) => (<div class="event-bg-wrapper position-absolute">
    <img src={e} alt="Illustarasi Event" width="100%" className="element-bg" />
</div>)

function Agenda() {
    document.title = "MPKMB IPB 58 | Agenda";
    const contentEvent = [
        {
            directTo: '/',
            title: "Day 1 - Opening Ceremony",
            bgColors: "bg-blue",
            bgImages: bgEvent(bgCeremony)
        },
        {
            directTo: '/',
            title: "Day 2 - Faculty Tour",
            bgColors: "bg-blue",
            bgImages: bgEvent(bgFaculty)
        },
        {
            directTo: '/',
            title: "Day 3 - Creature",
            bgColors: "bg-red",
            bgImages: bgEvent(bgCreature)
        },
        {
            directTo: '/',
            title: "Day 4 - Young, Spirit, and Nationalism",
            bgColors: "bg-red",
            bgImages: bgEvent(bgYoung)
        },
        {
            directTo: '/',
            title: "Day 5 - Closing Ceremony",
            bgColors: "bg-orange",
            bgImages: bgEvent(bgClosing)
        }
    ]
    return (
        <section className="bg-blur py-5">
            <div class="container pt-5">
                <div class="row mt-5 justify-content-center">
                    {
                        contentEvent.map(e =>
                            <div class="col-md-6 mt-3 ">
                                <Card
                                    directTo={e.directTo}
                                    title={e.title}
                                    color={e.bgColors}
                                    backgorund={e.bgImages}
                                    customSize='card-agenda-size'
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Agenda
