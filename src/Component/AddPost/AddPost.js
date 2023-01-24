import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import Navheader from "../NavHeader/NavHeader";
import "./AddPost.css"

const AddPost = () => {

    const [imageFile, setFile] = useState("")
    const [author, setName] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescr] = useState("")
    const [flag,setFlag]=useState(true)

    const uploadPost = () => {
        const formdata = new FormData();
        formdata.append('name', author)
        formdata.append('location', location)
        formdata.append('description', description)
        formdata.append('image', imageFile)

        formdata.forEach((val,key)=>{console.log(`${val}:${key}`)})
        fetch("https://insta-clone-689d.onrender.com/add", {
            method: "POST",
            body: formdata
        })
        setFlag(flag)
    }





    return (
        <>
            <Navheader />

          {flag && <div className="form">

                 <div className="form-place">
                    <div className="file">
                        <input type="file" onChange={(e) => { console.log(e);setFile(e.target.files[0]) }} />
                    </div>
                    <div className="input-line2">
                        <input placeholder="Author" value={author} onChange={(e) => setName(e.target.value)} />
                        <input placeholder="Location" value={location} onChange={(e) => { setLocation(e.target.value) }} />
                    </div>
                    <div className="descr">
                        <input placeholder="Decription" value={description} onChange={(e) => { setDescr(e.target.value) }} />
                    </div>
                </div>
            <Link className="button" to={"/view"}>
            <button onClick={uploadPost}>Post</button>
            
            </Link>
               
            
            </div>}
        </>
    )
}

export default AddPost;