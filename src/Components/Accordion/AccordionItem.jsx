import React from 'react'
import { AccordionStyle } from './Accordion.style'

function Accordion(props) {
    return (
        <AccordionStyle class="accordion accordion-flush" id={props.parentId}>
            {props.content}
        </AccordionStyle>
    )
}

export default Accordion
