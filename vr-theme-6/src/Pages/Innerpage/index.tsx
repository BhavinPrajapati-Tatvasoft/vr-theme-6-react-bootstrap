import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";

const Innerpage = () => {
  return (
    <>
      <Helmet>
        <title>Innerpage</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main-content">
          <h3 className="page-title">Users</h3>
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
        </div>
      </div>
    </>
  );
};

export default Innerpage;
