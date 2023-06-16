import save from "../../assets/save-simply.svg";
import simply from "../../assets/save.png";



export default function FixedHero () {
  return (
    <section className='fixed-hero'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3" style={{marginTop : "100px"}}>
            <img src={save} alt="Save simply, save smarter" className="img-fluid" />
            <p className="mt-5 w-87">Amazing possibilities and benefits await when you save on Hargon. Our platform leverages technology and innovative financial experts to automate your savings, visualize your progress, and make your money work better for you.</p>
          </div>
          <div className="col-sm-6">
            <img src={simply} alt="save simply" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
