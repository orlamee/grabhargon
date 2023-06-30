import wallet from "../../assets/walletimg.png";



export default function WalletHero () {
  return (
    <section className='wallet-hero pb-0 pe-0'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0 mt-5">
            <h2 className="mb-4">Get your groove on with <span style={{color: "#23A323"}}>Virtual Money.</span></h2>
            <p className="w-75">Take your money with you, whenever, wherever. Enjoy the convenience of digital money and its hassle-free approach to spending and receiving funds.</p>
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={wallet} alt="hargon wallet" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
