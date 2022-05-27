

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
                    <img src={blog.user && blog.user.profile} alt="..." className="img-fluid" /></div>
                <div className="title"><span>{ blog.user && `${blog.user.firstName} ${blog.user.lastName}`}</span></div></a>
            </div>
            </div>
        </div>
      
    )
  }
  
  export default Post