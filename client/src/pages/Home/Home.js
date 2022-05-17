
import Post from '../../components/Post/Post';
import useFetch from "../../useFetch";
import Loading from '../../components/Loading/Loading';

/*
let blogs = 
[
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
        "body": "this is the body of react crash course",
        "createdAt": "2022-05-02T21:42:13.367Z",
        "updatedAt": "2022-05-02T21:42:13.367Z",
        "__v": 0
    },
    {
        "_id": "62705035ab8ed426d05d831a",
        "slug": "learn-react",
        "title": "React crash course",
        "description": "this is a small react crash course",
        "thumbnail": "https://pixabay.com/get/gc681dd3370c397693f29ace9035d40c6395f5ad56e3136c7c4b911b5d64241bf8c017cd885ecf475fb7a38aa91afa25abf1636bca6fdaad55362ad3ef59633c6_640.jpg",
        "keywords": [
            "react",
            "js"
        ],
        "body": "this is the body of react crash course",
        "createdAt": "2022-05-02T21:42:13.367Z",
        "updatedAt": "2022-05-02T21:42:13.367Z",
        "__v": 0
    },
    {
        "_id": "62705035ab8ed426d05d831a",
        "slug": "learn-react",
        "title": "React crash course",
        "description": "this is a small react crash course",
        "thumbnail": "https://pixabay.com/get/gd8ec84ed1dfc837ebd1ddd763b5702fa819c986a543f8a13dd1e88edb729149656019f85934462fcf86f8ec346823ccde9491c058f74b1d32e02eca1ff6dffd0_640.jpg",
        "keywords": [
            "react",
            "js"
        ],
        "body": "this is the body of react crash course",
        "createdAt": "2022-05-02T21:42:13.367Z",
        "updatedAt": "2022-05-02T21:42:13.367Z",
        "__v": 0
    },
    {
        "_id": "62705035ab8ed426d05d831a",
        "slug": "learn-react",
        "title": "React crash course",
        "description": "this is a small react crash course",
        "thumbnail": "https://pixabay.com/get/gd8ec84ed1dfc837ebd1ddd763b5702fa819c986a543f8a13dd1e88edb729149656019f85934462fcf86f8ec346823ccde9491c058f74b1d32e02eca1ff6dffd0_640.jpg",
        "keywords": [
            "react",
            "js"
        ],
        "body": "this is the body of react crash course",
        "createdAt": "2022-05-02T21:42:13.367Z",
        "updatedAt": "2022-05-02T21:42:13.367Z",
        "__v": 0
    },
]
*/



const Home = () => {

    const link = "/api/blogs/list/"  ;
    const {data : blogs , error , isPending} = useFetch(link);
    console.log("blogs" , blogs);
    return (

    <main className="posts-listing col-lg-12"> 
        <div className="container">
            <div className="row">
                {error && <div> {error} </div>} 
                {isPending && <Loading/>}
                {
                    blogs && blogs.map(blog => <Post key={blog._id} blog={blog} />)
                }
                
            </div>
        </div>  
    </main>  
    )
  }
  
  export default Home
