import never from "../../assets/neverrunout.svg";
import phone from "../../assets/hellolevi.png";
import money from "../../assets/moneyagain.svg";
import hargon from "../../assets/harg.svg";

export default function Allowance() {
  return (
    <section className="allowance">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <span className="allow-up">Allowance/upkeep</span>
          </div>
        </div>
        <div className="row justify-content-between mt-5">
          <div className="col-sm-3 mb-3 mt-9">
            <img src={never} alt="never run out" className="img-fluid" />
            <p className="mt-5 w-100 w-75">Get the financial support you need to stay worry-free throughout your education.</p>
          </div>
          <div className="col-sm-6 mb-3">
            <img src={phone} alt="never run out" className="img-fluid w-100" />
          </div>
          <div className="col-sm-3 mb-3 mt-9">
            <img src={money} alt="never run out money again" className="img-fluid" />
            <img src={hargon} alt="hargon-support" className="img-fluid w-100 mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
