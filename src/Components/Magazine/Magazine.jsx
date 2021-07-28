import React, { useState } from 'react'
import './Magazine.css'


function Magazine(props) {


    let [content, setContent] = useState(props.contentWrapper[0].isi);


    return (
        <section className="py-5 position-relative z-index-2">
            <div className="container pt-5 ">
                <div className="row mb-4 justify-content-between">
                    <div class="col-lg-2 bg-grey about-nav-wrapper p-5 d-flex flex-row flex-lg-column justify-content-center justify-content-lg-start align-items-center overflow-hidden">
                        {
                            props.contentWrapper.map(e =>
                                <div onClick={() => setContent(props.contentWrapper[e.key].isi)}
                                    className='shadow-md hash btn rounded-pill my-2 py-1'>
                                    <h5 className="m-0">{e.link}</h5>
                                </div>
                            )
                        }
                    </div>
                    <div className="content col-lg-9 bg-grey about-nav-wrapper p-5 my-4 my-lg-0">
                        {content}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Magazine
