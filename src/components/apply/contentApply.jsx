import { Button, Col, Form, Row } from "react-bootstrap";
import full from "../../assets/apply-icon.svg";
import hurray from "../../assets/hurray.svg";
import got from "../../assets/goto.svg";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const fileTypes = ["DOC", "DOCX", "PDF"];

function Submit(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="career-modal"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <img src={hurray} alt="hurray" className="img-fluid" />
            <h2 className="my-4">
              Your application has been submitted successfully
            </h2>
            <p>
              If your qualifications match our requirements and you are selected
              for further consideration, we
              <br />
              will reach out to you directly using the contact information
              provided in your application.
            </p>
            <Link to="/career">
              <img src={got} alt="go back" className="img-fluid mt-4" />
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function ContentApply() {
  const [modalShow, setModalShow] = React.useState(false);
  const [setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <section className="content-apply pb-0">
      <div className="container">
        <div className="row">
          <div className="col px-0">
            <img src={full} alt="full" className="img-fluid apply-icon" />
            <h5>You think you’re a great fit?</h5>
            <div className="sub-card">
              <div className="row justify-content-between">
                <div className="col-sm-6 mb-3 mt-3">
                  <h3>UI/UX Designer intern</h3>
                </div>
                <div className="col-sm-3">
                  <div>
                    <button
                      class="btn rounded-pill px-5 py-3"
                      style={{ color: " #23A323 ", background: "#F2F2F2" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      View Job Details
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Job Details
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div className="justify-content-center">
                              <div className="col">
                                <div className="navi mt-3 mb-5">
                                  <h4
                                    classname="my-4"
                                    style={{ color: " #228B22" }}
                                  >
                                    {" "}
                                    Description
                                  </h4>
                                  <h6>
                                    We are looking for a PRODUCT DESIGNER to
                                    turn our software into easy-to-use products
                                    for our organization. PRODUCT DESIGNER
                                    responsibilities include gathering user
                                    requirements, designing graphic elements and
                                    building navigation components{" "}
                                  </h6>
                                  <h6>
                                    To be successful in this role, you should
                                    have experience with design software and
                                    wireframe tools. If you also have a
                                    portfolio of professional design projects
                                    that includes work with web/mobile
                                    applications, we’d like to meet you.
                                    Ultimately, you’ll create both functional
                                    and appealing features that address our
                                    clients’ needs and help us grow our customer
                                    base.
                                  </h6>
                                </div>
                                <div className="navi mb-5">
                                  <h4
                                    classname="my-4"
                                    style={{ color: " #228B22" }}
                                  >
                                    {" "}
                                    Responsiblities
                                  </h4>
                                  <h6>
                                    <ul>
                                      <li>
                                        {" "}
                                        Gather and evaluate user requirements in
                                        collaboration with product managers and
                                        engineers
                                      </li>
                                      <li>
                                        Illustrate design ideas using
                                        storyboards, process flows and sitemaps
                                      </li>
                                      <li>
                                        {" "}
                                        Design Gather and evaluate user
                                        requirements in collaboration with
                                        product managers and engineers
                                      </li>
                                      <li>
                                        {" "}
                                        Illustrate design graphic user interface
                                        elements, like menus, tabs and widgets
                                      </li>
                                      <li>
                                        {" "}
                                        Build page navigation buttons and search
                                        fields
                                      </li>
                                      <li>
                                        Develop UI mockups and prototypes that
                                        clearly illustrate how sites function
                                        and look like
                                      </li>
                                      <li>
                                        {" "}
                                        Create original graphic designs (e.g.
                                        images, sketches and tables)
                                      </li>
                                      <li>
                                        {" "}
                                        Identify and troubleshoot UX problems
                                        (e.g. responsiveness)
                                      </li>
                                      <li>
                                        Conduct layout adjustments based on user
                                        feedback
                                      </li>
                                      <li>
                                        Adhere to style standards on fonts,
                                        colors and images
                                      </li>
                                      <li>
                                        Gather specific requirements and suggest
                                        solutions
                                      </li>
                                      <li>
                                        Write unit and UI tests to identify
                                        malfunctions
                                      </li>
                                      <li>
                                        Liaise with Product development team to
                                        plan new features
                                      </li>
                                      <li>
                                        Ensure new and legacy applications meet
                                        quality standard
                                      </li>
                                      <li>
                                        Write high quality source code to
                                        program complete applications within
                                        deadlines
                                      </li>
                                      <li>
                                        Liaise with Product development team to
                                        plan new features
                                      </li>
                                      <li>
                                        Ensure new and legacy applications meet
                                        quality standard
                                      </li>
                                      <li>
                                        Write high quality source code to
                                        program complete applications within
                                        deadlines
                                      </li>
                                      <li>
                                        Evaluate existing applications to
                                        reprogram, update and add new features
                                        Design mobile-based features
                                      </li>
                                      <li>
                                        Ensure high quality graphic standards
                                        and brand consistency Logo Designs
                                      </li>
                                      <li>
                                        Stay up-to-date on emerging technologies
                                      </li>
                                    </ul>
                                  </h6>
                                </div>
                                <div className="navi mb-5">
                                  <h4 className="my-4" style={{ color: " #228B22" }}>
                                    {" "}
                                    Requirements and skills
                                  </h4>
                                  <h6>
                                    <ul>
                                      <li>
                                        Proven work experience as UI/UX
                                        developer{" "}
                                      </li>
                                      <li>
                                        In-depth understanding of the entire web
                                        development process (design, development
                                        and deployment){" "}
                                      </li>
                                      <li>
                                        {" "}
                                        Demonstrable portfolio of released
                                        applications on the App store or the
                                        Android market{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        Excellent analytical skills with a good
                                        problem-solving attitude
                                      </li>
                                      <li>
                                        {" "}
                                        Ability to perform in a team environment
                                        Portfolio of design projects{" "}
                                      </li>{" "}
                                      <li>
                                        Knowledge of wireframe tools (e.g.
                                        Wireframe.cc and InVision){" "}
                                      </li>
                                      <li>
                                        Up-to-date knowledge of design software
                                        like Adobe Illustrator, Figma and
                                        Photoshop{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        Team spirit; strong communication skills
                                        to collaborate with various stakeholders{" "}
                                      </li>
                                      <li>Good time-management skills </li>
                                      <li>
                                        {" "}
                                        An ability to perform well in a
                                        fast-paced environment{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        BSc degree in Computer Science or
                                        relevant field At least 3-5years
                                        Experience in relevant role Participate
                                        in the entire application lifecycle{" "}
                                      </li>
                                    </ul>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p>Apply for this job</p>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col">
            <Form>
              <Row className="mb-5">
                <Col>
                  <Form.Label>
                    First name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control placeholder="Enter first name" />
                </Col>
                <Col>
                  <Form.Label>
                    Last name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control placeholder="Enter last name" />
                </Col>
              </Row>
              <Row className="mb-5">
                <Col>
                  <Form.Label>
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                  />
                </Col>
                <Col>
                  <Form.Label>
                    Phone <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone number" />
                </Col>
              </Row>
              <Form.Group className="mb-5">
                <Form.Label>Website/portfolio link</Form.Label>
                <Form.Control type="url" placeholder="Website/portfolio link" />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Linkedin Profile</Form.Label>
                <Form.Control type="url" placeholder="Linkedin profile link" />
              </Form.Group>
              <Form.Group className="mb-5">
                <div>
                  <Form.Label>
                    Work type <span className="text-danger">*</span>
                  </Form.Label>
                </div>
                <div className="form-check form-check-inline me-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    On-site
                  </label>
                </div>
                <div className="form-check form-check-inline me-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Hybrid
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Remote
                  </label>
                </div>
              </Form.Group>
              <Form.Group className="mb-5">
                <div>
                  <Form.Label>
                    Available to Start Immediately{" "}
                    <span className="text-danger">*</span>
                  </Form.Label>
                </div>
                <div className="form-check form-check-inline me-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOption"
                    id="inlineRadio4"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio4">
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline me-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOption"
                    id="inlineRadio5"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio5">
                    No
                  </label>
                </div>
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>
                  Upload CV <span className="text-danger">*</span>
                </Form.Label>
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  label="Drop your resume here or browse"
                />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Upload Cover Letter</Form.Label>
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  label="Drop your resume here or browse"
                />
              </Form.Group>
              <Button
                className="btn btn-primary btn-main rounded-pill px-5 py-4 w-100"
                onClick={() => setModalShow(true)}
              >
                SUBMIT
              </Button>
            </Form>
          </div>
        </div>
        <Submit show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </section>
  );
}
