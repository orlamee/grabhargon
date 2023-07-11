import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';



export default function LoanRange() {
  const [ value, setValue ] = useState(0); 

  return (
    <section className='loanrange'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <div className="loany">
              <div className="row justify-content-center">
                <div className="col-sm-9 text-center bringyour">
                  <h3 className="mb-5 text-white">Bring your plans to reality</h3>
                  <div style={{marginTop: "90px", marginBottom: "90px"}}>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                      <label className="form-check-label text-white" htmlFor="inlineRadio1">Not-employed</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                      <label className="form-check-label text-white" htmlFor="inlineRadio2">Employed</label>
                    </div>
                  </div>
                  <h2 className="text-white">What’s your monthly income?</h2>
                  <div style={{marginTop: "50px", marginBottom: "50px"}}>
                    <div><label htmlFor="customRange1" className="form-label text-white">₦50,000</label></div>
                    <RangeSlider
                      variant='light'
                      value={value}
                      onChange={changeEvent => setValue(changeEvent.target.value)}
                      tooltip='off'
                      size='lg'
                    />
                    <div><label htmlFor="customRange1" className="form-label" style={{color: "#ffffff7a"}}>₦20,000</label></div>
                  </div>
                  <h2 className="text-white">Loanable amount</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
