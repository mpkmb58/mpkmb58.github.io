import React, { Fragment } from 'react'

function Breadcumb(props) {
    switch (props.depth) {
        case "one":
            return (
                <div>
                    
                </div>
            )

        case "two":
            return (
                <Fragment>
                    <nav aria-label="breadcrumb" className="d-flex align-items-center">
                        <ol className="breadcrumb">
                            <li class="breadcrumb-item"><a href={props.prevPage}>{props.prev}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{props.current}</li>
                        </ol>
                    </nav>
                </Fragment>
            )

        case "three":
            return (
                <Fragment>
                    <nav aria-label="breadcrumb" className="d-flex align-items-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href={props.prevPrevPage}>{props.prevPrev}</a></li>
                            <li className="breadcrumb-item"><a href={props.prevPage}>{props.prev}</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{props.current}</li>
                        </ol>
                    </nav>
                </Fragment>
            )
    
        default:
            break;
    }
    
}

export default Breadcumb
