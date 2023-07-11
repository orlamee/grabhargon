
import bis from "../../assets/businesscredit.svg";
import boxes from "../../assets/boxes.svg";



export default function BusinessCredit () {
  return (
    <section className='businesscredit pb-0'>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <span className="allow-up bg-white" style={{color: "#228B22"}}>BUSiness Credit</span>
          </div>
        </div>
        <div className="row justify-content-between mt-5">
          <div className="col-sm-6">
            <img src={bis} alt="Accelerate your business goals with Accessible credit" className="img-fluid" />
          </div>
          <div className="col-sm-4 mt-4">
            <p className="text-white">Hargon’s business credit helps you seamlessly run your business operations without financial limitations, reaching your business goals and objectives faster.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-lg-12">
            <img src={boxes} alt="Accelerate your business goals with Accessible credit" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
