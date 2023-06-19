import pawns from "../../assets/pawns.png";



export default function PawnYour () {
  return (
    <section className='pawns pb-0'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0 mt-5">
            <h2>Pawn your way out</h2>
            <p className="mt-5 w-87 text-white">Maximize the value of your assets  on our pawnshop platform and get the funds you need to turn your financial problems into solutions</p>
          </div>
          <div className="col-lg-5 offset-md-1 p-0 mt-5 pe-0">
            <img src={pawns} alt="pawn" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
