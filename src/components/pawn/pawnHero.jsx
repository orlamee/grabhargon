import pawn from "../../assets/pawn.png";



export default function PawnHero () {
  return (
    <section className='pawn-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3 mt-3">
            <h2><span style={{color: "#23A323"}}>Unlock Instant Cash</span> with Hargon Pawn Services</h2>
            <p className="mt-5 w-75">At Hargon, we understand that life sometimes presents unexpected financial challenges. That's why we offer our convenient and reliable Pawn Services, allowing you to access quick cash by leveraging the value of your valuable assets.</p>
          </div>
          <div className="col-sm-6">
            <img src={pawn} alt="pawn shop" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
