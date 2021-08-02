import React, {Fragment} from 'react' 
import './Modal.css'


function Modal(props) {

    
    return (
        <Fragment>
        <div className="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`modal-dialog ${props.size} modal-dialog-centered modal-dialog-scrollable`}>
                <div className="modal-content bg-transparent py-2 px-lg-4 px-2">
                    <div className="modal-body d-flex flex-column justify-content-center align-items-center">
                        <button type="button" className="btn-close bg-red text-grey" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h3 className="text-blue text-center pb-4">{props.title}</h3>
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Modal
