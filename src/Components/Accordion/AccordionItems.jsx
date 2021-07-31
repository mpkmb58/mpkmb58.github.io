import React from 'react'
import { AccordionHeadStyle, AccordionItemStyle } from './Accordion.style'
import './Accordion.css'


function AccordionItem(props) {
return (
<AccordionItemStyle class="accordion-item">
        <AccordionHeadStyle class="accordion-header bg-grey text-blue" id={`flush-heading${props.id}`}>
            <button class="accordion-button collapsed bg-grey text-blue" type="button" data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${props.id}`} aria-expanded="false" aria-controls={`flush-collapse${props.id}`}>
                <h5 className="text-blue fw-bolder mb-0">{props.question}</h5>
            </button>
        </AccordionHeadStyle>
    <div id={`flush-collapse${props.id}`} class="accordion-collapse collapse bg-grey" aria-labelledby={`flush-heading${props.id}`}
        data-bs-parent={`#${props.parentId}`}>
        <div class="accordion-body">
            {props.answer}
        </div>
    </div>
</AccordionItemStyle>
)
}

export default AccordionItem