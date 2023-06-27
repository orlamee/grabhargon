import dashboard from "../../assets/qcloan.png";


export default function WhyQuick () {
  return (
    <section className='digi pb-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h2 className="text-white" style={{fontSize: "65px" , lineHeight: "85px" , fontFamily : "syne-bold"}}>Why our <span style={{color: "#FFBD00"}}>quick credit</span> works for You</h2>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-10 text-center">
            <img src={dashboard} alt="quick loan for you" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
