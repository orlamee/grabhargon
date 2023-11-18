import phone from "../../assets/dashboardview.svg"



export default function SemiFooter () {
  return (
    <section className='clients pt-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <div className="join pb-0">
              <div className="row">
                <div className="col-sm-7">
                  <h2 className="text-white">
                    Join Hargon today & experience a world of financial
                    <br/>possibilities.{" "}
                  </h2>
                  <h6 className="my-4">
                    Sign up for free and take control of your finances.
                  </h6>
                  <button className="btn-get">Get Started</button>
                </div>
                <div className="col-sm-5 mt-4">
                  <img src={phone} alt="join hargon" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-9">
          <p>
            Hargon is a fully licensed digital lending platform. Hargon offers
            innovative financial solutions including investments and credit
            services. Our credit solution allows businesses and individuals to
            buy anything and pay for it in installments across online and
            offline Merchants by providing them with instant access to credit at
            the point of checkout.
          </p>
        </div>
      </div>
    </section>
    
  )
}
