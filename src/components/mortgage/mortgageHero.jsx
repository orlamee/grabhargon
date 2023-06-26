import home from "../../assets/home.png";



export default function MortgageHero () {
  return (
    <section className='mo-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h2 className="text-black">Your <span style={{color: "#23A323"}}>dream home </span>is possible</h2>
            <button
              className="btn btn-primary btn-main rounded-pill px-5 py-3 mt-4"
              href="#!"
            >
              Mortgage with Hargon
            </button>
          </div>
          <div className="col-sm-6 mt-4">
           <p className="text-black">Experience the thrills of owning your home</p>
           <p className="text-black">Dreaming of owning a home? With Hargon, it doesn't have to be a dream. Come onboard and enjoy affordable financing options, ensuring you get your ideal house.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-sm-10">
            <img src={home} alt="home" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
