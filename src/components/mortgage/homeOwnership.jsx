import mortgage from "../../assets/de-my.png";



export default function HomeOwnership () {
  return (
    <section className='ownership'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3 mt-5">
            <h2><span style={{color: "#23A323"}}>De-mystifying</span> Home<br/>Ownership</h2>
            <p className="mt-5 w-75 text-black">Owning a home doesn't have to be hard. With our financing options, you can simplify the entire process and move into your home. It's fast, and it's easy. What are you waiting for?</p>
          </div>
          <div className="col-sm-6">
            <img src={mortgage} alt="mortgage" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
