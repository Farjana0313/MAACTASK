import React from 'react';
import { FiBox } from "react-icons/fi";
export default function ProductFeature() {
    return (
        <div className='product-feature'>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="product-feature-content text-center">
                        <div className="col-md-12">
                            <p><span>Product Features</span></p>
                            <h3>Make more out of your data</h3>
                        </div>
                    </div>
                </div>
                <div className="feature-body">
                    <div className="row align-center">
                        <div className="col-md-4">
                            <div className="feature-body-content text-lg-end text-center">
                                <div className="feature-icon left">
                                    <FiBox />
                                </div>
                                <h4>Real-time analytics</h4>
                                <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                            </div>
                            <div className="feature-body-content text-lg-end text-center">
                                <div className="feature-icon left">
                                    <FiBox />
                                </div>
                                <h4>Intuitive dashboard</h4>
                                <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                            </div>
                            <div className="feature-body-content text-lg-end text-center">
                                <div className="feature-icon left">
                                    <FiBox />
                                </div>
                                <h4>Smart suggestions</h4>
                                <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-img">
                                <img src="/assets/img/product_feature_img.png" className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-body-content text-lg-start text-center">
                                <div className="feature-icon right">
                                    <FiBox />
                                </div>
                                <h4>Real-time analytics</h4>
                                <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                            </div>
                            <div className="feature-body-content text-lg-start text-center">
                                <div className="feature-icon right">
                                    <FiBox />
                                </div>
                                <h4>Intuitive dashboard</h4>
                                <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                            </div>
                            <div className="feature-body-content text-lg-start text-center">
                                <div className="feature-icon right">
                                    <FiBox />
                                </div>
                                <h4>Smart suggestions</h4>
                                <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
