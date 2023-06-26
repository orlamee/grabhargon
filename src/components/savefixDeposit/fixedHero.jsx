import simply from "../../assets/sfimg.png";



export default function FixedHero () {
  return (
    <section className='fixed-hero'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-7 mb-3">
            <span className="start">Start Building Your Financial Safety Net Today</span>
            <h2 className="mt-5">Grow your <span style={{color: "#FFBD00" , fontSize: "65px"}}>Wealth</span></h2>
            <h3 className="">One Savings<span style={{color: "#000" , fontSize: "45px"}}> at a Time</span></h3>
          </div>
          <div className="col-sm-5">
            <p className="w-75">Save your funds with us when you have them, and we'll provide a secure place to keep your money while ensuring flexible access for withdrawals when you need it.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <img src={simply} alt="Savings always secure" className="img-fluid w-100 sfimg" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
