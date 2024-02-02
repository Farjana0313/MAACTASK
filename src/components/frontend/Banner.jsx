import React from 'react'

export default function Banner() {
  return (
    <div className='slider-bg'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-content text-center">
              <h1>Analytics that transform your <br /> product inside-out</h1>
              <div className="d-flex gap-4 justify-content-center banner-btn">
                <button className='banner-btn-req'>Request for Demo</button>
                <button className='banner-btn-download'>Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
