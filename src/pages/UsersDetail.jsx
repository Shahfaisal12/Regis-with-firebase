
import {db} from '../firebase-auth';
import React,{useState,useEffect} from 'react';

function App() {
  const [blogs,setBlogs]=useState([])
  const fetchBlogs=async()=>{
    const response=db.collection('users');
    const data=await response.get();
    data.docs.forEach(item=>{
     setBlogs([...blogs,item.data()])
    })
  }
  useEffect(() => {
    fetchBlogs();
  }, [])
  return (
    <div className="App">
      {
        blogs && blogs.map(blog=>{
          return(
            <div className="blog-container">
              <h4>{blog.email}</h4>
              <p>sfsafsafsafsdfssdf sdfsad fsdaf asdfasdfsadfsdafs fsdf sdfsadf sdafasfsadfs adfsdfsadfasd fsadf f</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;