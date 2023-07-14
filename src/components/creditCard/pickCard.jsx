// import { Slide } from "react-awesome-reveal";
import pick from "../../assets/pickacard.svg";
import cards from "../../assets/cards.png";
import menu from "../../assets/menus.png";




export default function PickCard () {
  return (
    <section className='pickcard'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-5">
            <img src={pick} alt="Pick a Card" className="img-fluid" />
          </div>
        </div>
        <div className="card-cc">
          <div className="row justify-content-between">
            <div className="col-sm-4">
              <h3 className="text-white">We made it easy, it takes just 5 steps and you will have your Hargon's credit card</h3>
            </div>
            <div className="col-sm-6">
              <img src={cards} alt="cards" className="img-fluid w-100 cards-" />
            </div>
          </div>
          <div className="row justify-content-end mt-5">
            <div className="col-sm-7">
              <img src={menu} alt="cards" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
