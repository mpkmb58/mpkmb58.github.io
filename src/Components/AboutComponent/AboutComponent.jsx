import React, { useState } from 'react'
import './AboutComponent.css'
import $ from 'jquery';
import logo from '../../Assets/img/logo_mahardika_cakrabinaya 1.svg';
import logoKuning from '../../Assets/img/Logo_kuning.svg';
import logoUngu from '../../Assets/img/Logo_ungu.svg';
import logoMerah from '../../Assets/img/Logo_merah.svg';
import logoHijau from '../../Assets/img/Logo_hijau.svg';
import logoBiru from '../../Assets/img/Logo_biru.svg';


function AboutComponent(props) {
    let [head, setHead] = useState(props.defaultTitle)
    let [content, setcontent] = useState(props.default)

    const showContent1 = (title1, content1) => {
        head = title1;
        content = content1;
        setcontent(content);
        setHead(head);
    }

    const showContent2 = (title2, content2) => {
        head = title2;
        content = content2;
        setcontent(content)
        setHead(head);
    }

    const showContent3 = (title3, content3) => {
        head = title3;
        content =  content3;
        setcontent(content);
        setHead(head);
    }

    const showContent4 = (title4, content4) => {
        head = title4;
        content = content4;
        setcontent(content);
        setHead(head);
    }

    $('.hash').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('btn-blue').siblings().removeClass('btn-blue')
    })

    return (
        <div>
            <div className="container pt-5">
                {/* <div className="row mb-4">
                    <div className="col text-end"><h5 className="m-0">Beranda/About MPKMB</h5></div>
                </div> */}
                <div className="row justify-content-between">
                    <div class="hashKey about-nav-wrapper col-lg-2 py-5 d-flex flex-lg-column justify-content-lg-start justify-content-center align-items-center bg-grey">
                        <div onClick={() => showContent1(props.content1Title, props.content1)} className='shadow-md hash btn-blue btn rounded-pill my-4 py-1'><h5 className="m-0">{props.content1Hash}</h5></div>
                        <div onClick={() => showContent2(props.content2Title, props.content2)} className='shadow-md hash btn rounded-pill my-4 py-1'><h5 className="m-0"> {props.content2Hash}</h5></div>
                        <div onClick={() => showContent3(props.content3Title, props.content3)} className='shadow-md hash btn rounded-pill my-4 py-1'><h5 className="m-0">{props.content3Hash}</h5></div>
                        <div onClick={() => showContent4(props.content4Title, props.content4)} className='shadow-md hash btn rounded-pill my-4 py-1'><h5 className="m-0">{props.content4Hash}</h5></div>
                    </div>
                    <div className="hashContent col-lg-9 bg-grey about-nav-wrapper d-flex justify-content-center flex-column align-items-center p-5 my-4 my-lg-0">
                        <h2 className="text-center"><b>{head}</b> </h2>
                        <div className="content my-4 d-flex justify-content-center overflow-scroll-y">{content}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutComponent
