import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";


function ComplainBox() {
  return (
    <section className="complain" id="">
     <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
           <h5>
           Did not find an aswer to your complaints? 
           </h5>
            <h6 className="mt-4">
              Please take a moment to fill out the form below, and our support
              team will be in touch with more information on the product.
            </h6>
          </div>
        </div>
        <div className="row mt-5 justify-content-center black-info">
          <div className="col-sm-3 text-center">
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Personal
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Business
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex="0"
            >
              <div className="row mt-5 justify-content-center">
                <div className="col-sm-10">
                  <Form>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control type="text"  placeholder="First Name"/>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control type="tel"  placeholder="Mobile Number" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control type="email"   placeholder="Email Address"/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="my-4">
                      <Form.Label></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={10}
                        placeholder="Type your complaints"
                      />
                    </Form.Group>
                    <div className="text-center">
                      <button
                        className="btn rounded-pill px-5 py-3 mt-5"
                        style={{ background: "#23A323 ", color:"#ffffff"}}
                        to=""
                      
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex="0"
            >
              <div className="row mt-5 justify-content-center">
                <div className="col-sm-10">
                <Form>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control type="text"  placeholder="First Name"/>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control type="tel"  placeholder="Mobile Number" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control type="email"   placeholder="Email Address"/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="my-4">
                      <Form.Label></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={10}
                        placeholder="Type your complaints"
                      />
                    </Form.Group>
                    <div className="text-center">
                      <button
                        className="btn rounded-pill px-5 py-3 mt-5"
                        style={{ background: "#23A323 ", color:"#ffffff"}}
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
        </div>
      </div>
    </section>
  );
}

export default ComplainBox;
