import React from 'react'
import texture from '../../Assets/img/texture.svg';
import './Card.css'
import { Fragment } from 'react';


function Card(props) {
    return (
        <Fragment>
            <a href={props.directTo}>
                <div onH className={`card-wrapper position-relative  rounded overflow-hidden ${props.color}`}>
                    <div class="card-title position-absolute wrapper d-flex justify-content-center align-items-center">
                        <h2 className="fw-bold text-grey">{props.title}</h2>
                    </div>
                    <div class="card-element wrapper d-flex justify-content-center align-items-center position-absolute">
                        {props.backgorund}
                    </div>
                    <div class="texture-top-left position-absolute ">
                        <img src={texture} alt="texture" className="anime-flip" width="100%" />
                    </div>
                    <div class="texture-bottom-right position-absolute">
                        <img src={texture} alt="texture" className="anime-flip" width="100%" />
                    </div>
                </div>
            </a>
        </Fragment>
    )
}
Card.defaultProps = {
    direcTo: './',
    color: 'bg-blue',
    title: 'title here',
    background: '',
};
export default Card
