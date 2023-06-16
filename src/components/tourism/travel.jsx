import places from "../../assets/tl.png";



export default function Travel() {
  return (
    <section className='travel'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3" style={{marginTop: "120px"}}>
            <h2 className="ally">Travel on credit</h2>
            <p className="mt-4">Explore the offer of a lifetime. Enjoy low interest and competitive rates when you take out tourism loans from Hargon.</p>
          </div>
          <div className="col-sm-6">
            <img src={places} alt="tourism loans" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
