import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from 'react';



const ForgotPassword = () => {
    const [email, setEmail] = useState()

   const navigate = useNavigate();
    const updateEmail = async () => {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                navigate("/registration");
            })
            .catch((err) => {
                if (err.code === "auth/user-not-found") {
                    toast.error("please check the email");
                }
            });
    }

    return (

        <div className="form-section py-5">
            <Container fixed>
                <ToastContainer />

                <Card className='bg-orange p-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                        className='text-center'>
                        <h2 className="fw-bold mb-2 text-uppercase">Forgot Form</h2>
                        <p className="mb-5">Please enter your Email</p>
                        <TextField className='mb-5' id="email" fullWidth label="Email" type="email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                        <Button variant="contained" onClick={updateEmail}>Forgot</Button>
                        <p className="mb-0">Already an account? <Link to="/registration" className="text-muted fw-bold">Login</Link></p>
                    </Box>
                </Card>
            </Container>
        </div>

    )
}

export default ForgotPassword;