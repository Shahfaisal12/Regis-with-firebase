import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase-auth";
import { getAuth } from 'firebase/auth'
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MDBInput } from "mdb-react-ui-kit";

import { getDatabase, ref, child, push, update } from "firebase/database";

const UpdateUser = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState([]);

    // const navigate = useNavigate();
    const userCollecionRef = collection(db, "user");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollecionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   console.log("Document data:", data);
    };
    getUsers();
  });
  


function writeNewPost(uid, username, email, name) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    username: username,
    email: email,
    name: name,
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'users')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}

    return (
        <>
            <div className="hero_bg">
                <div className="container">

                    <h3 className="text-center">Update User</h3>
                    <div className="card-body  ">
                        {user.map((user) =>

                            <>
                                <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' value={user.username} onChange={(e) => setName(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' value={user.name} onChange={(e) => setUsername(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' value={user.email} onChange={(e) => setEmail(e.target.value)} />
                                <button
                                    className="btn bg-primary text-white batn mt-4 w-100"
                                    onClick={writeNewPost}
                                >
                                    Update
                                </button>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateUser