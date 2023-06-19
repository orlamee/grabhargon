import pawnshop from "../../assets/repawn.svg";
import pawn from "../../assets/pawnshop.png";



export default function Pawns () {
  return (
    <section className='pawncredit pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <img src={pawnshop} alt="Pawn, Re-pawn, and Rollover" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6">
            <img src={pawn} alt="Hargon’s pawnshop platform anyday anytime." className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
