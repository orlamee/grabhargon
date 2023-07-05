import cash from "../../assets/fuell.png";


export default function Fuel () {
  return (
    <section className='good' style={{background: "#F2FCF2"}}>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={cash} alt="cash-flow" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 mt-3">
            <h2><span style={{color: "#23A323"}}>Unlimited financial fuel</span> for new projects</h2>
            <p className="mt-5 w-87">Bridge the cash gap, enjoy financial support from Hargon, and turn your POs into working capital, easily fulfilling all your project obligations and demands.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
