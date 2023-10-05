import { Link } from "react-router-dom";
import logo from "../assets/har.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/instagram.svg";
import instagram from "../assets/linkedin.svg";
import line from "../assets/dline.svg";


export default function Footer () {
  return  (
    <section>
      <footer className="footer-bottom">
        <div className="container">
          <div className="row navigation justify-content-between">
            <div className="col-sm-3 mb-3">
              <img src={logo} alt="logo" className="img-fluid mb-4" />
              <p className="text-white w-75">Fuel your dreams, sustain, and grow your business with reliable lending solutions.</p>
              <Link
                to="/grabhargon"
                className="btn  btn-footer rounded-pill px-5 py-2 mt-3"
                href=""
              >
                Get Started
              </Link>
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm mb-3">
                  <h5>Developer</h5>
                  <ul className="list-unstyled links">
                    <li><Link to="/integration">Integration</Link></li>
                  </ul>
                  <img src={line} alt="logo" className="img-fluid" />
                  <h5 className="mt-2">Resources</h5>
                  <ul className="list-unstyled links">
                    <li><Link to="/press-media">Press</Link></li>
                    <li><Link to="/blogs">Blog</Link></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h5>Features</h5>
                  <ul className="list-unstyled links">
                    <li><Link to="/personal">Personal</Link></li>
                    <li><Link to="/business">Business</Link></li>
                    <li><Link to="">Partnership <span className="f-cs">Coming Soon</span></Link></li>
                    <li><Link to="/wallet">Wallet</Link></li>
                    <li><Link to="/personal/bills">Bills</Link></li>
                    <li><Link to="/credit-builder">Credit builder</Link></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h5>Company</h5>
                  <ul className="list-unstyled links">
                    <li><Link to="/about-us">About us</Link></li>
                    <li><Link to="/career">Careers</Link></li>
                    <li><Link to="/faqs">FAQS</Link></li>
                    
                 </ul>
                </div>
                {/* <div className="col-sm mb-3">
                  <h5>Landing Pages </h5>
                  <ul className="list-unstyled links">
                    <li><Link to="/microlending-form">Microlending</Link></li>
                    <li><Link to="/mortgageform"> Mortage</Link></li>
                    <li><Link to="/lpofinancing">LPO</Link></li>
                    <li><Link to="/businessloan-form">Business Loan</Link></li>
                    <li><Link to="/pof-form">POF</Link></li>
                 </ul>
                </div> */}
                <div className="col-sm mb-3">
                  <h5>Transparency</h5>
                  <ul className="list-unstyled links">
                    <li><Link to="/terms-conditons">Terms & conditions</Link></li>
                    <li><Link to="/privacy-policy">Privacy policy</Link></li>
                    <li><Link to="/complaints">Complaints</Link></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h5>Address</h5>
                  <ul className="list-unstyled links">
                    <li><Link>33B, Ogundana street, Allen, Ikeja.</Link></li>
                  </ul>
                  <h5>Contact</h5>
                  <ul className="list-unstyled links">
                    <li><a href="mailto:support@hargon.africa">Support@hargon.africa</a></li>
                    <li><Link>+234  813  029  2726</Link></li>
                  </ul>
                  <div className="d-flex flex-row">
                    <img src={twitter} alt="twitter" className="img-fluid me-3" />
                    <img src={linkedin} alt="linkedin" className="img-fluid me-3" />
                    <img src={instagram} alt="instagram" className="img-fluid me-3" />
                    <img src={facebook} alt="facebook" className="img-fluid me-3" />
                  </div>
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