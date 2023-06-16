import home from "../../assets/own.svg";
import p from "../../assets/peo.svg";
import mortgage from "../../assets/stressfree.png";



export default function HomeOwnership () {
  return (
    <section className='ownership'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3 mt-5">
            <img src={home} alt="home ownership" className="img-fluid" style={{marginLeft: "-34px"}} />
            <h6 className="mt-5 ally">Make your home experience stress-free</h6>
            <p className="my-5 w-75">Your home should be your place of comfort, peace, and securty. With Hargon, you get the financial foundation you need to settle into the home of your dreams.</p>
            <img src={p} alt="home ownership" className="img-fluid" />
          </div>
          <div className="col-sm-6">
            <img src={mortgage} alt="mortgage" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
