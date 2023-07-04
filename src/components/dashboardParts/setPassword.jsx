import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/loginlogo.svg";
import Input from "./input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SetPassword () {
  const notify = () => toast.success("Password has been changed!" , {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
 
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
                <h3 className="">Enter New Password</h3>
                <p className="mt-2" style={{color: "#999999"}}>Enter your new password to access your account</p>
                <Form className="mt-4">
                  <Form.Group className="mb-3">
                    <Input
                      type="password"
                      name="password"
                      placeholder="New Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Re-enter Password"
                    />
                  </Form.Group>
                  <button onClick={notify} type="button" className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100">Done</button>
                  <ToastContainer />
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
