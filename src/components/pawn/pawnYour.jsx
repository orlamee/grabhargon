import cash from "../../assets/period.svg";



export default function PawnYour () {
  return (
    <section className='pawns'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h2 className="text-white">Benefits of Hargon Pawn</h2>
          </div>
        </div>
        <div className="row justify-content-between mt-9">
          <div className="col-sm-4 mb-3">
            <div className="green-card text-center">
              <img src={cash} alt="instant cash" className="img-fluid" />
              <h5 className="text-white my-4">Instant Cash</h5>
              <p className="text-white">Hargon Pawn offers a swift solution to your financial needs, providing immediate access to cash when you need it most. Say goodbye to lengthy approval processes and waiting periods.</p>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="green-card text-center">
              <img src={cash} alt="instant cash" className="img-fluid" />
              <h5 className="text-white my-4">No Credit Checks</h5>
              <p className="text-white">Unlike traditional lending institutions, Hargon Pawn does not require credit checks. Your loan amount is determined solely by the value of your collateral, making it accessible to individuals with any credit history.</p>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="green-card text-center">
              <img src={cash} alt="instant cash" className="img-fluid" />
              <h5 className="text-white my-4">Retain Ownership</h5>
              <p className="text-white">We understand the sentimental and personal value your possessions hold. With Hargon Pawn, you retain ownership of your items, ensuring they are returned to you promptly upon loan repayment.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-sm-4 mb-3">
            <div className="green-card text-center">
              <img src={cash} alt="instant cash" className="img-fluid" />
              <h5 className="text-white my-4">Flexible Repayment Options</h5>
              <p className="text-white">We provide flexible repayment options to suit your financial situation. Whether you prefer to repay the loan in a lump sum or make periodic payments, we work with you to find the best solution.</p>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="green-card text-center">
              <img src={cash} alt="instant cash" className="img-fluid" />
              <h5 className="text-white my-4">Secure Storage</h5>
              <p className="text-white">Your valuable items are stored securely in our state-of-the-art facilities equipped with advanced security measures, offering you peace of mind throughout the loan period.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
