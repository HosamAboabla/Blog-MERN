import SideBar from "../../components/SideBar/SideBar";
import useFetch from "../../useFetch";
import NewLoading from "../../components/Loading/NewLoading";
import ErrorMessage from "../../components/Messages/ErrorMessage";
import { useEffect, useState ,useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
const Statistics = () => {
    const {data : users_count ,error:error1, isPending:isPending1} = useFetch('/api/users/count');
    const {data : posts_count ,error:error2, isPending:isPending2} = useFetch('/api/blogs/count');
    const {data : post ,error:error3, isPending:isPending3} = useFetch('/api/blogs/mostcomments');
    const [d,setD] = useState();
    const {user} = useContext(UserContext);

    
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    useEffect(()=>{
        if(post){
            const dd = new Date(post.post.createdAt);
            setD(`${dd.getDay()} ${months[dd.getMonth()]} ${dd.getFullYear()}`);
        }
    },[post])

    if (user != "admin"){
        console.log('user' , user);
        // return <Navigate to="/"/>
    }

    return (
        <div className="row">
            <div className="col statistics-sidebar-custom"><SideBar/> </div>
            <div className="container col statistics-container-custom">
                <div className="row">
                    <div className="col statistics-small-custom">
                    {error1 && <ErrorMessage Message={error1} /> }
                    {isPending1 && <NewLoading/>}
                    {users_count && <span className="statistics-number-small">{users_count}</span>}
                    <span className="statistics-text-small">Users</span>
                    </div>
                    <div className="col statistics-small-custom">
                    {error2 && <ErrorMessage Message={error2} /> }
                    {isPending2 && <NewLoading/>}
                    {posts_count && <span className="statistics-number-small">{posts_count}</span>}
                    <span className="statistics-text-small">Posts</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col statistics-big-custom">
                        {error3 && <ErrorMessage Message={error3} /> }
                        {isPending3 && <NewLoading/>}
                        {post && 
                        <div>
                            <div className="statistics-header-big"><span className="statistics-text-big">Post with most comments: {post && post.count }</span> <span className="statistics-number-big"> {post.likes}</span></div>
                            <div>
                                <h2 className="statistics-head-big"><a href="/">{post.post.title}</a></h2>
                                <span className="statistics-text-name">{ post && `${post.post.user.firstName} ${post.post.user.lastName}`} |</span><span className="statistics-date-big">{d}</span>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;

//#007bff