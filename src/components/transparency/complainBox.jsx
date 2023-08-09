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
            <h1 className="mt-5"> Did not find an answer to your complaints? </h1>
            <p className="mt-3">
              Please take a moment to fill out the form below, and our support
              team will be in touch with more information on the product.
            </p>
          </div>
        </div>
        <div className="row mt-9 justify-content-center">
          <div className="col-sm-3 text-center">
            <ul className="nav nav-pill nav-fill" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active "
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
                  className="nav-link "
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
                          <Form.Control type="text"  placeholder="Last Name"/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control  
                        
                        placeholder="Email Address"/>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control 
                        placeholder="Company Name " />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="my-3">
                      <Form.Label></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={15}
                        placeholder="Type your Complaints"
                      />
                    </Form.Group>
                    <div className="text-center">
                      <button
                        className="btn btn-primary btn-success rounded-pill px-5 py-3 mt-5"
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
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane"
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
                          <Form.Control type="text"  placeholder="Last Name"/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control  
                        
                        placeholder="Email Address"/>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label></Form.Label>
                          <Form.Control 
                        placeholder="Company Name " />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="my-3">
                      <Form.Label></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={15}
                        placeholder="Type your Complaints"
                      />
                    </Form.Group>
                    <div className="text-center">
                      <button
                        className="btn btn-primary btn-success rounded-pill px-5 py-3 mt-5"
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
