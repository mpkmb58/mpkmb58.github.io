import React from 'react'
import texture from '../../Assets/img/texture.svg';
import './Card.css'
import { Fragment } from 'react';


function Card(props) {

    // let comingSoon = useRef(null);

    // useEffect(() => {
    //     props.comingsoon && comingSoon.setAttribute('data-bs-toggle', "modal").setAttribute('data-bs-target', '#comingsoon');
    // }, [])
    // ref={(el) => comingSoon = el}

    return (
    
        <Fragment>
            <a href={props.directTo} className="text-decoration-none " >
                <div className={`${props.customSize} shadow card-hover position-relative card-rounded overflow-hidden ${props.color}`} >
                    <div className="card-title position-absolute wrapper d-flex justify-content-center align-items-center">
                        <h3 className={`${props.titleSize} text-center fw-bold text-grey m-0 d-inline-block`}>{props.title}</h3>
                    </div>

                    {
                        props.viewSponsor ? props.viewSponsor : (<div></div>)
                    }

                    <div className='card-element wrapper d-flex justify-content-center align-items-center position-absolute'>
                        {props.background}
                    </div>

                    {props.texture && (
                        <Fragment>
                            <div className={`position-absolute ${props.bgPositionTop}`}>
                                <img src={texture} alt="texture" className={props.animateTop && (`anime-flip`)} />
                            </div>
                            <div className={`position-absolute ${props.bgPositionBottom}`}>
                                <img src={texture} alt="texture" className={props.animateBottom && (`anime-flip`)} />
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
    titleSize: 'h3',
    background: '',
    texture: false,
    bgPositionTop: 'texture-top-left',
    bgPositionBottom: 'texture-bottom-left',
    animateTop: false,
    animateBottom: false
};

export default Card
