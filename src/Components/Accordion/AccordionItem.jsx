import React from 'react'

function Accordion(props) {
    return (
        <div class="accordion accordion-flush" id={props.parentId}>
            {props.content}
        </div>
    )
}

export default Accordion
