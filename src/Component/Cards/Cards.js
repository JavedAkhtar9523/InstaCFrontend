import "./Cards.css"

const Cards=(probs)=>{
    console.log(probs)
    return(
        <>
            {probs?.posts.map((posts,index) => {
                // console.log()
                return (
                    <div className="outer-box">
                        <div className="inner-box">
                            <div className="logo-1">
                                <div className="card-name">{posts.name} </div>
                                <p className="card-location">{posts.location}</p>

                            </div>
                            <div className="dot">
                                <i className="fa-solid fa-ellipsis fa-lg (50% increase)"></i>
                            </div>

                        </div>
                        <div className="image-post">
                            <img src={`https://insta-clone-689d.onrender.com/image/${posts?.image}`} key={index} alt="logo" />
                        </div>

                        <div className="lastdiv">
                            <div>
                                <i className="fa fa-heart-o like " aria-hidden="true"></i>
                                <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                <p>{`${posts.likes} likes`}</p>
                            </div>
                            <div >
                                <p>{posts.date}</p>
                            </div>
                        </div>
                        <p className="card-desc">{posts.description}</p>


                    </div>
                )
            })}

        
        
        
        </>
    )
}




export default Cards;