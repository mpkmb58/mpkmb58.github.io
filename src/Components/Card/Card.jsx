import React from 'react'
import texture from '../../Assets/img/texture.svg';
import './Card.css'
import { Fragment } from 'react';


function Card(props) {
    return (
        <Fragment>
            <a href={props.directTo}>
                <div onH className={`${props.customSize} card-hover position-relative card-rounded overflow-hidden ${props.color}`}>
                    <div class="card-title position-absolute wrapper d-flex justify-content-center align-items-center">
                        <h3 className="fw-bold text-grey m-0 d-inline-block">{props.title}</h3>
                    </div>
                    <div class="card-element wrapper d-flex justify-content-center align-items-center position-absolute">
                        {props.backgorund}
                    </div>
                    {props.texture && (
                        <Fragment>
                            <div class={`position-absolute ${props.bgPositionTop}`}>
                                <img src={texture} alt="texture" className={props.animateTop && (`anime-flip`)} width="100%" />
                            </div>
                            <div class={`position-absolute ${props.bgPositionBottom}`}>
                                <img src={texture} alt="texture" className={props.animateBottom && (`anime-flip`)} width="100%" />
                            </div>
                        </Fragment>
                    )}
                </div>
            </a>
        </Fragment>
    )
}



Card.defaultProps = {
    direcTo: './',
    color: 'bg-blue',
    customSize: 'card-wrapper-default',
    title: 'title here',
    background: '',
    texture: false,
    bgPositionTop: 'texture-top-left',
    bgPositionBottom: 'texture-bottom-left',
    animateTop: false,
    animateBottom: false
};

export default Card
