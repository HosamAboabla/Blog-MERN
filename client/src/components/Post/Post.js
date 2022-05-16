

const Post = () => {


    return (
        <div className="post col-xl-6">
            <div className="post-thumbnail"><a href="post.html">
                <img src="https://hosamaboabla-ecommerce.herokuapp.com/images/headphones.jpg" alt="..." className="img-fluid" /></a></div>
            <div className="post-details">
            <div className="post-meta d-flex justify-content-between">
                <div className="date meta-last">20 May | 2016</div>
                <div className="category"><a href="#">Business</a></div>
            </div><a href="post.html">
                <h3 className="h4">Alberto Savoia Can Teach You About Interior</h3></a>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <div className="post-footer d-flex align-items-center"><a href="#" className="author d-flex align-items-center flex-wrap">
                <div className="avatar">
                    <img src="https://hosamaboabla-ecommerce.herokuapp.com/images/headphones.jpg" alt="..." className="img-fluid" /></div>
                <div className="title"><span>John Doe</span></div></a>
                <div className="date"><i className="icon-clock"></i> 2 months ago</div>
                <div className="comments meta-last"><i className="icon-comment"></i>12</div>
            </div>
            </div>
        </div>
      
    )
  }
  
  export default Post