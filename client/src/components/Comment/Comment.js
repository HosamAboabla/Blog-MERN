

const Comment = () => {


    return (
        <div className="comment">
            <div className="comment-header d-flex justify-content-between">
                <div className="user d-flex align-items-center">
                <div className="image">
                    <img src="img/user.svg" alt="..." className="img-fluid rounded-circle" /></div>
                <div className="title"><strong>Jabi Hernandiz</strong><span className="date">May 2016</span></div>
                </div>
            </div>
            <div className="comment-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        </div>
      
    )
  }
  
  export default Comment