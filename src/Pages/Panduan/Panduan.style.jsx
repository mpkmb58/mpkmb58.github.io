import styled from 'styled-components'

export const DownloadButton = styled.button`
    align-items: center;
    justify-content: center;
    border-style: none;
    transition: transform 0.5s ease-in-out;
    background-color: #343F56;
    color : #f8f8f8;
    border-radius: 10px;
    font-weight: 600;

    &:hover {
        border : 1.75px solid #343F56;
        background-color: transparent;
        color : #343F56;
        transform: scale(1.05);
        transition: transform 0.5s ease-in-out;
    }
` 

export const PDFBox = styled.iframe`
    align-items: center;
    justify-content: center;
    background-color: #343F56;
    width : 40rem;
    aspect-ratio : 16/9;
    margin-bottom: 1.5rem;
`

export const ContentWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`