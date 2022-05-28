

const Post = ({blog}) => {

    let d = new Date(blog.updatedAt);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return (
        <div className="post col-xl-4">
            <div className="post-thumbnail"><a href={blog.slug}>
                <img src={blog.thumbnail} alt="..." className="img-fluid" /></a></div>
            <div className="post-details">
            <div className="post-meta d-flex justify-content-between">
                <div className="category"><a href="#">{blog.topic && blog.topic.name}</a></div>
            </div><a href={blog.slug}>
                <h3 className="h4">{blog.title}</h3></a>
            <p className="text-muted">{blog.description}</p>
            <div className="post-footer d-flex align-items-center"><a href="#" className="author d-flex align-items-center flex-wrap">

                <div className="title"><span>{ blog.user && `by ${blog.user.firstName} ${blog.user.lastName} | ${d.getDay()} ${months[d.getMonth()]} ${d.getFullYear()}`}</span></div></a>
            </div>
            </div>
        </div>
      
    )
  }
  
  export default Post