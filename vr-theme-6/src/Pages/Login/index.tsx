import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Row from 'react-bootstrap/esm/Row';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { hidePasswordIcon, loginMockup, LogoWhite } from '../../assets/images'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <section className='login-wrapper'>
                <Container className="login-container" fluid>
                    <Row>
                        <Col lg={7} className="login-hero">
                            <div className="login-content">
                                <Link to="#" className="login-logo" title='Company'>
                                    <img src={LogoWhite} alt="Company" />
                                </Link>
                                <div className='d-none d-lg-block'>
                                    <div className="login-mockup">
                                        <img src={loginMockup} alt="Mockup" />
                                    </div>
                                </div>
                                <p className="copyright-text d-none d-lg-block">© 2021 Company. All Rights Reserved. </p>
                            </div>
                        </Col>
                        <Col lg={5} className="login-main">
                            <div className="form-wrapper">
                                <form>
                                    <h2>Welcome Back!</h2>
                                    <h5>Login into your account</h5>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Username"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Username" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingPassword" label="Password" className='password-wrapper'>
                                        <Form.Control type="password" placeholder="Password" />
                                        <button className="btn icon-wrapper">
                                            <img src={hidePasswordIcon} alt="Hide Password" />
                                        </button>
                                    </FloatingLabel>

                                    <div className="forgot-password">
                                        <Form.Check
                                            type="checkbox"
                                            id="loginCheck"
                                            label="Remember me"
                                        />
                                        <Link to="#" title='forgot password' className='custom-link'>Forgot password</Link>
                                    </div>
                                    <Link className='btn btn-primary w-100' title='Login' to='/dashboard'>Login</Link>
                                    <p className='sign-up-link'>Don’t have an account? <Link to="#" title='Sign up'>Sign up</Link></p>
                                </form>
                                <div className="other-links">
                                    <Link to="#" title='Privacy Policy' className='custom-link'>Privacy Policy</Link>
                                    <Link to="#" title='Terms and Condition' className='custom-link'>Terms and Condition</Link>
                                    <Link to="#" title='Help' className='custom-link'>Help</Link>
                                </div>
                                <div className='d-block d-lg-none'>
                                    <p className="copyright-text"> © 2021 Company. All Rights Reserved. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Login