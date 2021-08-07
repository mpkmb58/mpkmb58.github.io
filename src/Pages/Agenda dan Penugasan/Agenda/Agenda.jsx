import React, { lazy, Suspense, useEffect } from 'react'
import bgCeremony from '../../../Assets/img/Vector-hari-1.svg'
import bgFaculty from '../../../Assets/img/Vector-hari-2.svg'
import bgCreature from '../../../Assets/img/Vector-hari-3.svg'
import bgYoung from '../../../Assets/img/Vector-hari-4.svg'
import bgClosing from '../../../Assets/img/Vector-hari-5.svg'
import Loader from '../../../Components/Loader/Loader'
import './Agenda.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackButton from '../../../Components/BackButton/BackButton'
import Breadcumb from '../../../Components/Breadcumb/Breadcumb'


const Card = lazy(() => import('../../../Components/Card/Card'))
// const ComingSoon = lazy(() => import('../../../Components/ComingSoon/ComingSoon'))

const bgEvent = (e) => (<div class="bg-agenda-size position-absolute">
    <img loading="lazy" src={e} alt="Illustarasi Event" className="element-bg" />
</div>)

function Agenda() {

    useEffect(() => {
        AOS.init();
    }, [])


    document.title = "MPKMB IPB 58 | Agenda";
    const contentEvent = [
        {
            directTo:"//ipb.link/mpkmb58-h1",
            title: "Day 1 - Opening Ceremony",
            bgColors: "bg-blue",
            bgImages: bgEvent(bgCeremony)
        },
        {
            directTo:"//ipb.link/mpkmb58-h2",
            title: "Day 2 - Faculty Tour",
            bgColors: "bg-blue",
            bgImages: bgEvent(bgFaculty)
        },
        {
            directTo: "//ipb.link/mpkmb58-h3",
            title: "Day 3 - Creature",
            bgColors: "bg-red",
            bgImages: bgEvent(bgCreature)
        },
        {
            directTo: "//ipb.link/mpkmb58-h4",
            title: "Day 4 - Young, Spirit, and Nationalism",
            bgColors: "bg-red",
            bgImages: bgEvent(bgYoung)
        },
        {
            directTo: "//ipb.link/mpkmb58-h5",
            title: "Day 5 - Closing Ceremony",
            bgColors: "bg-orange",
            bgImages: bgEvent(bgClosing)
        }
    ]
    return (
        <section className="agenda d-flex justify-content-center align-items-center">
            <div class="container"> 
                <div className="row z-index-3 position-relative">
                    <div className="d-flex justify-content-sm-between">
                        <BackButton prevPage="/AgendaPenugasan"/>
                        <div className="d-sm-block d-none">
                            <Breadcumb depth="three" prevPage="/AgendaPenugasan" prevPrevPage="/" prev="Agenda dan Penugasan" current="Agenda" prevPrev="Beranda"/>
                        </div>
                    </div>
                    <div className="d-sm-none d-block pt-4">
                        <Breadcumb depth="three" prevPage="/AgendaPenugasan" prevPrevPage="/" prev="Agenda dan Penugasan" current="Agenda" prevPrev="Beranda"/>
                    </div>
                </div>
                <div class="row justify-content-center pt-3">
                    <Suspense fallback={<Loader></Loader>}>
                        {
                            contentEvent.map(e =>
                                <div class="col-lg-6 mt-4" data-aos="fade-up">
                                    <Card
                                        directTo={e.directTo}
                                        title={e.title}
                                        titleSize='h4'
                                        color={e.bgColors}
                                        background={e.bgImages}
                                        customSize='card-agenda-size'
                                        comingsoon={e.comingsoon}
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

export default Agenda
