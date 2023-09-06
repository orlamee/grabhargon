import merchant from "../../assets/merchtitle.svg";
import side from "../../assets/merchright.svg";


export default function MerchantHero() {
  return (
    <section className="merchant-hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6 mt-5 mb-3">
            <img
              src={merchant}
              alt="more customers and infinte possiblilities for your business"
              className="img-fluid w-100"
            />
            <button
              className="btn btn-primary btn-main rounded-pill px-5 py-3 mt-4"
              href="#!"
            >
              Sell on Hargon’s Marketplace
            </button>
          </div>
          <div className="col-sm-6">
            <img src={side} alt="banner" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
