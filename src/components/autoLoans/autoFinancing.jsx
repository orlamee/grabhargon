import rubies from "../../assets/rubies.png";


export default function AutoFinancing () {
  return (
    <section className='auto-fin pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-4" style={{marginTop: "160px"}}>
            <h2>Why our <span style={{color: "#23A323"}}>Auto-financing works</span> for you</h2>
          </div>
          <div className="col-sm-8">
            <img src={rubies} alt="auto loans" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
