import check from "../../assets/check.svg";
import opp from "../../assets/oop.svg";
import yca from "../../assets/yca.svg";
import friend from "../../assets/friends.svg";

export default function CreditBuilders() {
  return (
    <section className="investor">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Why Hargon{" "}
              <span style={{ color: "#23A323" }}>Credit Builder?</span>
            </h2>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col-sm-3 mb-3">
            <img src={check} alt="cc" className="img-fluid" />
            <div className="invest new-inv">
              <h5 style={{ color: "#333" }}>Improve your credit score</h5>
              <p className="mt-5">
                Turn your credit score around through a string of tailored
                financial statements.
              </p>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <img src={opp} alt="cc" className="img-fluid" />
            <div className="invest invest-2 new-inv">
              <h5 style={{ color: "#333" }}>More financial opportunities</h5>
              <p className="mt-5">
                Demonstrate your creditworthiness and have doors to better
                financial opportunities open up for you.
              </p>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <img src={friend} alt="cc" className="img-fluid" />
            <div className="invest invest-3 new-inv">
              <h5 style={{ color: "#333" }}>Friends and family support</h5>
              <p className="mt-5">
                Verify the creditworthiness of friends and family before lending
                them money through Hargon's credit builder
              </p>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <img src={yca} alt="cc" className="img-fluid" />
            <div className="invest invest-4 new-inv">
              <h5 style={{ color: "#333" }}>Your credit Assistant</h5>
              <p className="mt-5">
                Get credit-building tips and notifications from our automated
                systems and financial experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
