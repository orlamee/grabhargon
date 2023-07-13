import automated from "../../assets/stepinto.png";



export default function StepInto () {
  return (
    <section className='save-hero' style={{background: "#F2FCF2"}}>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={automated} alt="savings" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6 mt-5">
            <h2 style={{fontSize: "55px"}}>Step into <span style={{color: "#23A323"}}>New possibilities</span> with a business savings account</h2>
            <p className="mt-5 w-75">Unlock new possibilities with our dynamic saving features, ushering your business into a world of exciting benefits.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
