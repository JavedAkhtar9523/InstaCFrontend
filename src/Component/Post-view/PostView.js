import { useEffect, useState } from "react"
import Cards from "../Cards/Cards";
import Navheader from "../NavHeader/NavHeader";

// import pic from "../Image/10x.jpeg"

const PostView = () => {
    const [posts, setPosts] = useState(null);
  

    const fetchAllPost = async()=>{
        const resp=await fetch(`https://insta-clone-689d.onrender.com/view`);
        setPosts(await resp.json())
    }

    useEffect(()=>{
        fetchAllPost()
    },[])
    if(posts===null){
        return(
            <>
            <Navheader/>
            <h1 >Loading.....</h1>
            </>
        )
    }
    return (
        <div>
            <Navheader/>
           <Cards posts={posts} key={posts.id}/>
        
        </div>
    )
}
export default PostView;