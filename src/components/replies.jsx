import ob from "../assets/am.svg";
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Collapse from 'react-bootstrap/Collapse';
import { Form } from "react-bootstrap";

function Replies () {
  const [open, setOpen] = useState(false);
  return (
    <section className="replies my-5 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <h3>Comments<span className="mx-2">(2)</span></h3>
            <div className="mt-2">
              <div className="d-flex flex-row">
                <img src={ob} alt="ob" className="img-fluid" />
                <div className="ms-4 mt-5">
                  <h6>Oshinowo Bola <span className="ms-4">December 15, 2022 at 10:00AM</span></h6>
                  <p>I learnt about this app late last year and it has really helped me on how i manage my finances </p>
                  <button onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} 
                    type="button"
                    className="btn btn-light">REPLY
                  </button>
                </div>
              </div>
            </div>
            <Collapse in={open}>
              <div id="example-collapse-text" className="">
                <div className="row my-3">
                  <div className="col-md-6">
                    <h3 className="mt-5">Leave a Reply</h3>
                    <span>Your email will be kept confidential</span>
                  </div>
                </div>
                <div className="">
                  <Form>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label></Form.Label>
                      <Form.Control as="textarea" rows={10} />
                    </Form.Group>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                      </Form.Group>
                    </Row>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox"/>
                      <label class="form-check-label" for="flexCheckDefault">
                        Save my name and Email for the next time i comment
                      </label>
                    </div>
                    <div className="text-center my-5">
                      <button
                        className="btn btn-primary btn-main rounded-pill px-5 py-3"
                        to=""
                      >
                        Post Comment
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Replies;
