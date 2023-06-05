import clients from "../assets/partners.svg";
import join from "../assets/join.svg";
import { Link } from "react-router-dom";


export default function Clients () {
  return (
    <section className='clients'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h2>Our Trusted Clients</h2>
            <h6 className="mt-4">Know about our clients worldwide</h6>
            <img src={clients} alt="clients" className="img-fluid w-100 mt-9" />
          </div>
        </div>
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
          <p>Hargon financial services are offered by curved Microfinance Bank, fully licensed and regulated by the Central bank of Nigeria. Hargon offers innovative financial solutions including investments and credit services. Our credit solution allows businesses and individuals to buy anything and pay for it in installments across online and offline Merchants by providing them with instant access to credit at the point of checkout.</p>
          <div>
            <p>Merchants Onboarding</p>
            <p>Once a Merchant partners with Hargon to accept and use our services, Hargon will onboard the Merchant on its platform by having the Merchant register or by registering the Merchant on a dedicated platform.  Hargon may list the Merchant’s business on the Hargon mobile application and/or website (“Marketplace”), such that  Hargon’s users or the Merchant’s patrons are able to pay for goods and services using credit advanced by Hargon</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
