import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/frontend/Footer';
import Header from '../../components/frontend/Header';
import { InputTextValue, SetConfirmpassStatusFalse, SetSigninStatusFalse, SignInData } from './_redux/action/LoginAction';

function Login() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const [remember, setRemember] = useState(true);
    const navigate = useNavigate();

    const loginInput = useSelector((state) => state.loginInfo.loginInput);
    const isLoadLogIn = useSelector((state) => state.loginInfo.isLoadLogIn);
    const afterSignInData = useSelector(
        (state) => state.loginInfo.afterSignInData
    );

    useEffect(() => {
        const isPsLoggedIn = Cookies.get("is_ps_logged_in") || "false"; // Get the value from the cookie

        if (isPsLoggedIn === "true") {
            navigate("/dashboard"); // Conditionally navigate based on the cookie value
        }

        dispatch(SetConfirmpassStatusFalse());
    }, [dispatch, navigate]);
    const handleRemember = () => {
        setRemember(!remember);
        dispatch(InputTextValue("remember", remember));
    };
    const handleChangeTextInput = (name, value) => {
        dispatch(InputTextValue(name, value));
    };
    const handleSignIn = (data) => {
        dispatch(SignInData(data));
    };
    useEffect(() => {
        if (afterSignInData) {
            navigate(`/dashboard`);
        }
        dispatch(SetSigninStatusFalse());
    }, [afterSignInData, dispatch, navigate]);

    const change = () => {
        setShow(!show);
    };
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
                                        <h3>Welcome Back!</h3>
                                        <p>Please login to your account</p>
                                    </div>
                                    <div>
                                        <div className="mb-5">
                                            <input type="text" className="form-control" placeholder="Enter Your Email" value={loginInput.employeeId}
                                                onChange={(e) =>
                                                    handleChangeTextInput(
                                                        "employeeId",
                                                        e.target.value.toLowerCase()
                                                    )
                                                } />
                                        </div>
                                        <div className="mb-5">
                                            <input type="password" className="form-control" placeholder="Password" value={loginInput.password}
                                                onChange={(e) =>
                                                    handleChangeTextInput("password", e.target.value)
                                                }
                                                onKeyPress={(event) => {
                                                    if (event.key === "Enter") {
                                                        handleSignIn(loginInput);
                                                    }
                                                }} />
                                        </div>
                                        <div className="mb-5"><button className="login-submit" onClick={() => handleSignIn(loginInput)}>Sign in</button>
                                            {/* <Link to='/dashboard'><button onClick={() => handleSignIn(loginInput)} type="submit" className="login-submit">Sign in</button></Link> */}
                                        </div>
                                        <p>Don’t have any account? <Link to="/register"><span>Sign Up</span></Link> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}
export default Login;