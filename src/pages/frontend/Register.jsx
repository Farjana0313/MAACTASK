import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/frontend/Footer'
import Header from '../../components/frontend/Header'

export default function Register() {
    return (
        <>
            <Header />
            <div className="login-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-content">
                                <div className="login-form">
                                    <div className="login-title">
                                        <h3>Create Account</h3>
                                        <p>Fill in the details below to create an account</p>
                                    </div>
                                    <form action="">
                                        <div>
                                            <div className="mb-5">
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name" />
                                            </div>
                                            <div className="mb-5">
                                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                                            </div>
                                            <div className="mb-5">
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your ID" />
                                            </div>
                                            <div className="mb-5">
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Mobile Number" />
                                            </div>
                                            <div className="mb-5">
                                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
                                            </div>
                                            <div className="mb-5">
                                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Confirm Password" />
                                            </div>
                                            <div class="mb-5">
                                                <select id="disabledSelect" class="form-select">
                                                    <option>Select Your Role</option>
                                                </select>
                                            </div>
                                            <div class="mb-5">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
                                                    <label class="form-check-label" for="disabledFieldsetCheck">
                                                        I read and agree to the <Link to=''>Terms & Conditions</Link>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <button type="submit" className="login-submit">Sign in</button>
                                            </div>

                                            <p>Already have an account? <Link to="/login"><span>Sign In</span></Link> </p>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    )
}
