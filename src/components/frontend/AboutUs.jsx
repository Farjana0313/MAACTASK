import React from 'react'

export default function AboutUs() {
    return (
        <div className='slider-bg'>
            <div className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-img">
                                <img src="/assets/img/about-img.png" className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-content">
                                <p><span>About Us</span></p>
                                <h3>A dedicated solution for <br /> startups and enterprises</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <hr />
                            </div>
                            <div className="textimonial-section d-flex gap-4">
                                <div className='testimonial-img'>
                                    <img src="/assets/img/testimonial-img.png" className='img-fluid' alt="" />
                                </div>
                                <div className='testimonial-content'>
                                    <p>"Fieldx is for teams that care about their product growth."</p>
                                    <h4>CEO, FieldX</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="counter-content">
                                <img src="/assets/img/monitor-mobbile.png" className='img-fluid' alt="" />
                                <h3>
                                    10+
                                </h3>
                                <p>Platforms Created</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-content">
                                <img src="/assets/img/people.svg" className='img-fluid' alt="" />
                                <h3>
                                1559+
                                </h3>
                                <p>Total Users</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-content">
                                <img src="/assets/img/user.svg" className='img-fluid' alt="" />
                                <h3>
                                    10+
                                </h3>
                                <p>Total Clients</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-content">
                                <img src="/assets/img/cup.svg" className='img-fluid' alt="" />
                                <h3>
                                300 Days
                                </h3>
                                <p>In Operations</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
