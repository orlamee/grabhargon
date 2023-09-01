
import loans from "../../assets/salfull.png";



export default function PDLoans () {
  return (
    <section className='pyday pb-0'>
      <div className='container'>
        <div className=" row justify-content-center ">
          <div className="col-sm-9  text-center mb-4">
            <h2 className="mb-5">
            Salary
            <span style={{color: "#23A323"}}>  Loans </span>
             
            </h2>
            <p className="mt-2 w-50 m-auto"> 
            Ensure your employees are happy and motivated by meeting your financial obligations to them through our easy-to-use and flexible credit platform.
            </p>
          </div>
          
            <img src={loans} alt="payday" className="img-fluid w-100" />
          
        </div>
      </div>
    </section>
    
  )
}
