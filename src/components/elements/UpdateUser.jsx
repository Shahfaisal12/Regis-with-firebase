import React, { useState } from "react";
import { db } from "../../firebase-auth";
import "react-toastify/dist/ReactToastify.css";
import { MDBInput } from "mdb-react-ui-kit";
// import { getDatabase, ref, child, push, update } from "firebase/database";
import { doc, updateDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";

const UpdateUser = () => {

    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()

    const { id } = useParams();
    console.log(id)

    function handleUpdate(e) {
        e.preventDefault();
        const examcollref = doc(db, 'users', id)
        console.log(examcollref)
        updateDoc(examcollref, {
            name: name,
            email: email,
            username: username
        }).then(response => {

            toast('Data Update Successfully!')

        }).catch(error => {
            
            toast('cannot be deleted')
        })
    }
    

    return (
        <>
            <div className="">
                <div className="container" style={{ maxWidth: '500px' }}>

                    <ToastContainer />
                    <h3 className="text-center">Update User</h3>
                    <div className="card-body  ">
                        <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' placeholder="" onChange={(e) => setName(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' placeholder="" onChange={(e) => setUsername(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        <button
                            className="btn bg-primary text-white batn mt-4 w-100"
                            onClick={handleUpdate}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateUser