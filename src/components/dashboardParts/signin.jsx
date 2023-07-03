import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/loginlogo.svg";


export default function SignIn () {
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
                <h3 className="">Sign In to access your account</h3>
                <Form className="mt-4">
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="</KodeHex>" />
                    <Form.Text id="passwordHelpBlock">
                      Kode Hex is the new username 
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3 mt-5">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className="mb-4 forgot-p">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label" for="flexCheckDefault">
                        Remember Password
                      </label>
                    </div>
                    <Link to=""><h6 className="float-end" style={{marginTop: "-21px"}}>Forgot Password?</h6></Link>
                  </div>
                  <Link to="/login/otp" type="button" className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100">Sign In</Link>
                  <div className="text-center mt-4">
                    <p>Don’t have an account?  <Link to="" className="" style={{color: "#23A323"}}>Create account</Link></p>
                  </div>
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
