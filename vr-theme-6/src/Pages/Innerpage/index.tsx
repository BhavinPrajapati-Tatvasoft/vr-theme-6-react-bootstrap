import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  alertErrorIcon,
  alertInfoIcon,
  alertSuccessIcon,
  alertWarningIcon,
  hidePasswordIcon,
  uploadIcon,
} from "../../assets/images";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/esm/Tabs";
import Tab from 'react-bootstrap/Tab';
import { useEffect } from 'react';
import gsap from 'gsap';


const Innerpage = () => {
  //GSAP Animation
  useEffect(() => {
    let pageText = gsap.timeline();
    pageText.fromTo(".page-title", { y: "-40px", opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    pageText.fromTo(".inner h5", { y: "20px", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3 });
  });
  return (
    <>
      <Helmet>
        <title>Innerpage</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main-content inner">
          <h3 className="page-title">Users</h3>
          <div className="custom-card">
            {/* -------- first column start ---------  */}
            <h5>One Column</h5>
            <FloatingLabel
              controlId="floatingInput"
              label="Username"

            >
              <Form.Control type="text" placeholder="Username" />
            </FloatingLabel>

            <FloatingLabel label="Dropdown" >
              <Form.Select>
                {/* <option>Drop Down</option> */}
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel
              controlId="multilineInput"
              label="Multiple line"
              className="multiline-block"
            >
              <Form.Control
                type="text"
                placeholder="Multiple line"
                as="textarea"
                rows={4}
              />
            </FloatingLabel>
            {/* -------- first column end ---------  */}

            {/* -------- second column start ---------  */}
            <h5>Two Column</h5>
            <Row className="custom-row">
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username"

                >
                  <Form.Control type="text" placeholder="Username" />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Password"
                  className="password-wrapper "
                >
                  <Form.Control type="password" placeholder="Password" />
                  <button className="btn icon-wrapper">
                    <img src={hidePasswordIcon} alt="Hide Password" />
                  </button>
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="innerName"
                  label="Name"

                >
                  <Form.Control type="text" placeholder="Name" />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="innerError"
                  label="Error"

                >
                  <Form.Control
                    type="text"
                    placeholder="Error"
                    value="Web Designer"
                    className="is-invalid"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            {/* -------- second column end ---------  */}

            {/* -------- three column start ---------  */}
            <h5>Three Column</h5>
            <Row>
              <Col lg={4} md={6}>
                <FloatingLabel
                  controlId="floatingFocus"
                  label="Focus"

                >
                  <Form.Control type="text" placeholder="Focus" />
                </FloatingLabel>
              </Col>

              <Col lg={4} md={6}>
                <FloatingLabel
                  controlId="disabled"
                  label="Disabled"

                >
                  <Form.Control
                    type="text"
                    placeholder="Disabled"
                    value="John Doe"
                    disabled
                  />
                </FloatingLabel>
              </Col>

              <Col lg={4} md={6}>
                <FloatingLabel label="Dropdown" >
                  <Form.Select>
                    {/* <option>Drop Down</option> */}
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            {/* -------- three column end ---------  */}

            {/* -------- four column start ---------  */}
            <h5>Four Column</h5>
            <Row>
              <Col lg={3} md={6}>
                <FloatingLabel
                  controlId="floatingInputSecond"
                  label="Username"

                >
                  <Form.Control type="text" placeholder="Username" />
                </FloatingLabel>
              </Col>

              <Col lg={3} md={6}>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Password"
                  className="password-wrapper "
                >
                  <Form.Control type="password" placeholder="Password" />
                  <button className="btn icon-wrapper">
                    <img src={hidePasswordIcon} alt="Hide Password" />
                  </button>
                </FloatingLabel>
              </Col>

              <Col lg={3} md={6}>
                <FloatingLabel label="Dropdown" >
                  <Form.Select>
                    {/* <option>Drop Down</option> */}
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>

              <Col lg={3} md={6}>
                <FloatingLabel
                  controlId="innerErrorSecond"
                  label="Error"

                >
                  <Form.Control
                    type="text"
                    placeholder="Error"
                    value="Web Designer"
                    className="is-invalid"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            {/* -------- four column end ---------  */}

            {/* -------- other design start ---------  */}
            <div className="other-design">
              <h5>Other Design elements</h5>
              <h6>File Upload</h6>
              <div className="file-upload-main">
                <input type="file" name="Upload" id="upload" placeholder="Upload" />
                <div className="file-content">
                  <img src={uploadIcon} alt="Upload Icon" />
                  <h4>Upload</h4>
                </div>
                <p>No item Selected</p>
              </div>

              <h6>Check Box</h6>
              <div className="check-group">
                <Form.Check
                  inline
                  label="Selected"
                  name="group1"
                  type={"checkbox"}
                  id={`inline-check-1`}
                />
                <Form.Check
                  inline
                  label="Not Yet Selected"
                  name="group1"
                  type={"checkbox"}
                  id={`inline-check-2`}
                />
              </div>

              <h6>Radio Button</h6>
              <div className="check-group">
                <Form.Check
                  inline
                  label="Selected"
                  name="group1"
                  type={"radio"}
                  id={`inline-radio-1`}
                />
                <Form.Check
                  inline
                  label="Not Yet Selected"
                  name="group1"
                  type={"radio"}
                  id={`inline-radio-2`}
                  checked
                />
              </div>

              <h6>Snack Bar</h6>
              <Row className="snackbar-group">
                <Col md={6}>
                  <Alert variant="danger" dismissible>
                    <img src={alertErrorIcon} className="alert-icon" alt="Error Icon" />
                    <p>This is an error Message</p>
                  </Alert>
                </Col>
                <Col md={6}>
                  <Alert variant="info" dismissible>
                    <img src={alertInfoIcon} className="alert-icon" alt="Info Icon" />
                    <p>This is an information message!</p>
                  </Alert>
                </Col>
                <Col md={6}>
                  <Alert variant="warning" dismissible>
                    <img src={alertWarningIcon} className="alert-icon" alt="Warning Icon" />
                    <p>This is a warning message!</p>
                  </Alert>
                </Col>
                <Col md={6}>
                  <Alert variant="success" dismissible>
                    <img src={alertSuccessIcon} className="alert-icon" alt="Success Icon" />
                    <p>This is a Success message!</p>
                  </Alert>
                </Col>
              </Row>

              <h6>CTA</h6>
              <div className="btn-groups">
                <Button variant="primary">Primary</Button>
                <Button variant="outline-primary">Secondary</Button>
              </div>
            </div>
            {/* -------- other design end ---------  */}


            {/* -------- Tabs start ---------  */}
            <div className="tab-container">
              <h5>Tabs</h5>
              <Tabs
                defaultActiveKey="tab1"
                id="tabExample"
              >
                <Tab eventKey="tab1" title="Tab 1">
                  It is a long established fact that a reader will be distracted by the readable content of
                  a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum
                  as their default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy.
                </Tab>
                <Tab eventKey="tab2" title="Tab 2">
                  Tab Content 2
                </Tab>
                <Tab eventKey="tab3" title="Tab 3">
                  It is a long established fact that a reader will be distracted by the readable content of
                  a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing
                </Tab>
                <Tab eventKey="tab4" title="Tab 4">
                  It is a long established fact that a reader will be distracted by the readable content of
                  a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing
                </Tab>
              </Tabs>
            </div>
            {/* -------- Tabs send ---------  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Innerpage;
