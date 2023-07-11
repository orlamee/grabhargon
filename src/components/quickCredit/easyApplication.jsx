import hargon from "../../assets/shadow.png";


export default function EasyApplication () {
  return (
    <section className='three pb-0' style={{marginBottom: "-191px"}}>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h2>Easy <span style={{color: "#23A323"}}>Application</span></h2>
            <p className="text-black mt-5">Apply using a phone, tablet, or laptop. We simplified the<br/> process just for you.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-12 text-center">
            <img src={hargon} alt="quick loan" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
