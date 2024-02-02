import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function Question() {
    return (
        <div className='slider-bg bg-color'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="question-title">
                            <p><span>Common Question </span></p>
                            <h3>Frequently asked questions</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Accordion defaultActiveKey="0">
                            <div className="row">
                                <div className="col-md-6">
                                    <Accordion.Item eventKey="0" className='question-accordian'>
                                        <Accordion.Header className='question-head'>What kind of data can I see in FieldX?</Accordion.Header>
                                        <Accordion.Body className='question-body'>
                                            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className='question-accordian'>
                                        <Accordion.Header className='question-head'>Does Bizzy read my customers' data?</Accordion.Header>
                                        <Accordion.Body className='question-body'>
                                            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className='question-accordian'>
                                        <Accordion.Header className='question-head'>What's your refund and cancellation policy?</Accordion.Header>
                                        <Accordion.Body className='question-body'>
                                            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-md-6">
                                    <Accordion.Item eventKey="3" className='question-accordian'>
                                        <Accordion.Header className='question-head'>How do you take payments?</Accordion.Header>
                                        <Accordion.Body className='question-body'>
                                            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4" className='question-accordian'>
                                        <Accordion.Header className='question-head'>Can I also track website analytics on fieldX?</Accordion.Header>
                                        <Accordion.Body className='question-body'>
                                            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5" className='question-accordian'>
                                        <Accordion.Header className='question-head'>What makes Bizzy different from other analytics tools?</Accordion.Header>
                                        <Accordion.Body className='question-body'>
                                            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                            </div>

                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}
