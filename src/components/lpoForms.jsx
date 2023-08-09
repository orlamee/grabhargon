import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function LpoForms() {
  return (
    <section>
      <div className="lpoforms mt-9">
        <div className="container">
          <div className="row lpofrm  mt-5 justify-content-center">
            <div className="">
              <Form classname= "justify-content-center">
                <div className="text-center my-5">
                    <h2>
                        Fill Form
                    </h2>
                </div>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control placeholder="Email Address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label> Phone Number</Form.Label>
                      <Form.Control type="number" placeholder="Phone Number" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mt-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    placeholder="Enter your message here"
                  />
                </Form.Group>
                <div className="text-center">
                  <button
                    className="btn btn-primary btn-white rounded-pill px-5 py-3 mt-5"
                    to=""
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LpoForms;
