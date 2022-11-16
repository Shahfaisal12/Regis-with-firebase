
import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBCol, MDBRow,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from '../../firebase-auth';
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'

function App() {

    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [repassword, setRepassword] = useState()

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem("auth");
        if (authToken) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const handleAction = (id) => {

        const authentication = getAuth();
        if (id === 2) {
            createUserWithEmailAndPassword(authentication, name, username, email, password, repassword)
                .then((res) => {

                    navigate("/dashboard");
                    sessionStorage.setItem("auth", res._tokenResponse.refreshToken);

                    setDoc(doc(db, "users", res.user.uid), {
                        uid: res.user.uid,
                        name: name,
                        username: username,
                        email: email,
                        password: password,
                        repassword: repassword
                    });
                })
                .catch((e) => {
                    if (e.code === "auth/wrong-password") {
                        toast.error("please check the password");
                    }
                    if (e.code === "auth/user-not-found") {
                        toast.error("please check the email");
                    }
                });
        }

        if (id === 1) {
            signInWithEmailAndPassword(authentication, email, password)
                .then((res) => {
                    navigate("/dashboard");
                    sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
                })
                .catch((e) => {
                    if (e.code === "auth/wrong-password") {
                        toast.error("please check the password");
                    }
                    if (e.code === "auth/user-not-found") {
                        toast.error("please check the email");
                    }
                });
        }
    }

    return (
        <MDBContainer className="p-3 my-5">
            <MDBRow>
                <ToastContainer />
                <MDBCol col='10' md='6' className='d-flex align-items-center justify-content-center'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="" />
                </MDBCol>

                <MDBCol col='10' md='6'>
                    <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                Login
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                Register
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>

                        <MDBTabsPane show={justifyActive === 'tab1'}>

                            <div className="text-center mb-3">
                                <p>Sign in with:</p>

                                <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm" />
                                    </MDBBtn>
                                </div>

                                <p className="text-center mt-3">or:</p>
                            </div>

                            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e) => setPassword(e.target.value)} />

                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <MDBBtn className="mb-4 w-100" onClick={() => handleAction(1)}>Sign in</MDBBtn>
                            <p className="text-center">Not a member? <a href="#!" className='link-danger' onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Register</a></p>

                        </MDBTabsPane>

                        <MDBTabsPane show={justifyActive === 'tab2'}>

                            <div className="text-center mb-3">
                                <p>Sign un with:</p>

                                <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm" />
                                    </MDBBtn>
                                </div>

                                <p className="text-center mt-3">or:</p>
                            </div>

                            <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' onChange={(e) => setName(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' onChange={(e) => setUsername(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={(e) => setPassword(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Re-Password' id='form1' type='password' onChange={(e) => setRepassword(e.target.value)} />

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                            </div>

                            <MDBBtn className="mb-4 w-100" onClick={() => handleAction(2)} >Sign up</MDBBtn>

                        </MDBTabsPane>

                    </MDBTabsContent>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default App;