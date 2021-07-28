import React from 'react'
import Card from '../../Components/Card/Card'

function Event() {
    return (
        <section>
            <div class="container mt-5 pt-5">
                <div class="row mt-5">
                    <div class="col-md-4">
                        <Card
                            directTo="/About"
                            title="About MPKMB"
                            color="bg-blue"
                            backgorund={logoLogo}
                            texture={true}
                            bgPositionTop='texture-top-left'
                            bgPositionBottom='texture-bottom-right'
                            animateBottom={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Event
