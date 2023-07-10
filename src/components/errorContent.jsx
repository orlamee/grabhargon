import { useNavigate } from "react-router-dom";
import oops from "../assets/oops.png";

function ErrorContent () {
  const navigate = useNavigate();
  return (
    <section className="error-cont">
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-sm-8 text-center'>
            <img src={oops} alt="oops" className='img-fluid w-100 mb-2' />
            <h6>We can’t seem to find the page you’re looking for.</h6>
            <button className="btn btn-primary btn-main rounded-pill px-5 py-3 my-4"  onClick={() => navigate("/")}>Return to Homepage</button>
            <p>Visit our help center</p>
          </div> 
        </div>
      </div>
    </section>
    
  )
}


export default ErrorContent