import focus from "../../assets/finebabe.png";



export default function Focus () {
  return (
    <section className='focus pb-0'>
      <div className="container">
        <div className="row">
          <div className="col-sm-6" style={{marginTop: "100px"}}>
            <h2>Focus on your studies<br/>while we <span style={{color: "#F4EC01"}}>sort out your bills.</span></h2>
            <p className="mt-4 text-white">Funding your schooling internationally or locally can come easy with Hargon. Get a student loan that takes care of all your school worries. We believe in your dream and we will do everything we can to get you that degree!</p>
          </div>
          <div className="col-sm-6">
            <img src={focus} alt="focus" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
