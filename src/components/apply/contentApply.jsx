import { Col, Form, Row } from "react-bootstrap";
import full from "../../assets/apply-icon.svg";


export default function ContentApply () {
  return (
    <section className='content-apply'>
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
              <Row className="mb-4">
                <Col>
                  <Form.Label>First name <span className="text-danger">*</span></Form.Label>
                  <Form.Control placeholder="Enter first name" />
                </Col>
                <Col>
                  <Form.Label>Last name <span className="text-danger">*</span></Form.Label>
                  <Form.Control placeholder="Enter last name" />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="Enter email address" />
                </Col>
                <Col>
                  <Form.Label>Phone <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone number" />
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Label>Website/portfolio link</Form.Label>
                <Form.Control type="url" placeholder="Website/portfolio link" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Linkedin Profile</Form.Label>
                <Form.Control type="url" placeholder="Linkedin profile link" />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </section>
    
  )
}
