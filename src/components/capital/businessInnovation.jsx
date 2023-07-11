import graphs from "../../assets/graphs.png";



export default function BusinessInnovation () {
  return (
    <section className='bi-sec'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-4 mb-3">
            <h2 className="text-white mb-5">Business innovations</h2>
            <p className="text-white">Put your competitors on notice</p>
            <p className="text-white">Get the funding you need to drive innovative solutions, marketing strategies, and investment in talents, giving  your business competitive edge in the industry.</p>
          </div>
          <div className="col-sm-6">
            <img src={graphs} alt="loans" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
