import payday from "../../assets/title.svg";
import loans from "../../assets/loa.svg";



export default function PDLoans () {
  return (
    <section className='pd-loan'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-4 mb-3" style={{marginTop: "100px"}}>
            <img src={payday} alt="payday loans" className="img-fluid" />
            <h6 className="mt-4" style={{color: "#228B22"}}>Short on cash? Why not explore payday</h6>
            <h6 className="mt-5">Our payday loans offer a convenient way to tackle your immediate cash needs with minimal requirements and fast approval.</h6>
          </div>
          <div className="col-sm-6 mb-3">
            <img src={loans} alt="payday" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
