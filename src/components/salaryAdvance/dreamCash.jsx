import cash from "../../assets/cash.svg";
import zero from "../../assets/zero.svg";
import ex from "../../assets/ex.svg";



export default function Dreams () {
  return (
    <section className='dyc bg-white'>
      <div className='container'>
        <div className="first-step">
          <div className="row justify-content-end">
            <div className="col-sm-4">
              <img src={cash} alt="cash" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-6">
              <h2 className="mb-4">Salary Advance</h2>
              <p>Need money urgently? Access a portion of your salary from your company using through our platform, making the process faster and more flexible.</p>
            </div>
          </div>
        </div>
        <div className="second-step pb-0">
          <div className="row justify-content-between">
            <div className="col-sm-4">
              <img src={zero} alt="cash" className="img-fluid w-100" style={{marginTop: "-240px"}} />
            </div>
            <div className="col-sm-8">
              <img src={ex} alt="cash" className="img-fluid w-100" style={{marginTop: "-491px"}} />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
