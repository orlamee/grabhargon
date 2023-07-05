import autohero from "../../assets/autoloan.png";


export default function AutoHero () {
  return (
    <section className='auto-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-7 mb-3">
            <img src={autohero} alt="auto loans" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 mb-3 auto-h">
            <h2>Adventure on <span style={{color: "#23A323"}}>Wheels</span></h2>
            <p className="mt-4 w-75">Take the bold step towards ensuring auto-financing loans, giving you the confidence you need to drive and flex your dream vehicles.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
