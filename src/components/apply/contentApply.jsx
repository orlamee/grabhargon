import { Button, Col, Form, Row } from "react-bootstrap";
import full from "../../assets/apply-icon.svg";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["DOC", "DOCX", "PDF"];

export default function ContentApply () {
  const [setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <section className='content-apply pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col px-0">
            <img src={full} alt="full" className="img-fluid apply-icon" />
            <h5>You think you’re a great fit?</h5>
            <h2 className="my-5">UI/UX Designer intern</h2>
            <p>Apply for this job</p>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col">
            <Form>
              <Row className="mb-5">
                <Col>
                  <Form.Label>First name <span className="text-danger">*</span></Form.Label>
                  <Form.Control placeholder="Enter first name" />
                </Col>
                <Col>
                  <Form.Label>Last name <span className="text-danger">*</span></Form.Label>
                  <Form.Control placeholder="Enter last name" />
                </Col>
              </Row>
              <Row className="mb-5">
                <Col>
                  <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="Enter email address" />
                </Col>
                <Col>
                  <Form.Label>Phone <span className="text-danger">*</span></Form.Label>
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
                <div><Form.Label>Work type <span className="text-danger">*</span></Form.Label></div>
                <div className="form-check form-check-inline me-5">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label className="form-check-label" htmlFor="inlineRadio1">On-site</label>
                </div>
                <div className="form-check form-check-inline me-5">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                  <label className="form-check-label" htmlFor="inlineRadio2">Hybrid</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                  <label className="form-check-label" htmlFor="inlineRadio2">Remote</label>
                </div>
              </Form.Group>
              <Form.Group className="mb-5">
                <div><Form.Label>Available to Start Immediately <span className="text-danger">*</span></Form.Label></div>
                <div className="form-check form-check-inline me-5">
                  <input className="form-check-input" type="radio" name="inlineRadioOption" id="inlineRadio4" value="option1"/>
                  <label className="form-check-label" htmlFor="inlineRadio4">Yes</label>
                </div>
                <div className="form-check form-check-inline me-5">
                  <input className="form-check-input" type="radio" name="inlineRadioOption" id="inlineRadio5" value="option2"/>
                  <label className="form-check-label" htmlFor="inlineRadio5">No</label>
                </div>
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Upload CV <span className="text-danger">*</span></Form.Label>
                <FileUploader handleChange={handleChange} name="file" types={fileTypes} label="Drop your resume here or browse" />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Upload Cover Letter</Form.Label>
                <FileUploader handleChange={handleChange} name="file" types={fileTypes} label="Drop your resume here or browse" />
              </Form.Group>
              <Button
                className="btn btn-primary btn-main rounded-pill px-5 py-4 w-100"
              >
                SUBMIT
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
    
  )
}
