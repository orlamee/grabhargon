
import cell from "../../assets/cell.svg";


export default function ExpandBusiness() {
  return (
    <section className="expandbusiness">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h6>Expansion and growth</h6>
            <h2 className="w-75 mt-4">Expand your <span style={{color: "#FF823B"}}>business</span> with competitive credit.</h2>
          </div>
          <div className="col-sm-5">
            <h5 className="w-75 lef">With Hargon’s credit facility, you can fast-track your business growth, unlocking the numerous potentials and possibilities for the business</h5>
            <img src={cell} alt="cell" className="img-fluid mt-5" />
          </div>
        </div>
      </div>
    </section>
  )
}

