import join from "../../assets/join.svg";
import { Link } from "react-router-dom";


export default function SemiFooter () {
  return (
    <section className='clients'>
      <div className='container'>
        <div className="join">
          <div className="row justify-content-center">
            <div className="col-sm-6 text-center">
              <img src={join} alt="join hargon" className="img-fluid" />
              <h6 className="text-white mt-4">Sign up for free and take control of your finances.</h6>
              <Link
                to=""
                className="btn btn-primary bg-white btn-main rounded-pill px-5 py-3 mt-5"
                href="#!"
                style={{color: "#228B22"}}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-9">
          <p>Hargon is a fully licensed digital lending platform. Hargon offers innovative financial solutions including investments and credit services. Our credit solution allows businesses and individuals to buy anything and pay for it in installments across online and offline Merchants by providing them with instant access to credit at the point of checkout.</p>
        </div>
      </div>
    </section>
    
  )
}
