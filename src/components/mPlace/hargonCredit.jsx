import cards from "../../assets/cards.svg";



export default function HargonCredit () {
  return (
    <section className='hc pb-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <h2 className="ally">Hargon Credit Card</h2>
            <p className="mt-5 mb-3">Enjoy flexible payments on the go with Hargon’s Credit Card.</p>
            <p>Need funds on the go? Hargon’s credit card offers you instant access to credit. With our wallet, you<br/>never have to worry about long wait times and get the financial flexibility you deserve.</p>
          </div>
        </div>
        <div className="row justify-content-center" style={{marginTop : "100px"}}>
          <div className="col-sm-6 text-center">
            <img src={cards} alt="cards" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
