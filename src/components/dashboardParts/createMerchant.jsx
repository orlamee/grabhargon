import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/loginlogo.svg";
import Input from "./input";
import Select from 'react-select'

const options = [
  { value: 'Agriculture',label: 'Agriculture'},
  { value: 'Oil and Gas',label: 'Oil and Gas'},
  { value: 'Manufacturing',label: 'Manufacturing'},
  { value: 'Media',label:' Media'},
  { value: 'Advertising',label: 'Advertising'},
  { value: 'Aviation',label: 'Aviation'},
  { value: 'Manufacturing',label: 'Manufacturing'},
  { value: 'Banking',label: 'Banking'},
  { value: 'Fintech',label: 'Fintech'},
  { value: 'Energy',label: 'Energy'},
  { value: 'Entertainment',label: 'Entertainment'},
  { value: 'Sports',label: 'Sports'},
  { value: 'Construction',label: 'Construction'},
  { value: 'Real Estate',label: 'Real Estate'},
  { value: 'Transportation',label:' Transportation'},
  { value: 'Financial Services',label: 'Financial Services'},
  { value: 'Hospitality',label: 'Hospitality'},
  { value: 'Tourism',label: 'Tourism'},
  { value: 'NGO',label: 'NGO'},
  { value: 'Fashion',label: 'Fashion'},
  { value: 'Healthcare',label: 'Healthcare'},
  { value: 'Education',label: 'Education'},
  { value: 'Retail',label: 'Retail'},
  { value: 'Creative',label: 'Creative'},
  { value: 'Marine',label: 'Marine'},
  { value: 'Shipping',label: 'Shipping'},
  { value: 'Power',label: 'Power'},
  { value: 'Mining',label: 'Mining'},
  { value: 'FMCG',label: 'FMCG'},
  { value: 'Pharmaceuticals',label: 'Pharmaceuticals'},
 { value: 'Government',label: 'Government'},
  { value: 'Water',label: 'Water'},
  { value: 'Environmental',label: 'Environmental'},
  { value: 'Security',label: 'Security'},
  { value: 'Insurance',label: 'Insurance'},
  { value: 'Telecommunications',label: 'Telecommunications'}
]


export default function CreateMerchant () {
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
                <h3 className="">Create a Merchant Account </h3>
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
                  <Form.Group className="mb-4">
                    <Form.Control type="tel" placeholder="Business Phone Number" />
                  </Form.Group>
                  <Form.Group>
                    <Select
                      options={options}
                      placeholder="Business Industry"
                     />
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
