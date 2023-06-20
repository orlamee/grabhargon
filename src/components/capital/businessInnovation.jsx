import bis from "../../assets/businessinn.svg";



export default function BusinessInnovation () {
  return (
    <section className='bi-sec'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-4 mb-3">
            <img src={bis} alt="business Innovation" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-end mt-5">
          <div className="col-sm-4 mb-3">
            <p className="text-white">Put your competitors on notice</p>
            <p className="text-white">Get the funding you need to drive innovative solutions, marketing strategies, and investment in talents, giving  your business competitive edge in the industry.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
