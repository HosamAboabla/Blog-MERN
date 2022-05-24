

const Post = ({blog}) => {

    let d = new Date(blog.updatedAt);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return (
        <div className="post col-xl-4">
            <div className="post-thumbnail"><a href={blog.slug}>
                <img src={blog.thumbnail} alt="..." className="img-fluid" /></a></div>
            <div className="post-details">
            <div className="post-meta d-flex justify-content-between">
                <div className="date meta-last">{d.getDay()} {months[d.getMonth()]} | {d.getFullYear()}</div>
                <div className="category"><a href="#">{blog.topic && blog.topic.name}</a></div>
            </div><a href="post.html">
                <h3 className="h4">{blog.title}</h3></a>
            <p className="text-muted">{blog.description}</p>
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