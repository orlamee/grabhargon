import automated from "../../assets/grow.png";



export default function SavingsHero () {
  return (
    <section className='save-hero'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mt-5">
            <h2><span style={{color: "#23A323"}}>Grow and Diversify</span> your Cash Reserves</h2>
            <p className="mt-5 w-75">Make the most of your cash reserves and reach your business goals faster using Hargon's business savings.</p>
          </div>
          <div className="col-sm-6">
            <img src={automated} alt="savings" className="img-fluid w-100" />
          </div>
        </div>
        
      </div>
    </section>
    
  )
}
