import { Slide } from "react-awesome-reveal";
import cc from "../../assets/p-cards.png";
import pocket from "../../assets/pock.png";




export default function PCCHero () {
  return (
    <section className='pcc pe-0'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0">
            <Slide cascade>
              <h2><span className="po">Pocket-friendly credit</span> for all occasions</h2>
              <p className="my-5 w-75">Access funds and enjoy the convenience of cashless credit anywhere, anytime. With our credit cards, you get tailored financial support for your needs and financial situation. Shop, travel, and indulge all on Hargon.</p>
              <img src={cc} alt="pocket friendly" className="img-fluid w-100" />
            </Slide>
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={pocket} alt="credit card" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
