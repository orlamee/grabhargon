import home from "../../assets/reliable.svg";



export default function Renting () {
  return (
    <section className='renting'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-6 mb-3">
            <img src={home} alt="home ownership" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5" style={{marginTop: "100px"}}>
            <h2 className="ally">Renting</h2>
            <h6 className="my-5">Grab your ideal home or office with Hargon’s credit</h6>
            <p className="w-75">Never let finances hold you back. Our convenient, flexible, and reliable credit solutions offers you all the financial backing you need to move into your ideal space.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
