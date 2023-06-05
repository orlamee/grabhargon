import { Link } from "react-router-dom";
import logo from "../assets/har.svg";


export default function Footer () {
  return  (
    <section>
      <footer className="footer-bottom">
        <div className="container">
          <div className="row navigation justify-content-between">
            <div className="col-sm-4 mb-3">
              <img src={logo} alt="logo" className="img-fluid mb-4" />
              <p className="text-white w-75">Get the hargon app to create account and start taking as much loans as you would need to help you from that financial situation you are in.</p>
              <Link
                to=""
                className="btn btn-primary btn-footer rounded-pill px-5 py-2 mt-3"
                href="#!"
              >
                Get Started
              </Link>
            </div>
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm mb-3">
                  <h5>Features</h5>
                  <ul className="list-unstyled links">
                    <li><Link to="">Personal</Link></li>
                    <li><Link to="">Business</Link></li>
                    <li><Link to="">Invest</Link></li>
                    <li><Link to="">Wallet</Link></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h5>Company</h5>
                  <ul className="list-unstyled links">
                    <li><Link to="">About us</Link></li>
                    <li><Link to="">Careers</Link></li>
                    <li><Link to="">FAQS</Link></li>
                    <li><Link to="">Security</Link></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h5>Transparency</h5>
                  <ul className="list-unstyled links">
                    <li><Link to="">Terms & conditions</Link></li>
                    <li><Link to="">Information security policy</Link></li>
                    <li><Link to="">Privacy policy</Link></li>
                    <li><Link to="">Complaints</Link></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h5>Address</h5>
                  <ul className="list-unstyled links">
                    <li><Link>33B, Ogundana street, Allen, Ikeja.</Link></li>
                  </ul>
                  <h5>Contact</h5>
                  <ul className="list-unstyled links">
                    <li><Link>Support@hargon.africa</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-sm-10 mb-2">
              <h6>© 2023 Hargon. All right reserved</h6>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}