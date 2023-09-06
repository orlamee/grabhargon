import capital from "../../assets/fuel.png";



export default function CapitalHero () {
  return (
    <section className='capital-hero pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-9">
            <h2 className="text-white">Fuel your <span style={{color: "#FFBD00"}}>business</span> & Unlock new capabilities with <span className="ally">Hargon</span></h2>
          </div>
        </div>
        <div className="row mt-5 justify-content-between">
          <div className="col-sm-4 mb-3">
            <p className="text-white">Looking for a partner that will help you unlock the potential of your business?</p>
            <p className="mt-5 text-white">Welcome to Hargon, your reliable loan partner. Our loans are flexible, competitive, rich with favourable terms and tailored to ensure your business succeeds.</p>
          </div>
          <div className="col-sm-7">
            <img src={capital} alt="capital loans" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
