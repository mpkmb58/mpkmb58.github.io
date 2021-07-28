import React, {Fragment} from 'react'
import './CardSmall.css'
import logonasionalisme from '../../Assets/img/g12logo-harian.svg'
import logoterompet from '../../Assets/img/VectorLogo-harian-1.svg'
import logotoga from '../../Assets/img/Vectorlogo-harian.svg'
import logodadah from '../../Assets/img/Group 120logo-harian.svg'
import logomekanik from '../../Assets/img/Group 152logo-harian.svg'


function CardSmall(props) {

    const logo = (day) => {
        switch (day) {
            case "1":
                return logoterompet;
            case "2" : 
                return logotoga;
            case "3":
                return logomekanik;
            case "4" :
                return logonasionalisme;
            case "5":
                return logodadah; 
            
            default:
                return logonasionalisme;
        }
    }

    return (
        <Fragment>
            <div className={`card-small ${props.color} p-2`}>
                <div className="texture-bottom-big">
                    <img src={logo(props.day)} alt="" srcset="" />
                </div>
                <h4 className="fw-bold text-grey text-center">Day {props.day} - {props.title}</h4>
            </div>
        </Fragment>
    )
}

export default CardSmall
