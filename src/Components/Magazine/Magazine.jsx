import React, { useState} from 'react'
import './Magazine.css'
import styled from 'styled-components'


function Magazine(props) {

    let [content, setContent] = useState(props.contentWrapper[0].isi)
    
    

    const PageLink = styled.button`
        padding : 0.5rem 1rem;
        border-style: none;
        margin: 0.5rem 0;
        border-radius: 30px;
        background-color: #F8F8F8;
        color : #343F56;
    `
    
    const PageLinkActive = styled(PageLink)`
        background-color: #F8F8F8;
        color : #343F56;
        ${({active}) => 
            active && `
                background-color: #343F56;
                color : #F8F8F8; 
            `
        }
    `


    // membuat fungsi untuk mengubah page
    function ToggleGroup() {
        let [active, setActive] = useState(props.contentWrapper[0])
        return <div className="col-lg-2 bg-grey about-nav-wrapper p-5 d-flex flex-row flex-lg-column justify-content-center justify-content-lg-start align-items-center overflow-hidden">
            {props.contentWrapper.map(e => (
                <PageLinkActive
                    active = {active === e}
                    onClick = {() => {
                        setActive(e)
                    }}
                >
                    <h5 className="m-0">{e.link}</h5>
                </PageLinkActive>
            ))}
        </div>
    }


    return (
        <section className="py-5 position-relative z-index-2">
            <div className="container pt-5 ">
                <div className="row mb-4 justify-content-between">
                    {/* This is pagination tab */}
                    <ToggleGroup/> 
                    {/* This is the content of a magazine */}
                    <div className="content col-lg-9 bg-grey about-nav-wrapper p-5 my-4 my-lg-0">
                        {content}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Magazine
