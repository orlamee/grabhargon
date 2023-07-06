import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/loginlogo.svg";


export default function OTPEmail () {
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
                <h3 className="">Enter a valid email</h3>
                <Form className="mt-4">
                  <Form.Group className="mb-5">
                    <Form.Control type="email" placeholder="Email address" />
                  </Form.Group>
                  <Link to="" type="button" className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100">Done</Link>
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
