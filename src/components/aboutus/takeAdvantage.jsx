import ta from "../../assets/babe.png";


export default function TakeAdvantage () {
  return (
    <section className='ta pb-0'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5" style={{marginTop: "150px"}}>
            <h2 className="text-white mb-5">Take Advantage Today</h2>
            <p className="text-white w-87">What are you waiting for? Experience the convenience, flexibility, and peace of mind of choosing Hargon credit. Explore our credit options today and take the first step towards achieving your financial dreams.</p>
            <h6 className="mt-4 text-white">Hargon- Credit anywhere, anytime.</h6>
          </div>
          <div className="col-sm-6">
            <img src={ta} alt="about us" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
