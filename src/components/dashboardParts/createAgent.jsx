import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/loginlogo.svg";
import Input from "./input";


export default function CreateAgent() {
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
              <Link to="/sign-up" style={{color: "#9CA3AF"}}><i className="bi bi-chevron-left"></i> Back</Link>
              <Link to="/"><img src={logo} alt="logo" className="img-fluid float-end" /></Link>
            </div>
            <div style={{marginTop: "100px"}}>
              <div className="login-form">
                <h3 className="">Create an Agent Account </h3>
                <Form className="mt-4">
                  <Form.Group className="mb-5">
                    <Form.Control type="text" placeholder="</KodeHex>" />
                    <Form.Text id="passwordHelpBlock">
                      Kode Hex is the new username 
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control type="text" placeholder="Business Name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="tel" placeholder="Business Phone Number" />
                  </Form.Group>
                  <Form.Group className="my-4">
                    <Form.Control type="email" placeholder="Business Email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="url" placeholder="Business website or social handle" />
                  </Form.Group>
                  <Form.Group className="my-4">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Link to="/sign-up/otp" type="button" className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100">Sign Up</Link>
                  <div className="text-center mt-4">
                    <p>Already have an account? <Link to="/login" className="" style={{color: "#23A323"}}>Sign In</Link></p>
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
