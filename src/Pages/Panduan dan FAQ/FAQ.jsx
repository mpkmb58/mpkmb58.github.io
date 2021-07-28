import React, { Fragment } from 'react'
import AboutComponent from '../../Components/Magazine/Magazine'
import Footer from '../../Components/Footer/Footer'
import { ContentWrapper, DownloadButton, PDFBox, QuestionWrapper } from './Panduan.style'

function FAQ() {
    return (
        <Fragment>
            <section className="bg-blur pt-5">
                <AboutComponent defaultHash="UMUM" defaultTitle="UMUM" default={
                    <ContentWrapper>
                        <QuestionWrapper>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                            demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
                                            body.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                            demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion
                                            body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                                            aria-controls="flush-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                            demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion
                                            body. Nothing more exciting happening here in terms of content, but just filling up the
                                            space to make it look, at least at first glance, a bit more representative of how this would
                                            look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </QuestionWrapper>
                    </ContentWrapper>

                }

                    content1Hash="UMUM"
                    content1Title="UMUM"
                    content1=
                    {
                        <ContentWrapper>
                            <QuestionWrapper>
                                <div className="question-wrapper">
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Accordion Item #1
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                                data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                                    demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
                                                    body.</div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Accordion Item #2
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                                data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                                    demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion
                                                    body. Let's imagine this being filled with some actual content.</div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                                    aria-controls="flush-collapseThree">
                                                    Accordion Item #3
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                                    demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion
                                                    body. Nothing more exciting happening here in terms of content, but just filling up the
                                                    space to make it look, at least at first glance, a bit more representative of how this would
                                                    look in a real-world application.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </QuestionWrapper>
                        </ContentWrapper>
                    }

                    content2Hash="SYNCHRONUS"
                    content2Title="SYNCHRONUS"
                    content2=
                    {<div className="d-flex flex-column justify-content-center align-items-center">
                        <PDFBox src="https://drive.google.com/file/d/1-RZBgCa5csmfwGGEMSuMje2JkFSXV9c0/preview"
                            allow="autoplay" />
                        <div className="d-flex justify-content-center align-items-center">
                            <DownloadButton className="download-button px-3 py-1">Download PDF</DownloadButton>
                        </div>
                    </div>
                    }

                    content3Hash="ASYNCHRONUS"
                    content3Title="ASYNCHRONUS"
                    content3=
                    {
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <PDFBox src="https://drive.google.com/file/d/1wW4NGT8-ZS2LhZhZlMHddA26oCU5OoIy/preview" width="640"
                                height="480" allow="autoplay" />
                            <div className="d-flex justify-content-center align-items-center">
                                <DownloadButton href="" className="download-button mx-2 px-3 py-1">Course IPB</DownloadButton>
                                <DownloadButton className="download-button mx-2 px-3 py-1">Download PDF</DownloadButton>
                            </div>
                        </div>
                    }

                    content4Hash="PENUGASAN"
                    content4Title="PENUGASAN"
                    content4=
                    {
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <PDFBox />
                            <div className="d-flex justify-content-center align-items-center">
                                <DownloadButton className="download-button px-3 py-1">Download</DownloadButton>
                            </div>
                        </div>
                    }
                />
            </section>
            <Footer />
        </Fragment>
    )
}

export default FAQ