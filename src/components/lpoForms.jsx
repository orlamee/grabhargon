import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useFormik } from "formik";
import validationSchema from "../validations/loanForm";

function LpoForms() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (formData) => {
    const apiUrl = "https://hargon-admin-be.onrender.com/api/v1/hargon/admin/loan/application";
    formik.setSubmitting(true);
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log("API Response:", response.data);
        formik.resetForm();
        formik.setSubmitting(false);
        toast.success("Submission successful. Kindly check your email!");
      })
      .catch((error) => {
        console.error("API Error:", error);
        formik.setSubmitting(false);
      });
  };

  return (
    <section>
      <div className="lpoforms mt-4">
        <div className="">
          <div className="row justify-content-center mt-5 lpofrm">
            <div className="col-sm-9">
              <Form onSubmit={formik.handleSubmit}>
                <div className="text-center my-5">
                  <h2>Fill Form</h2>
                </div>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
                        placeholder="Enter first name"
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.first_name && formik.errors.first_name
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.first_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        placeholder="Enter last name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.last_name && formik.errors.last_name
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.last_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.phone && formik.errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.email && formik.errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="text-center mt-3">
                  {formik.isSubmitting ? (
                    <button
                      className="btn rounded-pill px-5 py-3 mt-5"
                      style={{
                        background: "#ffffff",
                        color: "#23A323",
                        cursor: "not-allowed",
                      }}
                      type="submit"
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
