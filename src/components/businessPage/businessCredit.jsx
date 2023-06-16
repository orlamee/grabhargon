
import bis from "../../assets/businesscredit.svg";
import accele from "../../assets/accel.svg";
import boxes from "../../assets/boxes.svg";



export default function BusinessCredit () {
  return (
    <section className='businesscredit'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <img src={bis} alt="Accelerate your business goals with accessible  credit." className="img-fluid mb-4" />
            <img src={accele} alt="bis" className="img-fluid" />
            <p className="text-white mt-5">Hargon’s business credit helps you seamlessly run your business operations without<br/>financial limitations, reaching your business goals and objectives faster.</p>
            <img src={boxes} alt="bis" className="img-fluid mt-5" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
