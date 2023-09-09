import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import left from "../assets/arrow-left.png";
import right from "../assets/arrow-right.png";
import { Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";
import { Modal } from "react-bootstrap";
import hurray from "../assets/hurray.svg";
import ms from "../assets/ms.png";
import mc from "../assets/mc.png";

function FormStep() {
  const fileTypes = ["DOC", "DOCX", "PDF"];
  const [active, setActive] = useState(1);
  const [mostActiveI, setMostActiveI] = useState("");
  const [success, setSuccess] = useState("");
  const [showShare, setShowShare] = useState(false);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 1 ? current - 1 : current));
  const [file, setFile] = useState(null); //eslint-disable-line
  const handleChange = (file) => {
    console.log(file);
    setFile(file);
  };

  const formStepper = (active) => {
    switch (active) {
      case 1:
        return (
          <div className="">
            <Row className="mb-5">
              <Col>
                <div className="s-input">
                  <label className="mylabel">
                    First name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="myinput"
                    required
                  />
                </div>
              </Col>
              <Col>
                <div className="s-input">
                  <label className="mylabel">
                    Last name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="myinput"
                    required
                  />
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="s-input">
                  <label className="mylabel">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="myinput"
                    required
                  />
                </div>
              </Col>
              <Col>
                <div className="s-input">
                  <label className="mylabel">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="myinput"
                    required
                  />
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <div className="s-input">
                <label className="mylabel">Address</label>
                <input
                  type="text"
                  placeholder="Enter House Address"
                  className="myinput"
                />
              </div>
            </Row>
            <Row className="mb-5">
              <div className="s-input">
                <label className="mylabel">Address Line 2</label>
                <input
                  type="text"
                  placeholder="Enter House Address"
                  className="myinput"
                />
              </div>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="s-input">
                  <label className="mylabel">State</label>
                  <input
                    type="email"
                    placeholder="Enter State"
                    className="myinput"
                  />
                </div>
              </Col>
              <Col>
                <div className="s-input">
                  <label className="mylabel">LGA</label>
                  <input
                    type="text"
                    placeholder="Enter LGA"
                    className="myinput"
                  />
                </div>
              </Col>
            </Row>
            <div className="s-input mb-5">
              <label className="mylabel">Nearest Landmark</label>
              <input
                type="text"
                placeholder="Enter House Address"
                className="myinput"
              />
            </div>
            <Row className="mb-5">
              <Col>
                <div className="s-input">
                  <label className="mylabel">Gender</label>
                  <Form.Select className="myinput">
                    <option value="">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </div>
              </Col>
              <Col>
                <div className="s-input">
                  <label className="mylabel">Residence</label>
                  <Form.Select className="myinput">
                    <option value="">Choose Residenct Type</option>
                    <option value="Own House">Own House</option>
                    <option value="Rented Apartment">Rented Apartment</option>
                    <option value="Family Apartment">Family Apartment</option>
                  </Form.Select>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="s-input">
                  <label className="mylabel">Educational Attainment</label>
                  <Form.Select className="myinput">
                    <option value="">Choose Educational Attainment</option>
                    <option value="Bsc, HND and other equivalent">
                      Bsc, HND and other equivalent
                    </option>
                    <option value="Vocation/Technical">
                      Vocation/Technical
                    </option>
                    <option value="School Cert">School Cert</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Masters">Masters</option>
                    <option value="PHD">PHD</option>
                  </Form.Select>
                </div>
              </Col>
              <Col>
                <div className="s-input">
                  <label className="mylabel">Marital Status</label>
                  <Form.Select className="myinput">
                    <option value="">Choose Marital Status</option>
                    <option value="Male">Married</option>
                    <option value="Single">Single</option>
                    <option value="Seperated">Seperated</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Divorced">Widowed</option>
                  </Form.Select>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="s-input">
                  <label className="mylabel">Dependant</label>
                  <Form.Select className="myinput">
                    <option value="">
                      Choose Number of dependatns e.g Kids
                    </option>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="six">6</option>
                    <option value="seven">7</option>
                    <option value="eight">8</option>
                    <option value="nine">9</option>
                    <option value="ten">10</option>
                  </Form.Select>
                </div>
              </Col>
              <Col>{""}</Col>
            </Row>
            <button className="cont-btn" onClick={nextStep}>
              Continue
            </button>
          </div>
        );
      case 2:
        return (
          <div className="mt-5">
            <div className="s-input mb-5">
              <label className="mylabel">Loan Product</label>
              <Form.Select className="myinput">
                <option value="">Choose Loan Product</option>
                <option value="AutoLoan">AutoLoan</option>
                <option value="Community">Community</option>
                <option value="Quick Credit">Quick Credit</option>
                <option value="Payday Loan">Payday Loan</option>
                <option value="Pawn">Pawn</option>
                <option value="Tourism">Tourism</option>
                <option value="Agency Loan">Agency Loan</option>
                <option value="Company Loan">Company Loan</option>
                <option value="LPO">LPO</option>
                <option value="Micro Lending">Micro Lending</option>
                <option value="Mortgage">Mortgage</option>
              </Form.Select>
            </div>
            <div className="s-input mb-5">
              <label className="mylabel">Loan Amount</label>
              <input
                type="text"
                placeholder="Enter Loan Amount you want to collect"
                className="myinput"
              />
            </div>
            <div className="s-input mb-5 is-select">
              <label className="mylabel">Loan Purpose</label>
              <Form.Select className="myinput">
                <option value="">Choose Loan Purpose</option>
                <option value="Business">Business</option>
                <option value="Asset Purchase">Asset Purchase</option>
                <option value="Medicals">Medicals</option>
                <option value="Rent">Rent</option>
                <option value="School Fees">School Fees</option>
              </Form.Select>
            </div>
            <Row className="mb-5">
              <Col>
                <div className="s-input">
                  <label className="mylabel">Account Name</label>
                  <input
                    type="text"
                    placeholder="Enter your Bank Name"
                    className="myinput"
                  />
                </div>
              </Col>
              <Col>
                <div className="s-input">
                  <label className="mylabel">Account Number</label>
                  <input
                    type="text"
                    placeholder="Enter your Bank Account Number"
                    className="myinput"
                  />
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className="s-input">
                  <label className="mylabel">BVN</label>
                  <input
                    type="text"
                    placeholder="Enter your BVN"
                    className="myinput"
                  />
                </div>
              </Col>
              <Col>{""}</Col>
            </Row>
            <button className="cont-btn" onClick={nextStep}>
              Continue
            </button>
          </div>
        );
      case 3:
        return (
          <div className="mt-5">
            <label className="mylabel">Where’s Your Most Active Income?</label>
            <Row className="mb-5">
              <Col>
                <div className="form-check form-check-inline myinput">
                  <input
                    style={{ marginLeft: "7px", marginRight: "12px" }}
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="Employer"
                    onChange={(e) => setMostActiveI(e.target.value)}
                  />
                  <label style={{ color: "black" }}>Employer</label>
                </div>
              </Col>
              <Col>
                <div className="form-check form-check-inline myinput">
                  <input
                    style={{ marginLeft: "7px", marginRight: "12px" }}
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="My Business"
                    onChange={(e) => setMostActiveI(e.target.value)}
                  />
                  <label style={{ color: "black" }}>My Business</label>
                </div>
              </Col>
            </Row>
            {mostActiveI === "Employer" ? (
              <div>
                <Row className="mb-5">
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">Company's Name</label>
                      <input
                        type="text"
                        placeholder="Enter Company's Name"
                        className="myinput"
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">About Company</label>
                      <input
                        type="text"
                        placeholder="What Does Your Company Do"
                        className="myinput"
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">Work Email</label>
                      <input
                        type="text"
                        placeholder="Enter Work Email Address"
                        className="myinput"
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">Work Type</label>
                      <Form.Select className="myinput">
                        <option value="">Choose Work Type</option>
                        <option value="Contract">Contract</option>
                        <option value="Fulltime">FullTime</option>
                        <option value="PartTime">PartTime</option>
                      </Form.Select>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">Monthly Income</label>
                      <input
                        type="text"
                        placeholder="Enter Work Email Address"
                        className="myinput"
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">Employer Category</label>
                      <Form.Select className="myinput">
                        <option value="">Choose Employer Category</option>
                        <option value="Federal : public">
                          Federal : public
                        </option>
                        <option value="State : public">State : public</option>
                        <option value="Local Government : public">
                          Local Government : public
                        </option>
                        <option value="Private Company">Private Company</option>
                        <option value="Enterprise">Enterprise</option>
                        <option value="Non-Profit">Non-Profit</option>
                      </Form.Select>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">
                        Length With Current Employer
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Length With Current Employer"
                        className="myinput"
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">Employment Sector</label>
                      <Form.Select className="myinput">
                        <option value="">Choose Employment Sector Type</option>
                        <option value="Banking">Banking</option>
                        <option value="Education ">Education </option>
                        <option value="Health Care ">Health Care </option>
                        <option value="Hospitality and Events">
                          Hospitality and Events
                        </option>
                        <option value="Information and Technology">
                          Information and Technology
                        </option>
                        <option value="Law">Law</option>
                        <option value="Manufacturing and Construction">
                          Manufacturing and Construction
                        </option>
                        <option value="Media and Entertainment">
                          Media and Entertainment
                        </option>
                        <option value="NGO">NGO</option>
                        <option value="Oil and Gas">Oil and Gas</option>
                        <option value="Other Financial">Other Financial</option>
                        <option value="Public Services and Administration">
                          Public Services and Administration
                        </option>
                        <option value="Telecoms">Telecoms</option>
                        <option value="Tourism and hospitality">
                          Tourism and hospitality
                        </option>
                        <option value="Transportation and Logistics">
                          Transportation and Logistics
                        </option>
                        <option value="Wholesale and Retail Trade">
                          Wholesale and Retail Trade
                        </option>
                      </Form.Select>
                    </div>
                  </Col>
                </Row>
                <button className="cont-btn" onClick={nextStep}>
                  Continue
                </button>
              </div>
            ) : (
              ""
            )}
            {mostActiveI === "My Business" ? (
              <div>
                <Row className="mb-5">
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">Business Name</label>
                      <input
                        type="text"
                        placeholder="Enter Business Name"
                        className="myinput"
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">Links</label>
                      <input
                        type="text"
                        placeholder="Enter LinksTo Business"
                        className="myinput"
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">Position in Company</label>
                      <input
                        type="text"
                        placeholder="Enter Your Position in your Company"
                        className="myinput"
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">How Much Are You Paid</label>
                      <input
                        type="text"
                        placeholder="Enter How Much You Are Paid"
                        className="myinput"
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col>
                    <div className="s-input">
                      <label className="mylabel">
                        How Frequent Are You Paid
                      </label>
                      <Form.Select className="myinput">
                        <option value="">
                          Choose How Frequent You Are Paid
                        </option>
                        <option value="Monthly">Monthly</option>
                      </Form.Select>
                    </div>
                  </Col>
                  <Col>{""}</Col>
                </Row>
                <button className="cont-btn" onClick={nextStep}>
                  Continue
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      case 4:
        return (
          <div className="mt-5">
            <div className="s-input mb-5">
              <label className="mylabel">Picture Of You</label>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={["JPG"]}
                label="Drop your Picture here or browse"
              />
            </div>
            <div className="s-input mb-5">
              <label className="mylabel">NIN Number</label>
              <input
                type="text"
                placeholder="Enter Your NIN Number"
                className="myinput"
              />
            </div>
            <div className="s-input mb-5">
              <label className="mylabel">NIN Upload</label>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                label="Drop your NIN here or browse"
              />
            </div>
            <div className="s-input mb-5">
              <label className="mylabel">CAC Upload</label>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                label="Drop your CAC here or browse"
              />
            </div>
            <div className="s-input mb-5">
              <label className="mylabel">Identification Document</label>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                label="Drop your Identification Document here or browse"
              />
            </div>
            <div className="s-input mb-5">
              <label className="mylabel">Utility Bill</label>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                label="Drop your Utility Bill here or browse"
              />
            </div>
            <div className="s-input mb-5">
              <label className="mylabel">Signature</label>
              <textarea className="signature"></textarea>
            </div>
            <button className="cont-btn" onClick={() => setShowShare(true)}>
              Finish
            </button>
          </div>
        );
      default:
        return <div>nil</div>;
    }
  };
  const ShareModal = (props) => {
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
          <div className="row justify-content-center px-5">
            <div className="text-center">
              <h3 className="mh">Is there something you’d like to share?</h3>
              <p className="mpara">Please share your thoughts here</p>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="mt"
            ></textarea>
            <button
              className="cont-btn"
              onClick={() => {
                props.onHide();
                setSuccess(true);
              }}
            >
              Submit Form
            </button>
          </div>
        </Modal.Body>
      </Modal>
    );
  };
  const SuccessModal = (props) => {
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
              <img src={hurray} alt="hurray" className="img-fluid hurray" />
              <h2 className="my-4">
                Your application has been submitted successfully
              </h2>
              <p className="mp">An email would be sent to you.</p>
              <div className="ms">
                <img src={ms} alt="" srcset="" />
                <img src={mc} alt="" srcset="" />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div className="">
      <div className="step-container">
        <div className="step-header">
          <div
            className={`step ${active === 1 ? "active" : ""} ${
              active > 1 ? "done" : ""
            }`}
          >
            <div className="step-image">
              <BiUser color={`${active === 1 ? "#228B22" : "white"}`} />
            </div>
            <h1>Personal Information</h1>
            <span />
          </div>

          <div
            className={`step ${active === 2 ? "active" : ""} ${
              active > 2 ? "done" : ""
            }`}
          >
            <div className="step-image">
              <svg
                width="14"
                height="14"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.1425 11.8257H4.15231C3.99436 11.8257 3.85615 11.727 3.80186 11.5839C3.74756 11.4358 3.79199 11.2729 3.91045 11.1742C4.02891 11.0755 4.1375 10.9472 4.21648 10.8089C4.37442 10.5572 4.4534 10.2709 4.4534 9.97972C4.4534 9.09619 3.73276 8.37555 2.84923 8.37555C2.48397 8.37555 2.13846 8.49893 1.84724 8.73092C1.73372 8.81977 1.58564 8.83459 1.45731 8.77536C1.32897 8.71613 1.25 8.58286 1.25 8.43972V6.28274C1.25 5.0537 2.24705 4.05664 3.47609 4.05664H9.1425C10.3715 4.05664 11.3686 5.0537 11.3686 6.28274V6.99351C11.3686 7.19588 11.2008 7.3637 10.9984 7.3637H10.0013C9.82859 7.3637 9.67064 7.42786 9.55712 7.54632L9.55218 7.55126C9.41398 7.68453 9.34981 7.86714 9.36462 8.05471C9.39423 8.38048 9.70519 8.64208 10.0606 8.64208H10.9984C11.2008 8.64208 11.3686 8.8099 11.3686 9.01227V9.59964C11.3686 10.8287 10.3715 11.8257 9.1425 11.8257ZM4.91737 11.0854H9.1425C9.96186 11.0854 10.6282 10.419 10.6282 9.59964V9.38246H10.0606C9.31526 9.38246 8.68346 8.82964 8.62423 8.11887C8.58475 7.71413 8.73282 7.31434 9.02898 7.02312C9.28564 6.76152 9.63116 6.61837 10.0013 6.61837H10.6282V6.27779C10.6282 5.45844 9.96186 4.79208 9.1425 4.79208H3.47609C2.65673 4.79208 1.99038 5.45844 1.99038 6.27779V7.79806C2.2668 7.68947 2.55801 7.63023 2.85417 7.63023C4.14737 7.63023 5.19872 8.68157 5.19872 9.97478C5.19872 10.3647 5.1 10.7497 4.91737 11.0854Z"
                  fill="#D1D5DB"
                />
                <path
                  d="M1.62019 7.0899C1.41782 7.0899 1.25 6.92208 1.25 6.7197V4.46402C1.25 3.72858 1.71398 3.0622 2.40007 2.8006L6.31917 1.31983C6.71897 1.16682 7.17308 1.22114 7.52353 1.46793C7.87891 1.71473 8.08622 2.11453 8.08622 2.54395V4.41959C8.08622 4.62196 7.9184 4.78978 7.71602 4.78978C7.51365 4.78978 7.34583 4.62196 7.34583 4.41959V2.54395C7.34583 2.35639 7.25699 2.18363 7.09904 2.07504C6.94109 1.96645 6.75353 1.94177 6.57583 2.01087L2.65673 3.49164C2.25692 3.64465 1.98545 4.0346 1.98545 4.46402V6.7197C1.99038 6.92701 1.82256 7.0899 1.62019 7.0899Z"
                  fill="#D1D5DB"
                />
                <path
                  d="M10.0637 9.38128C9.3184 9.38128 8.68661 8.82846 8.62738 8.11769C8.58789 7.70801 8.73597 7.30821 9.03212 7.01699C9.28385 6.76033 9.62936 6.61719 9.99955 6.61719H11.0262C11.5149 6.632 11.89 7.01697 11.89 7.49082V8.50764C11.89 8.98149 11.5149 9.36647 11.041 9.38128H10.0637ZM11.0163 7.35757H10.0045C9.83174 7.35757 9.67379 7.42174 9.56026 7.5402C9.41712 7.6784 9.34802 7.86596 9.36776 8.05352C9.39738 8.37929 9.70834 8.64089 10.0637 8.64089H11.0312C11.0953 8.64089 11.1546 8.58168 11.1546 8.50764V7.49082C11.1546 7.41678 11.0953 7.36251 11.0163 7.35757Z"
                  fill="#D1D5DB"
                />
                <path
                  d="M7.29407 6.88882H3.83894C3.63657 6.88882 3.46875 6.721 3.46875 6.51863C3.46875 6.31626 3.63657 6.14844 3.83894 6.14844H7.29407C7.49644 6.14844 7.66426 6.31626 7.66426 6.51863C7.66426 6.721 7.49644 6.88882 7.29407 6.88882Z"
                  fill="#D1D5DB"
                />
                <path
                  d="M2.85236 12.318C2.033 12.318 1.26301 11.8837 0.848391 11.1778C0.626275 10.8224 0.507812 10.4029 0.507812 9.97346C0.507812 9.25282 0.828645 8.58646 1.3864 8.14223C1.80102 7.81152 2.32422 7.62891 2.85236 7.62891C4.14557 7.62891 5.19692 8.68025 5.19692 9.97346C5.19692 10.4029 5.07845 10.8224 4.85634 11.1828C4.73788 11.3901 4.57499 11.5776 4.38743 11.7356C3.97775 12.1107 3.42986 12.318 2.85236 12.318ZM2.85236 8.36929C2.48711 8.36929 2.1416 8.49267 1.85038 8.72466C1.47031 9.02575 1.2482 9.4848 1.2482 9.97346C1.2482 10.2647 1.32717 10.5509 1.48018 10.7977C1.7714 11.2913 2.28474 11.5776 2.85236 11.5776C3.2423 11.5776 3.61743 11.4345 3.90371 11.1778C4.03204 11.0692 4.14063 10.9409 4.21961 10.8027C4.37755 10.551 4.45653 10.2647 4.45653 9.97346C4.45653 9.08993 3.73589 8.36929 2.85236 8.36929Z"
                  fill="#D1D5DB"
                />
                <path
                  d="M3.59212 10.3341H2.11629C1.91391 10.3341 1.74609 10.1663 1.74609 9.96394C1.74609 9.76157 1.91391 9.59375 2.11629 9.59375H3.59212C3.79449 9.59375 3.96231 9.76157 3.96231 9.96394C3.96231 10.1663 3.79943 10.3341 3.59212 10.3341Z"
                  fill="#D1D5DB"
                />
                <path
                  d="M2.85457 11.0893C2.6522 11.0893 2.48438 10.9214 2.48438 10.7191V9.24324C2.48438 9.04087 2.6522 8.87305 2.85457 8.87305C3.05694 8.87305 3.22476 9.04087 3.22476 9.24324V10.7191C3.22476 10.9264 3.05694 11.0893 2.85457 11.0893Z"
                  fill="#D1D5DB"
                />
              </svg>
            </div>
            <h1>Loan/Account Information</h1>
            <span />
          </div>

          <div
            className={`step ${active === 3 ? "active" : ""} ${
              active > 3 ? "done" : ""
            }`}
          >
            <div className="step-image">
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.24188 13.9625L7.73327 13.9404C7.70379 13.9404 7.66693 13.933 7.6227 13.9183C7.59322 13.9183 7.54899 13.9109 7.49002 13.8962L7.291 13.852C7.21729 13.8667 7.12884 13.8741 7.02564 13.8741C6.93719 13.8741 6.84136 13.8814 6.73817 13.8962C6.6792 13.8962 6.60549 13.8372 6.51703 13.7193L6.42858 13.6087C6.41384 13.5792 6.40647 13.535 6.40647 13.476C6.40647 13.4171 6.39909 13.3581 6.38435 13.2991L6.27379 12.9453V12.7021L6.18533 12.6136C6.14111 12.5694 6.11899 12.5178 6.11899 12.4588C6.13373 12.4293 6.14848 12.3925 6.16322 12.3483C6.17796 12.304 6.20007 12.2524 6.22956 12.1935L6.07476 12.105C6.06002 12.0608 6.05265 12.0018 6.05265 11.9281C6.05265 11.8102 6.08214 11.7217 6.14111 11.6627C6.09688 11.6333 6.04528 11.5743 5.98631 11.4858L5.87574 11.3974C5.89049 11.3679 5.89786 11.3163 5.89786 11.2426C5.89786 11.1246 5.81678 10.9625 5.65461 10.7561C5.65461 10.7266 5.66198 10.6676 5.67672 10.5792C5.69147 10.4907 5.69884 10.4244 5.69884 10.3802C5.59564 10.3654 5.51456 10.2254 5.45559 9.96C5.41136 9.81258 5.36714 9.6283 5.32291 9.40717L5.38925 9.14181C5.21234 8.93542 5.12389 8.78062 5.12389 8.67743C5.12389 8.67743 5.12389 8.66268 5.12389 8.6332H4.90275C4.84379 8.6332 4.77745 8.6332 4.70373 8.6332C4.64476 8.6332 4.57842 8.6332 4.50471 8.6332C4.51945 8.66268 4.52683 8.69954 4.52683 8.74377L4.43837 8.9649V9.18604C4.36466 9.23026 4.32781 9.27449 4.32781 9.31872C4.32781 9.33346 4.34255 9.35557 4.37203 9.38506L4.41626 9.47351C4.40152 9.53248 4.38677 9.62093 4.37203 9.73887C4.35729 9.84207 4.34255 9.96738 4.32781 10.1148C4.35729 10.1738 4.3794 10.2401 4.39415 10.3138C4.40889 10.3728 4.42363 10.4465 4.43837 10.535L4.37203 10.6897V11.2205L4.32781 11.3089C4.32781 11.3384 4.32043 11.3826 4.30569 11.4416C4.30569 11.5006 4.29832 11.5669 4.28358 11.6406C4.23935 11.7291 4.19513 11.8396 4.1509 11.9723C4.1509 11.9871 4.17301 12.0166 4.21724 12.0608C4.23198 12.0903 4.23935 12.1124 4.23935 12.1271C4.25409 12.1419 4.26147 12.1566 4.26147 12.1713L4.21724 13.078C4.2025 13.1075 4.19513 13.137 4.19513 13.1664C4.19513 13.1812 4.19513 13.1886 4.19513 13.1886C4.20987 13.5424 4.21724 13.7193 4.21724 13.7193C4.2025 13.7635 4.15827 13.7856 4.08456 13.7856L3.86342 13.7193L3.68652 13.7414C3.62755 13.7561 3.58332 13.7635 3.55384 13.7635C3.53909 13.7635 3.52435 13.7635 3.50961 13.7635H3.42116C3.3327 13.7635 3.25899 13.7488 3.20002 13.7193L3.02311 13.6529C3.00837 13.6529 2.98626 13.6751 2.95677 13.7193H2.80198C2.75775 13.7193 2.7209 13.7267 2.69141 13.7414C2.67667 13.7414 2.66193 13.7414 2.64719 13.7414L2.22703 13.7193C2.10909 13.7193 2.05012 13.6603 2.05012 13.5424C2.05012 13.4834 2.0575 13.4171 2.07224 13.3434C2.10172 13.2696 2.12384 13.1738 2.13858 13.0559C2.13858 12.9527 2.13858 12.8421 2.13858 12.7242C2.13858 12.6062 2.13121 12.4883 2.11646 12.3704L2.31549 12.1713C2.27126 12.1271 2.24177 12.0829 2.22703 12.0387C2.19755 11.9797 2.1828 11.9207 2.1828 11.8618C2.1828 11.6406 2.24177 11.4785 2.35971 11.3753C2.24177 11.2573 2.1828 11.1689 2.1828 11.1099C2.21229 10.992 2.24915 10.9183 2.29337 10.8888C2.3376 10.874 2.37445 10.8151 2.40394 10.7119C2.3892 10.6824 2.36708 10.6381 2.3376 10.5792C2.3376 10.476 2.35971 10.3286 2.40394 10.1369C2.37445 10.0927 2.35971 9.98949 2.35971 9.82732C2.35971 9.75361 2.35971 9.68727 2.35971 9.6283C2.35971 9.55459 2.36708 9.48088 2.38183 9.40717C2.36708 9.39243 2.35971 9.37031 2.35971 9.34083C2.35971 9.31134 2.35234 9.27449 2.3376 9.23026L2.42605 8.61109H1.54152L1.14347 8.58897C1.11399 8.55949 1.08451 8.54475 1.05502 8.54475L0.944454 8.52263C0.944454 8.52263 0.937083 8.53 0.922341 8.54475C0.892856 8.54475 0.848629 8.55212 0.78966 8.56686C0.730691 8.5816 0.679093 8.58897 0.634866 8.58897C0.575897 8.58897 0.509557 8.58897 0.435846 8.58897C0.406361 8.58897 0.369506 8.58897 0.325279 8.58897C0.26631 8.58897 0.207341 8.5816 0.148371 8.56686V8.52263L0.214712 8.47841C0.244196 8.44892 0.258939 8.43418 0.258939 8.43418C0.258939 8.4047 0.199969 8.34573 0.0820312 8.25727C0.0820312 8.24253 0.0967735 8.23516 0.126258 8.23516C0.155743 8.20567 0.170485 8.19093 0.170485 8.19093L0.214712 7.99191C0.214712 7.97717 0.207341 7.96243 0.192598 7.94768L0.148371 7.90346C0.148371 7.88871 0.163114 7.85186 0.192598 7.79289L0.214712 7.70444L0.126258 7.6381L0.170485 7.57176H0.59064C0.605382 7.57176 0.65698 7.5865 0.745434 7.61598L1.05502 7.6381H1.3425C1.37198 7.62335 1.41621 7.61598 1.47518 7.61598C1.54889 7.61598 1.60786 7.6381 1.65208 7.68232L1.71842 7.74866C1.74791 7.74866 1.78476 7.74866 1.82899 7.74866C1.87322 7.73392 1.92482 7.71918 1.98378 7.70444C2.02801 7.70444 2.07224 7.69707 2.11646 7.68232C2.16069 7.65284 2.21966 7.6381 2.29337 7.6381C2.36708 7.6381 2.41131 7.6381 2.42605 7.6381C2.44079 7.6381 2.45554 7.6381 2.47028 7.6381C2.47028 7.57913 2.47028 7.46856 2.47028 7.3064C2.47028 7.23268 2.49239 7.18846 2.53662 7.17372L2.6693 7.12949C2.65456 7.11475 2.63982 7.09263 2.62507 7.06315C2.61033 7.01892 2.59559 6.96732 2.58085 6.90835C2.58085 6.87887 2.57348 6.84201 2.55873 6.79779C2.55873 6.75356 2.55136 6.70196 2.53662 6.64299L2.44817 6.46609L2.62507 5.86902V5.80268H1.14347C1.14347 5.80268 1.11399 5.78794 1.05502 5.75846L0.944454 5.73634L0.78966 5.75846C0.730691 5.7732 0.679093 5.78794 0.634866 5.80268C0.575897 5.80268 0.509557 5.80268 0.435846 5.80268C0.406361 5.80268 0.369506 5.80268 0.325279 5.80268C0.26631 5.80268 0.207341 5.79531 0.148371 5.78057V5.73634C0.148371 5.7216 0.170485 5.69949 0.214712 5.67C0.244196 5.64052 0.258939 5.62578 0.258939 5.62578C0.258939 5.59629 0.199969 5.54469 0.0820312 5.47098C0.0820312 5.4415 0.0967735 5.42676 0.126258 5.42676L0.170485 5.40464L0.214712 5.18351L0.192598 5.13928C0.163114 5.1098 0.148371 5.09506 0.148371 5.09506L0.192598 4.98449C0.207341 4.955 0.214712 4.94026 0.214712 4.94026C0.214712 4.92552 0.214712 4.91815 0.214712 4.91815C0.214712 4.90341 0.199969 4.88129 0.170485 4.85181C0.141 4.85181 0.126258 4.84444 0.126258 4.82969L0.170485 4.76335H0.59064L0.745434 4.80758C0.78966 4.82232 0.892856 4.82969 1.05502 4.82969H1.3425C1.5194 4.82969 1.6226 4.84444 1.65208 4.87392L1.71842 4.94026C1.74791 4.94026 1.78476 4.94026 1.82899 4.94026C1.87322 4.94026 1.92482 4.93289 1.98378 4.91815L2.11646 4.87392C2.14595 4.85918 2.19755 4.85181 2.27126 4.85181C2.35971 4.83707 2.41131 4.82969 2.42605 4.82969H2.64719L2.71353 4.54222C2.74301 4.51273 2.70616 4.45377 2.60296 4.36531C2.67667 4.27686 2.71353 4.14418 2.71353 3.96727L2.69141 3.63557C2.70616 3.60608 2.7209 3.58397 2.73564 3.56923C2.75038 3.53974 2.76512 3.51026 2.77987 3.48078L2.84621 3.1933L2.86832 2.8616L2.77987 2.5299L2.91255 1.82227C2.91255 1.73382 2.90518 1.68222 2.89043 1.66748C2.81672 1.52005 2.77987 1.35789 2.77987 1.18098C2.77987 1.06304 2.78724 0.952476 2.80198 0.84928C2.83147 0.746084 2.85358 0.665001 2.86832 0.606032C2.88306 0.547063 2.94203 0.517578 3.04523 0.517578C3.11894 0.517578 3.17791 0.539692 3.22214 0.583919C3.23688 0.642888 3.27373 0.672373 3.3327 0.672373L3.4875 0.539693C3.6644 0.613404 3.77497 0.65026 3.8192 0.65026L4.04033 0.606032C4.06982 0.606032 4.10667 0.613403 4.1509 0.628146L4.34992 0.606032C4.40889 0.59129 4.44574 0.583919 4.46049 0.583919C4.48997 0.583919 4.51208 0.583919 4.52683 0.583919C4.73322 0.583919 4.87327 0.642888 4.94698 0.760826C4.94698 0.922991 5.02069 1.1515 5.16811 1.44634C5.13863 1.46108 5.10177 1.47583 5.05755 1.49057C5.01332 1.50531 4.96909 1.52742 4.92487 1.55691C4.91013 1.58639 4.93224 1.63799 4.99121 1.7117C5.06492 1.78541 5.13126 1.83701 5.19023 1.8665C5.146 1.91072 5.11652 1.96232 5.10178 2.02129C5.11652 1.99181 5.20497 2.16134 5.36714 2.5299C5.38188 2.5299 5.39662 2.65521 5.41136 2.90583L5.36714 3.14907L5.54404 3.28175L5.67672 3.79036V4.03361L5.8094 4.1884C5.79466 4.20315 5.79466 4.24737 5.8094 4.32109L5.91997 4.52011C5.90523 4.56433 5.89786 4.60856 5.89786 4.65279C5.89786 4.69701 5.89786 4.73387 5.89786 4.76335C5.89786 4.83706 5.89786 4.88866 5.89786 4.91815H6.05265C6.12636 4.88866 6.14848 4.85918 6.11899 4.82969L6.58337 4.80758C6.70131 4.80758 6.78239 4.80758 6.82662 4.80758C6.88559 4.79284 6.92245 4.78547 6.93719 4.78547L7.06987 4.80758C7.08461 4.80758 7.09935 4.80758 7.1141 4.80758V4.69701L7.22466 4.54222C7.20992 4.52748 7.17306 4.47588 7.1141 4.38743L7.15832 4.29897C7.17306 4.26949 7.18044 4.24 7.18044 4.21052C7.19518 4.12206 7.19518 3.98201 7.18044 3.79036L7.13621 3.48078C7.13621 3.40706 7.18043 3.31861 7.26889 3.21541C7.32786 3.11222 7.37946 3.06062 7.42368 3.06062C7.3942 3.03114 7.35734 3.01639 7.31312 3.01639C7.25415 2.92794 7.24678 2.81737 7.291 2.68469C7.20255 2.56675 7.16569 2.48567 7.18044 2.44144L7.291 2.24242C7.27626 2.15397 7.26889 2.05815 7.26889 1.95495C7.26889 1.85175 7.26889 1.74856 7.26889 1.64536L7.291 0.91562C7.291 0.738713 7.35734 0.665002 7.49002 0.694486C7.49002 0.694486 7.54899 0.731341 7.66693 0.805053C7.78487 0.878764 7.84384 0.91562 7.84384 0.91562C7.87332 0.91562 7.93966 0.893506 8.04286 0.84928L8.21977 0.78294C8.23451 0.78294 8.29348 0.812424 8.39667 0.871393C8.47038 0.930363 8.52198 0.959847 8.55147 0.959847C8.58095 0.959847 8.66203 0.937734 8.79471 0.893506L8.99374 0.827167C9.03796 0.827167 9.06745 0.834538 9.08219 0.84928C9.11167 0.878764 9.12641 0.893506 9.12641 0.893506L9.21487 0.84928C9.24435 0.834538 9.27384 0.827167 9.30332 0.827167C9.34755 0.827167 9.40652 0.886136 9.48023 1.00407L9.36966 1.13675C9.36966 1.1515 9.37703 1.17361 9.39178 1.20309C9.40652 1.21784 9.42126 1.23995 9.436 1.26943L9.48023 1.40211C9.48023 1.41686 9.45812 1.44634 9.41389 1.49057C9.35492 1.54954 9.32544 1.59376 9.32544 1.62325L9.34755 1.80016C9.36229 1.84438 9.36966 1.88124 9.36966 1.91072C9.36966 1.94021 9.36966 1.96232 9.36966 1.97706C9.36966 2.00655 9.36229 2.05077 9.34755 2.10974C9.33281 2.15397 9.31806 2.21294 9.30332 2.28665L9.2591 2.48567C9.27384 2.51516 9.28858 2.55201 9.30332 2.59624C9.31806 2.62572 9.33281 2.65521 9.34755 2.68469C9.34755 2.69944 9.31807 2.73629 9.2591 2.79526C9.24435 2.83949 9.23698 2.90583 9.23698 2.99428C9.22224 3.08273 9.1559 3.14907 9.03796 3.1933C9.03796 3.20804 9.06745 3.22279 9.12641 3.23753C9.1559 3.25227 9.17801 3.26701 9.19276 3.28175C9.2075 3.2965 9.22224 3.31124 9.23698 3.32598C9.23698 3.34072 9.21487 3.36284 9.17064 3.39232L9.08219 3.45866C9.1559 3.53237 9.22224 3.6282 9.28121 3.74614C9.31069 3.84933 9.31069 3.9599 9.28121 4.07784C9.29595 4.09258 9.30332 4.12206 9.30332 4.16629L9.19276 4.47588C9.16327 4.57908 9.13379 4.65279 9.1043 4.69701C9.07482 4.74124 9.06007 4.77072 9.06007 4.78547C9.06007 4.80021 9.06007 4.81495 9.06007 4.82969H9.436L9.83404 4.85181C9.95198 4.85181 10.0404 4.85918 10.0994 4.87392C10.1584 4.87392 10.1952 4.87392 10.21 4.87392L10.4532 4.85181C10.5269 4.83707 10.5785 4.82969 10.608 4.82969C10.6522 4.82969 10.6817 4.82969 10.6965 4.82969H10.8513C10.8365 4.82969 10.8291 4.83707 10.8291 4.85181V4.98449C10.7702 4.99923 10.726 5.01397 10.6965 5.02871C10.667 5.04346 10.6522 5.05083 10.6522 5.05083C10.6522 5.06557 10.6744 5.10243 10.7186 5.16139C10.7628 5.20562 10.7849 5.22773 10.7849 5.22773C10.7849 5.22773 10.7628 5.24248 10.7186 5.27196L10.6522 5.31619L10.6965 5.42676C10.6817 5.42676 10.6744 5.42676 10.6744 5.42676C10.6744 5.41201 10.667 5.40464 10.6522 5.40464H10.5859C10.5564 5.40464 10.5417 5.43413 10.5417 5.4931C10.5417 5.50784 10.5564 5.52995 10.5859 5.55944L10.608 5.58155V5.60366C10.5933 5.61841 10.5859 5.63315 10.5859 5.64789L10.608 5.67C10.608 5.67 10.6522 5.68475 10.7407 5.71423C10.7407 5.72897 10.7554 5.75109 10.7849 5.78057C10.8291 5.79531 10.8513 5.80268 10.8513 5.80268C10.8513 5.84691 10.7997 5.86902 10.6965 5.86902C10.6375 5.86902 10.549 5.86902 10.4311 5.86902C10.3279 5.85428 10.1879 5.83954 10.011 5.8248C10.011 5.73634 9.98884 5.69212 9.94461 5.69212C9.90038 5.69212 9.82667 5.71423 9.72348 5.75846C9.66451 5.7732 9.60554 5.79531 9.54657 5.8248C9.50234 5.83954 9.46549 5.84691 9.436 5.84691H9.2591C9.18538 5.83217 9.14853 5.8248 9.14853 5.8248C9.16327 5.81006 9.1559 5.80268 9.12641 5.80268C9.14116 5.8764 9.14853 5.95011 9.14853 6.02382C9.16327 6.09753 9.17801 6.17124 9.19276 6.24495C9.16327 6.51031 9.14116 6.70196 9.12641 6.8199C9.11167 6.83464 9.09693 6.86413 9.08219 6.90835C9.06745 6.95258 9.04533 7.01155 9.01585 7.08526L9.06007 7.35062C9.01585 7.36536 8.99374 7.43908 8.99374 7.57176V7.6381H9.83404L10.21 7.68232L10.4532 7.6381C10.5269 7.62335 10.5785 7.62335 10.608 7.6381C10.6522 7.6381 10.6817 7.6381 10.6965 7.6381H10.8291V7.77078C10.7112 7.80026 10.6522 7.82975 10.6522 7.85923C10.6522 7.87397 10.6744 7.90346 10.7186 7.94768C10.7628 7.99191 10.7849 8.0214 10.7849 8.03614C10.7849 8.03614 10.7628 8.05088 10.7186 8.08036C10.6744 8.09511 10.6522 8.10985 10.6522 8.12459L10.6965 8.21305H10.5859C10.5564 8.21305 10.5417 8.23516 10.5417 8.27939C10.5417 8.30887 10.5564 8.33836 10.5859 8.36784L10.608 8.38995C10.6228 8.38995 10.6228 8.39732 10.608 8.41207L10.5859 8.43418C10.5859 8.44892 10.5933 8.45629 10.608 8.45629L10.7407 8.50052C10.7407 8.50052 10.7628 8.51526 10.807 8.54475C10.8365 8.60371 10.8513 8.62583 10.8513 8.61109C10.8513 8.64057 10.7997 8.65531 10.6965 8.65531C10.6375 8.65531 10.549 8.65531 10.4311 8.65531C10.3279 8.64057 10.1879 8.62583 10.011 8.61109C10.011 8.53738 9.98884 8.50052 9.94461 8.50052C9.91513 8.50052 9.84142 8.52263 9.72348 8.56686C9.66451 8.5816 9.60554 8.60371 9.54657 8.6332C9.50234 8.64794 9.46549 8.65531 9.436 8.65531H9.2591C9.17064 8.62583 9.11904 8.60372 9.1043 8.58897C9.08956 8.60372 9.06007 8.61109 9.01585 8.61109C8.98636 8.64057 8.94951 8.67743 8.90528 8.72165C8.92002 8.81011 8.92002 8.88382 8.90528 8.94279C8.86105 9.03124 8.83894 9.0681 8.83894 9.05335C8.85368 9.20078 8.8758 9.25238 8.90528 9.20815C8.8758 9.25238 8.8242 9.2966 8.75049 9.34083L8.70626 9.53985C8.70626 9.53985 8.74312 9.59882 8.81683 9.71676C8.8758 9.81995 8.90528 9.88629 8.90528 9.91578C8.90528 9.94526 8.88317 9.98949 8.83894 10.0485C8.79471 10.0927 8.76523 10.1222 8.75049 10.1369L8.81683 10.4023C8.86105 10.5792 8.8758 10.675 8.86105 10.6897C8.86105 10.9109 8.79471 11.0214 8.66203 11.0214L8.59569 10.9772C8.58095 10.9772 8.57358 10.9993 8.57358 11.0436C8.57358 11.1173 8.58832 11.1836 8.61781 11.2426C8.66203 11.2868 8.70626 11.3163 8.75049 11.331L8.79471 11.4195L8.75049 11.5743C8.70626 11.6627 8.68415 11.7217 8.68415 11.7512L8.70626 11.8175V11.8618C8.70626 12.0092 8.71363 12.105 8.72837 12.1492L8.7726 12.2377L8.72837 12.879C8.72837 12.8937 8.70626 12.9232 8.66203 12.9674V13.2549C8.64729 13.2696 8.62518 13.3212 8.59569 13.4097V13.4318C8.59569 13.4613 8.61044 13.5203 8.63992 13.6087C8.6694 13.6972 8.70626 13.8004 8.75049 13.9183L8.72837 13.9625C8.71363 13.9625 8.66203 13.9625 8.57358 13.9625C8.49987 13.9773 8.3893 13.9773 8.24188 13.9625ZM8.61781 1.57902C8.64729 1.54954 8.67678 1.5348 8.70626 1.5348C8.70626 1.52005 8.69152 1.49794 8.66203 1.46846L8.61781 1.57902ZM3.4875 1.82227C3.53172 1.83701 3.57595 1.8149 3.62018 1.75593C3.59069 1.72645 3.56858 1.7117 3.55384 1.7117C3.50961 1.7117 3.4875 1.74856 3.4875 1.82227ZM4.34992 2.13186C4.39415 2.1466 4.43837 2.12449 4.4826 2.06552C4.46786 2.05077 4.44574 2.0434 4.41626 2.0434C4.37203 2.0434 4.34992 2.07289 4.34992 2.13186ZM7.73327 2.24242C7.76276 2.25717 7.79224 2.2498 7.82172 2.22031C7.83647 2.20557 7.8291 2.16871 7.79961 2.10974C7.75538 2.10974 7.73327 2.15397 7.73327 2.24242ZM8.72837 3.65768C8.74312 3.6282 8.73575 3.59871 8.70626 3.56923C8.69152 3.53974 8.66203 3.54712 8.61781 3.59134C8.61781 3.63557 8.65466 3.65768 8.72837 3.65768ZM10.0331 5.38253L10.1657 5.31619L10.1879 5.29408L10.1215 5.24985L10.0331 5.27196V5.38253ZM0.988681 5.38253C1.03291 5.38253 1.07713 5.36042 1.12136 5.31619L0.922341 5.27196C0.907598 5.2867 0.91497 5.30882 0.944454 5.3383C0.959196 5.36779 0.973939 5.38253 0.988681 5.38253ZM2.16069 5.62578C2.26389 5.62578 2.31549 5.61103 2.31549 5.58155L2.29337 5.51521C2.44079 5.51521 2.51451 5.4931 2.51451 5.44887L2.40394 5.38253L2.22703 5.3383C2.16806 5.32356 2.11646 5.31619 2.07224 5.31619C1.9543 5.31619 1.89533 5.3383 1.89533 5.38253C1.89533 5.41201 1.92482 5.45624 1.98378 5.51521L2.13858 5.55944C2.06487 5.55944 2.02064 5.56681 2.0059 5.58155C2.03538 5.61103 2.08698 5.62578 2.16069 5.62578ZM7.06987 7.61598C7.09935 7.61598 7.12884 7.62335 7.15832 7.6381C7.14358 7.46119 7.1141 7.26954 7.06987 7.06315L7.00353 6.95258L7.1141 6.79779C7.1141 6.79779 7.09935 6.7683 7.06987 6.70933C7.02564 6.66511 7.00353 6.62825 7.00353 6.59877C7.01827 6.55454 7.02564 6.50294 7.02564 6.44397C7.04038 6.37026 7.04038 6.29655 7.02564 6.22284L7.00353 6.02382C7.00353 5.97959 6.99616 5.95011 6.98141 5.93536C6.98141 5.90588 6.98141 5.88377 6.98141 5.86902V5.84691L6.80451 5.80268C6.74554 5.80268 6.70131 5.80268 6.67183 5.80268C6.64234 5.78794 6.62023 5.78057 6.60549 5.78057L6.51703 5.80268C6.45806 5.83217 6.42858 5.84691 6.42858 5.84691C6.36961 5.84691 6.31064 5.83217 6.25167 5.80268L6.09688 5.75846C6.08214 5.86165 6.08214 5.99433 6.09688 6.1565L6.27379 6.35552C6.28853 6.39975 6.30327 6.45871 6.31801 6.53243C6.33275 6.5914 6.35487 6.65774 6.38435 6.73145C6.42858 6.77567 6.47281 6.84939 6.51703 6.95258C6.54652 7.04103 6.58337 7.10737 6.6276 7.1516C6.61286 7.1516 6.60549 7.19583 6.60549 7.28428C6.60549 7.34325 6.60549 7.40222 6.60549 7.46119C6.60549 7.52016 6.61286 7.56439 6.6276 7.59387H6.93719L7.06987 7.61598ZM4.70373 6.31129C4.71848 6.28181 4.7111 6.25232 4.68162 6.22284C4.65214 6.19335 4.62265 6.19335 4.59317 6.22284C4.59317 6.25232 4.63002 6.28181 4.70373 6.31129ZM8.63992 6.46609C8.65466 6.4366 8.64729 6.40712 8.61781 6.37763C8.58832 6.34815 8.55884 6.34815 8.52935 6.37763C8.52935 6.40712 8.56621 6.4366 8.63992 6.46609ZM7.7775 6.79779C7.82172 6.81253 7.86595 6.79042 7.91018 6.73145C7.89544 6.7167 7.87332 6.70933 7.84384 6.70933C7.79961 6.70933 7.7775 6.73882 7.7775 6.79779ZM10.0331 8.16882L10.1657 8.12459L10.1879 8.08036L10.1215 8.05825H10.0331V8.16882ZM0.988681 8.16882C1.03291 8.16882 1.07713 8.14671 1.12136 8.10248L0.922341 8.08036C0.907598 8.08036 0.91497 8.09511 0.944454 8.12459C0.959196 8.15408 0.973939 8.16882 0.988681 8.16882ZM7.02564 8.6332L6.87085 8.61109C6.8561 8.6848 6.82662 8.78799 6.78239 8.92067L7.02564 8.69954C7.02564 8.67006 7.03301 8.64794 7.04775 8.6332H7.02564ZM6.49492 12.1271C6.6276 12.1271 6.70131 12.1197 6.71605 12.105L6.53915 12.0166L6.49492 12.1271ZM2.95677 12.6578L2.91255 12.5915C2.88306 12.5915 2.86095 12.5989 2.84621 12.6136L2.95677 12.6578ZM2.95677 13.0117C2.97152 12.9822 2.96415 12.9527 2.93466 12.9232C2.91992 12.8937 2.89043 12.9011 2.84621 12.9453C2.84621 12.9895 2.88306 13.0117 2.95677 13.0117ZM3.50961 12.9232H3.44327C3.45801 12.9379 3.48012 12.9748 3.50961 13.0338V12.9232ZM4.23935 13.6972C4.23935 13.6972 4.23198 13.7045 4.21724 13.7193C4.23198 13.7193 4.23935 13.7119 4.23935 13.6972Z"
                  fill={
                    active > 3 ? "white" : active === 3 ? "green" : "#D1D5DB"
                  }
                />
              </svg>
            </div>
            <h1>Income Information</h1>
            <span />
          </div>

          <div
            className={`step ${active === 4 ? "active" : ""} ${
              active === 4 ? "done" : ""
            }`}
          >
            <div className="step-image">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75203 11.1186C8.65825 11.1186 8.56446 11.084 8.49042 11.01L7.74017 10.2597C7.59703 10.1166 7.59703 9.87966 7.74017 9.73652C7.88331 9.59338 8.12023 9.59338 8.26337 9.73652L8.75203 10.2252L9.99094 8.98626C10.1341 8.84312 10.371 8.84312 10.5141 8.98626C10.6573 9.1294 10.6573 9.36633 10.5141 9.50947L9.01363 11.01C8.93959 11.084 8.84581 11.1186 8.75203 11.1186Z"
                  fill={`${active === 4 ? "white" : "#D1D5DB"}`}
                />
                <path
                  d="M6.87124 6.33142C6.85643 6.33142 6.84656 6.33142 6.83175 6.33142C6.80707 6.32648 6.77252 6.32648 6.74291 6.33142C5.3115 6.28699 4.23054 5.16161 4.23054 3.77462C4.2256 3.09347 4.49214 2.4518 4.97586 1.96808C5.45957 1.48436 6.10124 1.21289 6.78733 1.21289C8.199 1.21289 9.34906 2.36295 9.34906 3.77462C9.34906 5.16161 8.2681 6.28206 6.88605 6.33142C6.88111 6.33142 6.87618 6.33142 6.87124 6.33142ZM6.78733 1.95328C6.29868 1.95328 5.84457 2.14578 5.49906 2.48635C5.15848 2.83187 4.97092 3.28597 4.97092 3.76969C4.97092 4.75687 5.74092 5.55648 6.72316 5.5861C6.75278 5.58116 6.81695 5.58116 6.88111 5.5861C7.85348 5.54167 8.60868 4.74699 8.60868 3.76969C8.60868 2.77263 7.78932 1.95328 6.78733 1.95328Z"
                  fill={`${active === 4 ? "white" : "#D1D5DB"}`}
                />
                <path
                  d="M6.78829 11.7305C5.78136 11.7305 4.82873 11.4689 4.10809 10.9852C3.422 10.5262 3.04688 9.89932 3.04688 9.2231C3.04688 8.54688 3.42694 7.92496 4.10809 7.47085C5.58393 6.48367 7.98277 6.48367 9.45861 7.47085C9.62643 7.58438 9.67579 7.81637 9.56226 7.98419C9.44873 8.15694 9.21675 8.20137 9.04893 8.08784C7.81989 7.26848 5.74681 7.26848 4.51777 8.08784C4.04393 8.40374 3.78726 8.80355 3.78726 9.2231C3.78726 9.64265 4.04393 10.0523 4.51777 10.3682C5.11502 10.768 5.91957 10.9852 6.78335 10.9852C6.98572 10.9852 7.15354 11.153 7.15354 11.3554C7.15354 11.5578 6.99066 11.7305 6.78829 11.7305Z"
                  fill={`${active === 4 ? "white" : "#D1D5DB"}`}
                />
              </svg>
            </div>
            <h1>KYC Identification</h1>
          </div>
        </div>
        <div className="step-control">
          <button className="step-btn" onClick={prevStep}>
            <span>
              <img src={left} alt="left arrow" />
            </span>
            <span>Previous</span>
          </button>
          <button className="step-btn" onClick={nextStep}>
            <span>Next</span>
            <span>
              <img src={right} alt="right arrow" />
            </span>
          </button>
        </div>

        <div className="input-containers">{formStepper(active)}</div>
      </div>
      <ShareModal show={showShare} onHide={() => setShowShare(false)} />
      <SuccessModal show={success} onHide={() => setSuccess(false)} />
    </div>
  );
}

export default FormStep;
