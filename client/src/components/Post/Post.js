

const Post = ({thmbnail , title , description , updatedAt , tag}) => {

    let d = new Date(updatedAt);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return (
        <div className="post col-xl-4">
            <div className="post-thumbnail"><a href="post.html">
                <img src={thmbnail} alt="..." className="img-fluid" /></a></div>
            <div className="post-details">
            <div className="post-meta d-flex justify-content-between">
                <div className="date meta-last">{d.getDay()} {months[d.getMonth()]} | {d.getFullYear()}</div>
                <div className="category"><a href="#">{tag}</a></div>
            </div><a href="post.html">
                <h3 className="h4">{title}</h3></a>
            <p className="text-muted">{description}</p>
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