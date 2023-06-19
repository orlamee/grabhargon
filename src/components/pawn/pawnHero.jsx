import pawn from "../../assets/pawn.png";



export default function PawnHero () {
  return (
    <section className='pawn-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6">
            <span className="p-shop">PAWN SHOP</span>
            <h2 className="mt-5 mb-4">Pawn made </h2>
            <h2><span className="sim">Simple</span></h2>
            <p className="mt-5 w-75">Turn your valuable assets into temporary cash flows and enjoy the hassle-free financial boost that comes with it.</p>
            <button className="btn btn-primary btn-main rounded-pill px-5 py-3 mt-4">Pawn my asset</button>
          </div>
          <div className="col-sm-6 mt-5">
            <img src={pawn} alt="pawn shop" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
