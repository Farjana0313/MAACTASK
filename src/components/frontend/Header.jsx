import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className='header fixed-top'>
                <div className="container pt-3">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="header-logo">
                                <Link to='/' ><img src="/assets/img/logo.png" className='img-fluid' alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='d-flex gap-4 justify-content-lg-end'>
                                <Link to="/login">
                                    <button className='login'>Login</button>
                                </Link>
                                <Link to='/register'>
                                    <button className='register_btn'>Registration</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}
