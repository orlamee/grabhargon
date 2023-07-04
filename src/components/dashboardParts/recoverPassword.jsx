import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/loginlogo.svg";


export default function Recovery () {
  return (
  <div className="d-lg-flex half">
    <div className="bg order-1 order-md-1 loginleft">
      <div className='container'>
        <div className='row align-items-start'>
          
        </div>
      </div>
    </div>
    <div className="contents order-2 order-md-2">
      <div className="container">
        <div className="row align-items-start justify-content-center">
          <div className="col-md-7">
            <div className="mt-5">
              <Link to="/"><img src={logo} alt="logo" className="img-fluid float-end" /></Link>
            </div>
            <div style={{marginTop: "120px"}}>
              <div className="login-form">
                <h3 className="">Forgot Password</h3>
                <p className="mt-2" style={{color: "#999999"}}>No worries, we’ll send you reset instructions</p>
                <Form className="mt-4">
                  <Form.Group className="mb-5">
                    <Form.Control type="email" placeholder="Email address" />
                  </Form.Group>
                  <Link to="/set-password" type="button" className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100">Reset Password</Link>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  )
}
