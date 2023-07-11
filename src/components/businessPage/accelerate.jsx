import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

export default function Accelerate() {
  const [ value, setValue ] = useState(0); 
  return (
    <section className="bringyour">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-7 text-center">
            <h3 className="mb-5">Accelerate your<br/>business</h3>
            <div style={{marginTop: "90px", marginBottom: "90px"}}>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label className="form-check-label" htmlFor="inlineRadio1">Start-up</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label className="form-check-label" htmlFor="inlineRadio2">5 years + established business</label>
              </div>
            </div>
            <h2 >What’s your company’s monthly revenue?</h2>
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
              <div><label htmlFor="customRange1" className="form-label">₦50,000</label></div>
              <RangeSlider
                variant='success'
                value={value}
                onChange={changeEvent => setValue(changeEvent.target.value)}
                tooltip='off'
                size='lg'
              />
              <div><label htmlFor="customRange1" className="form-label" style={{color: "#9CA3AF"}}>₦20,000</label></div>
            </div>
            <h2 >Loanable amount</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

