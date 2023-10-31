import phone from "../assets/dashboardview.svg";
import damn from "../assets/sail1.svg";
import dam from "../assets/sail2.svg";
import yep from "../assets/insight1.svg";
import lodo from "../assets/vernylogo.svg";
import lod from "../assets/vernde.svg";
import logi from "../assets/roady11.svg";
import log from "../assets/roady1.svg";
import yelp from "../assets/insight.svg";

export default function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 text-center">
            <h2>Our Trusted Clients</h2>
            <div className="row mt-5">
              
              <div className="col-sm-3 change-photos">
                <div className="change-photo">
                  <img src={lodo} alt="roady" />
                </div>
                <div className="change-photo">
                  <img src={lod} alt="studyinsight" />
                </div>
              </div>
              <div className="col-sm-3 change-photos">
                <div className="change-photo">
                  <img src={logi} alt="verny" />
                </div>
                <div className="change-photo">
                  <img src={log} alt="studyinsight" />
                </div>
              </div>
              <div className="col-sm-3 change-photos">
                <div className="change-photo">
                  <img src={damn} alt="studyinsight" />
                </div>
                <div className="change-photo">
                  <img src={dam} alt="studyinsight" />
                </div>
              </div>
              <div className="col-sm-3 change-photos">
                <div className="change-photo">
                  <img src={yep} alt="leapsail" />
                </div>
                <div className="change-photo">
                  <img src={yelp} alt="leapsail" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-10">
            <div className="join pb-0">
              <div className="row">
                <div className="col-sm-7">
                  <h2 className="text-white">
                    Join Hargon today & experience a world of financial
                    <br />
                    possibilities.{" "}
                  </h2>
                  <h6 className="my-4">
                    Sign up for free and take control of your finances.
                  </h6>
                  <button className="btn-get">Get Started</button>
                </div>
                <div className="col-sm-5 mt-4">
                  <img
                    src={phone}
                    alt="join hargon"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-9">
          <p>
            Hargon is a fully licensed digital lending platform. Hargon offers
            innovative financial solutions including investments and credit
            services. Our credit solution allows businesses and individuals to
            buy anything and pay for it in installments across online and
            offline Merchants by providing them with instant access to credit at
            the point of checkout.
          </p>
        </div>
      </div>
    </section>
  );
}
