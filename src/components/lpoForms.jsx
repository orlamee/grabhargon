import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function LpoForms() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const apiUrl =
      "https://hargon-admin-be.onrender.com/api/v1/hargon/admin/loan/application";

    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log("API Response:", response.data);
        setIsLoading(false);
        setIsSuccess(true);

        setFormData({
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
        });

        toast.success("Submission successful. Kindly Check your email!");
      })
      .catch((error) => {
        console.error("API Error:", error);
        setIsLoading(false);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section>
      <div className="lpoforms mt-4">
        <div className="col">
          <div className="row  justify-content-center mt-5 lpofrm">
            <div className="col-sm-9">
              <Form onSubmit={handleSubmit}>
                <div className="text-center my-5">
                  <h2>Fill Form</h2>
                </div>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email address"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="text-center mt-3">
                  {isLoading ? (
                    <button
                      className="btn rounded-pill px-5 py-3 mt-5"
                      style={{
                        background: "#ffffff",
                        color: "#23A323",
                        cursor: "not-allowed",
                      }}
                      disabled
                    >
                      Submitting
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn rounded-pill px-5 py-3 mt-5"
                      style={{ background: "#ffffff", color: "#23A323" }}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" /> 
    </section>
  );
}

export default LpoForms;
