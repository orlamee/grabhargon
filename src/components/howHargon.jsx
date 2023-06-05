
import howhargon from "../assets/howhargon.svg";
import hargon from "../assets/hargons.svg";

export default function HowHargon() {
  return (
    <section className="features">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h6>FEATURES</h6>
            <img src={howhargon} alt="how hargon works" className="img-fluid mt-3" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12">
            <img src={hargon} alt="hargon" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

