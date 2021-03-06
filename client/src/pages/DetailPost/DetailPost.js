
import useFetch from "../../useFetch";
import Loading from '../../components/Loading/Loading';
import Comment from "../../components/Comment/Comment";
import AddComment from "../../components/AddComment/AddComment";
import { useParams } from 'react-router-dom'

/*
let post = 
  {
      "_id": "62705035ab8ed426d05d831a",
      "slug": "learn-react",
      "title": "React crash course",
      "description": "this is a small react crash course",
      "thumbnail": "https://hosamaboabla-ecommerce.herokuapp.com/images/headphones.jpg",
      "keywords": [
          "react",
          "js"
      ],
      "tag" : "programming", 
      "body": "this is the body of react crash course",
      "createdAt": "2022-05-02T21:42:13.367Z",
      "updatedAt": "2022-05-02T21:42:13.367Z",
      "__v": 0
  }
*/



const DetailPost = () => {

    const { slug } = useParams();
    const link = `/api/blogs/list/${slug}`  ;
    const {data : post , error , isPending} = useFetch(link);
    console.log("blogs" , post);

    const commentsLink = `/api/comments/PostComments/${slug}`  ;
    const {data : comments , commentsError , commentsIsPending} = useFetch(commentsLink);
    console.log("comments" , comments);

    return (
      <header className="header">
        <div className="container">
            {error && <div> {error} </div>} 
            {isPending && <Loading/>}

            { post && <div className="row">
                <main className="post blog-post col-lg-12"> 
                  <div className="container">
                    <div className="post-single">
                      <div className="post-thumbnail">
                          <img src={post.thumbnail} alt="..." className="img-fluid" /></div>
                      <div className="post-details">
                        <div className="post-meta d-flex justify-content-between">
                          <div className="category"><a href="#">{post.topic && post.topic.name}</a></div>
                        </div>
                        <h1>{post.title}
                          <a href="#"><i className="fa fa-bookmark-o"></i></a></h1>
                        <div className="post-footer d-flex align-items-center flex-column flex-sm-row"><a href="#" className="author d-flex align-items-center flex-wrap">
                            <div className="avatar">
                                <img src={ post.user && post.user.profile } alt="..." className="img-fluid" /></div>
                            <div className="title"><span>{ post.user && `${post.user.firstName} ${post.user.lastName}`}</span></div></a>
                        </div>
                        <div className="post-body">
                          {post.body}
                        </div>
                        <div className="post-tags">
                          {
                            post.keywords.map(keyword => <a key={keyword} href="#" className="tag">#{keyword}</a>)
                          }
                        </div>
                        
                        <div className="post-comments">
                          <header>
                            <h3 className="h6">Post Comments<span className="no-of-comments">({comments !== null  && comments.Data.length})</span></h3>
                          </header>

                            {commentsError && <div> {commentsError} </div>} 
                            {commentsIsPending && <Loading/>}
                            { comments !== null  && comments.Data.map(comment => <Comment comment={comment}/> )}
                            
                        </div>


                        <AddComment />
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            }

          </div>
      </header>
    )
  }
  
  export default DetailPost
