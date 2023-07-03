import { Link } from "react-router-dom";
import logo from "../../assets/loginlogo.svg";
import OtpInput from "react18-input-otp";
import { useState } from "react";


export default function OtpVerify () {
  const [otp, setOtp] = useState('');
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
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
                <h3 className="">OTP Verification</h3>
                <h4 className="mt-2">We sent you an OTP code to this email <span className="text-black fw-bold">AyodeleVincentOlagunju888@gmail.com</span> </h4>
                <div className="my-5">
                  <OtpInput value={otp} onChange={handleChange} numInputs={7} inputStyle="form-control otp-form" />
                </div>
                <h4 className="mb-3 text-black">Didn’t get an OTP code? <span style={{color: "#228B22"}}>RESEND</span></h4>
                <button to="" type="button" className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100">Verify</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  )
}
