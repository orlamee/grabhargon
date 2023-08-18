import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function LpoForms() {
  return (
    <section>
      <div className="lpoforms mt-4">
        <div className="col">
          <div className="row  justify-content-center mt-5 lpofrm">
            <div className="col-sm-9">
              <Form>
                <div className="text-center my-5">
                    <h2>
                        Fill Form
                    </h2>
                </div>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>First  Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>Email</Form.Label>
                      <Form.Control placeholder="Enter email address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label> Phone Number</Form.Label>
                      <Form.Control type="" placeholder=" Enter phone number" />
                    </Form.Group>
                  </Col>
                </Row>
                
                <div className="text-center mt-3">
                  <button
                    className="btn  rounded-pill px-5 py-3 mt-5"
                    style={{ background: "#ffffff ", color: "#23A323 " }}
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
