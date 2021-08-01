import React from 'react'
import { AccordionHeadStyle, AccordionItemStyle, Question } from './Accordion.style'
import './Accordion.css'


function AccordionItem(props) {
return (
<AccordionItemStyle>
        <AccordionHeadStyle className="accordion-header bg-grey text-blue" id={`flush-heading${props.id}`}>
            <button class="accordion-button collapsed bg-grey text-blue" type="button" data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${props.id}`} aria-expanded="false" aria-controls={`flush-collapse${props.id}`}>
                <Question className="text-blue mb-0">{props.question}</Question>
            </button>
        </AccordionHeadStyle>
    <div id={`flush-collapse${props.id}`} className="accordion-collapse collapse bg-grey" aria-labelledby={`flush-heading${props.id}`}
        data-bs-parent={`#${props.parentId}`}>
        <div className="accordion-body">
            {props.answer}
        </div>
    </div>
</AccordionItemStyle>
)
}

export default AccordionItem