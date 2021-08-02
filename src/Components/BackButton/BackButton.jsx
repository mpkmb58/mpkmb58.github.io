import React, {Fragment} from 'react'
import styled from 'styled-components'

const BackBtn = styled.button`
    background-color: #343F56;
    padding: 0.65rem 1.5rem;
    color : #F8F8F8;
    font-weight: 600;
    border-radius: 0.75rem;
    border-style: none;
    transition: transform 0.1s ease-in-out;

    &:hover {
        transform: scale(1.03);
        transition: transform 0.1s ease-in-out;
    }
`

function BackButton(props) {
    return (
        <Fragment>
            <a href={props.prevPage}>
                <BackBtn href className="back-btn">Kembali</BackBtn>
            </a>
        </Fragment>
    )
}

export default BackButton
