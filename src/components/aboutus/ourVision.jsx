import left from "../../assets/aboutleft.png";
import vision from "../../assets/ourvision.svg";


export default function OurV () {
  return (
    <section className='our-v'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={left} alt="about-us" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 mt-5">
            <img src={vision} alt="our vision" className="img-fluid mb-5" />
            <p>We want to simplify the lending process and make it accessible to everyone while ensuring a seamless user experience.</p>
            <p className="my-4">We also understand that time is money, so we leverage technology to enable quick and efficient loan processing, ensuring you promptly receive the funds you need.</p>
            <p>With a team of dedicated professionals, we are committed to guiding you every step of the way. Our experts will work closely with you to understand your financial goals and recommend the most suitable credit solution.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
