import max from "../../assets/pawnscredit.png";



export default function PawnCredit () {
  return (
    <section className='pawncredit'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <h2 className="mb-4 text-black"><span style={{color: "#23A323"}}>Pawn</span> — Credit — Prosper </h2>
            <h6>Ready to make money off your assets?</h6>
            <p className="mt-4">Most valuables welcome: <span style={{color: "#000"}}>Jewelries, cars, electronics, and others are all acceptable</span></p>
            <button className="btn btn-primary btn-main rounded-pill px-5 py-3 mt-4">Pawn my asset</button>
          </div>
        </div>
        <div className="row justify-content-center" style={{marginTop: "100px"}}>
          <div className="col-sm-11 text-center">
            <img src={max} alt="Pawn Credit" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
