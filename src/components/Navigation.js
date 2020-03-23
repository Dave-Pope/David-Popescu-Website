import React from 'react';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const Navigation = () => {
    return (
        <div className='Navigation'>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='0'>
                        <p>
                            <img src={require('../assets/icons/laptop.png')} alt='' />&nbsp;&nbsp;&nbsp;FREELANCING
                        </p>
                        <span>
                            <img src={require('../assets/icons/laptop.png')} alt='' />
                        </span>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                            <ul>
                                <li>
                                    <a href='#'>My work</a>
                                </li>

                                <li>
                                    <a href='#'>Parteners</a>
                                </li>

                                <li>
                                    <a href='#'>Contact</a>
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>

                    <Accordion.Toggle as={Card.Header} eventKey='2'>
                        <p>
                            <img src={require('../assets/icons/resume.png')} alt='' />&nbsp;&nbsp;&nbsp;RESUME
                        </p>
                        <span>
                            <img src={require('../assets/icons/resume.png')} alt='' />
                        </span>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='2'>
                        <Card.Body>
                            <ul>
                                <li>
                                    <a href='#'>CV</a>
                                </li>

                                <li>
                                    <a href='#'>Experience</a>
                                </li>

                                <li>
                                    <a href='#'>Resources</a>
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>

                    <Accordion.Toggle as={Card.Header} eventKey='1'>
                        <p>
                            <img src={require('../assets/icons/chart.png')} alt='' />&nbsp;&nbsp;&nbsp;ACTIVITY
                        </p>
                        <span>
                            <img src={require('../assets/icons/chart.png')} alt='' />
                        </span>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            <ul>
                                <li>
                                    <a href='#'>GitHub</a>
                                </li>

                                <li>
                                    <a href='#'>LinkedIn</a>
                                </li>

                                <li>
                                    <a href='#'>Instagram</a>
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default Navigation;
