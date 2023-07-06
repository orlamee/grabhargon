import { Link } from "react-router-dom";
import logo from "../../assets/loginlogo.svg";
import merchant from "../../assets/merchant.svg";
import company from "../../assets/com.svg";
import agent from "../../assets/agent.svg";
import partner from "../../assets/part.svg";

export default function SignUp() {
  return (
    <div className="d-lg-flex half">
      <div className="bg order-1 order-md-1 loginleft">
        <div className="container">
          <div className="row align-items-start"></div>
        </div>
      </div>
      <div className="contents order-2 order-md-2">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="col-md-8">
              <div className="mt-5">
                <Link to="/">
                  <img src={logo} alt="logo" className="img-fluid float-end" />
                </Link>
              </div>
              <div style={{ marginTop: "120px" }}>
                <div className="sign-form">
                  <h2>Select which type of account you want to open</h2>
                  <h6>Select which type of account you want to open</h6>
                  <div className="mt-5">
                    <div className="login-cards">
                      <Link to="/sign-up/merchant">
                        <div className="d-flex flex-row">
                          <img
                            src={merchant}
                            alt="merchant"
                            className="img-fluid"
                          />
                          <div className="ms-3">
                            <h3>Merchant</h3>
                            <p>Select which type of account you want to open</p>
                          </div>
                        </div>
                        <i
                          className="bi bi-chevron-right float-end"
                          style={{ marginTop: "-38px" }}
                        ></i>
                      </Link>
                    </div>
                    <div className="login-cards">
                      <Link to="/sign-up/company">
                        <div className="d-flex flex-row">
                          <img
                            src={company}
                            alt="merchant"
                            className="img-fluid"
                          />
                          <div className="ms-3">
                            <h3>Company</h3>
                            <p>Select which type of account you want to open</p>
                          </div>
                        </div>
                        <i
                          className="bi bi-chevron-right float-end"
                          style={{ marginTop: "-38px" }}
                        ></i>
                      </Link>
                    </div>
                    <div className="login-cards">
                      <Link to="/sign-up/agent">
                        <div className="d-flex flex-row">
                          <img
                            src={agent}
                            alt="merchant"
                            className="img-fluid"
                          />
                          <div className="ms-3">
                            <h3>Agents</h3>
                            <p>Select which type of account you want to open</p>
                          </div>
                        </div>
                        <i
                          className="bi bi-chevron-right float-end"
                          style={{ marginTop: "-38px" }}
                        ></i>
                      </Link>
                    </div>
                    <div className="login-cards">
                      <div className="d-flex flex-row">
                        <img
                          src={partner}
                          alt="merchant"
                          className="img-fluid"
                        />
                        <div className="ms-3">
                          <h3>Partnership</h3>
                          <p>Select which type of account you want to open</p>
                        </div>
                      </div>
                      <span className="login-cs float-end">coming soon</span>
                    </div>
                    <p className="text-black">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className=""
                        style={{ color: "#23A323" }}
                      >
                        Sign In{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
