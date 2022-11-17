import React, { useState } from "react";
import { db } from "../../firebase-auth";
import "react-toastify/dist/ReactToastify.css";
import { MDBInput } from "mdb-react-ui-kit";
// import { getDatabase, ref, child, push, update } from "firebase/database";
import { doc, updateDoc } from "firebase/firestore";



const UpdateUser = () => {

    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    // function writeNewPost(uid, username, name, email) {
    //     const db = getDatabase();
    //     // A post entry.
    //     const postData = {
    //         name: name,
    //         username: username,
    //         email: email,
    //     };
    //     // Get a key for a new Post.
    //     const newPostKey = push(child(ref(db), 'users')).key;

    //     // Write the new post's data simultaneously in the posts list and the user's post list.
    //     const updates = {};
    //     updates['/posts/' + newPostKey] = postData;
    //     updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    //     return update(ref(db), updates);
    // }
    
    function handleUpdate(e){
        e.preventDefault();
        const examcollref = doc(db,'users', "id")
        console.log(examcollref)
        updateDoc(examcollref,{
          name:name,
          email:email,
          username: username
        } ).then(response => {
          alert("updated")
        }).catch(error =>{
          console.log(error.message)
        })
       
      } 

    return (
        <>
            <div className="">
                <div className="container w-50">
                    <h3 className="text-center">Update User</h3>
                    <div className="card-body  ">
                        <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' onChange={(e) => setName(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' onChange={(e) => setUsername(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} />
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