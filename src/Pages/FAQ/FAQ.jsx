import React from 'react'
import Magazine from '../../Components/Magazine/Magazine'
import { AboutStyle } from '../About/About.style'
import styled from 'styled-components'
import Accordion from '../../Components/Accordion/AccordionItem'
import './FAQ.css'
import AccordionItem from '../../Components/Accordion/AccordionItems'
import { Fragment } from 'react'

function FAQ() {

const AccordionWrap = styled.div`
max-width: 100%;
max-height: 100%;
overflow: auto;
`

const contentView = [
{
key: 0,
link: 'UMUM',
isi: <div>
    <h2 className="fw-bold text-center mb-4">UMUM</h2>
    <AccordionWrap>
        <Accordion
            parentId = "ListPertanyaanUmum"
            content = {
                <Fragment>
                    <AccordionItem
                        parentId="ListPertanyaanUmum"
                        id = "One"
                        question = "1. Kapan MPKMB dilaksanakan?"
                        answer = "Media yang digunakan dalam MPKMB dapat berupa Zoom meeting, Google Meet, Youtube, dan LINE (Line Square), Instagram, dan Twitter."
                    />
                    <AccordionItem
                        parentId="ListPertanyaanUmum"
                        id = "Two"
                        question = "2. Kapan MPKMB dilaksanakan?"
                        answer = "Media yang digunakan dalam MPKMB dapat berupa Zoom meeting, Google Meet, Youtube, dan LINE (Line Square), Instagram, dan Twitter."
                    />
                    

                </Fragment>
            }
        />
    </AccordionWrap>
</div>,
linkStatus: true
},
]

return (
// className="position-relative z-index-2 d-flex align-items-center justify-content-center"
<section className="d-flex justify-content-center align-items-center">
    <Magazine contentWrapper={contentView} />
</section>
)
}

export default FAQ