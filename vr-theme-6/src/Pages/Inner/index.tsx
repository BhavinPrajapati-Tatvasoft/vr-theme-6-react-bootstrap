import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Header/Sidebar'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';



const Inner = () => {
    return (
        <>
            <Helmet>
                <title>Inner</title>
            </Helmet>
            <div className="wrapper">
                <Header />
                <div className="content-wrapper">
                    <Sidebar />
                    <section className="main-content inner">
                        <Container>
                            <h3 className="page-title">Users</h3>
                            <Row>
                                <Col>
                                    <div className="custom-card">
                                        <h5>One Column</h5>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Username"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Username" />
                                        </FloatingLabel>

                                        <FloatingLabel label="Dropdown">
                                            <Form.Select>
                                                {/* <option>Drop Down</option> */}
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Inner