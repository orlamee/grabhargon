import line from "../../assets/line.svg";
import hargongold from "../../assets/hargongold.svg";




export default function FlexibleCC () {
  return (
    <section className='flex-cc'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <h2>Flexible <span style={{color: "#218421"}}>credit card</span> options</h2>
            <img src={line} alt="line" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-6 text-center">
            <p className="mb-4">Take your pick between our Gold and premium credit options</p>
            <p>Choose between our two credit card options and enter into a new world of sophistication and exclusivity. Hargon’s credit card comes with amazing perks and personalized services</p>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-6">
            <img src={hargongold} alt="hargongoldcard" className="img-fluid" />
          </div>
          <div className="col-sm-6 mb-3">
            <div className="c-gold">
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <div className="gold-card">
                    <h6 className="w-50">Up to 1M in credit limit with No overdraft</h6>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="gold-card gold-2">
                    <h6 className="w-50">Renews automatically</h6>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-6 mb-3">
                  <div className="gold-card gold-3">
                    <h6 className="w-50">Spend anywhere in the world and settle in Naira</h6>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="gold-card gold-4">
                    <h6 className="w-50">Low Interest rates</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
