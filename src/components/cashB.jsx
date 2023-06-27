
import mouse from "../assets/mouse.svg";
import cbk from "../assets/cbk.svg";
import { Link } from "react-router-dom";

export default function CashB() {
  return (
    <section className="cashb pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <img src={cbk} alt="cbk" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-5 text-center">
            <div className="upf">
              <p>Make your money work for you. Enjoy cash back rewards and upfront interests on all your long-term savings or fixed deposits made on Hargon.</p>
            </div>
            <Link><img src={mouse} alt="cashback" className="img-fluid" style={{marginTop: "-137px"}} /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

