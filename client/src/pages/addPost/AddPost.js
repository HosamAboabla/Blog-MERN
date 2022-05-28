import React from 'react'
import './AddPostStyle.css'
import { useState,useContext } from 'react';
import useFetch from '../../useFetch';
import ErrorMessage from '../../components/Messages/ErrorMessage';
import NewLoading from '../../components/Loading/NewLoading';
import Postmethod from '../../Postmethod';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const AddPost = () => {
    const [title ,setTitle] = useState("");
    const [slug , setSlug] = useState('');
    const [topic , setTopic] = useState('');
    const [oldtopic , setOldtopic] = useState('');
    const [image , setImage] = useState("")
    const [description ,setDescription] = useState("");
    const [body ,setBody] = useState("");

    const[error,setError] = useState('');

    const {data : topics ,error:err, isPending:isPending} = useFetch('http://localhost:5000/api/topics/list');

    const {user} = useContext(UserContext)


    const handleSubmit = async(e) => {
        e.preventDefault();
        const selectedtopic = oldtopic ; //id
        if (oldtopic === ""){
            if (topic === ""){
                setError("you must select a topic");
                setTimeout(()=>{
                    setError("");
                },500);
                return
            }
            const {err , mess ,id } = await Postmethod(`/api/topics/add`,{name:topic});
            if(err){
                setError("ERROR adding this topic");
                setTimeout(()=>{
                    setError("");
                },500);
                return
            }
            else{
                const selectedtopic_id = id ;
                const {err , mess , id } = await Postmethod(`/api/blogs/create`,{title,slug,description,thumbnail:image,topic:selectedtopic_id,body});
                if(err){
                    setError("ERROR adding this Blog");
                    setTimeout(()=>{
                        setError("");
                    },500);
                    return
                }
                else{  
                    setTitle("");
                    setSlug("");
                    setBody("");
                    setImage("");
                    setTopic("");
                    setOldtopic("");
                    setDescription("");
                    return;
                }
            }
        }
        else{
            const {err , mess , id } = await Postmethod(`/api/blogs/create`,{title,slug,description,thumbnail:image,topic:selectedtopic,body});
                if(err){
                    setError("ERROR adding this topic");
                    setTimeout(()=>{
                        setError("");
                    },500);
                    return
                }
                else{  
                    setTitle("");
                    setSlug("");
                    setBody("");
                    setImage("");
                    setTopic("");
                    setOldtopic("");
                    setDescription("");
                    return;
                }

        }

    }
    if(user == 'notauth'){
        return <Navigate to="/signup"/>
    }
    if(user == "basic"){
        return (
        <div className='post-coming-soon'>
            <h1>Upgrade to premium</h1>
            <div><h5>coming soon</h5></div>
        </div>
            )
    }
    return (
        <div>
        {error && <ErrorMessage Message={err} /> }
        {isPending && <NewLoading/>}
        {topics && 
            <div className="Post-form-container">
            
            <form onSubmit={handleSubmit}>
                
                <h3>Add A New Post</h3>
                
                <div>
                    <label>Title :</label>
                    <input
                    type="text" 
                    placeholder='Post Title' 
                    className="box" 
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    required/>
                </div>
                <div>
                    <label>Slug :</label>
                    <input
                    type="text" 
                    placeholder='Post Slug' 
                    className="box" 
                    value={slug}
                    onChange={(e)=>{setSlug(e.target.value)}}
                    required/>
                </div>
                <div>
                    <label>Topic :</label>
                    <select style={{margin:'10px 0'}} value={oldtopic} onChange={(e)=>
                        {setOldtopic(e.target.value);
                        setTopic('');
                    }}>
                        {topics.map((topic)=>(<option value={topic._id}>{topic.name}</option>))}
                        <option value=""> </option>

                    </select>
                </div>
                <div>
                    <label>OR New Topic :</label>
                    <input
                    type="text" 
                    placeholder='New Topic' 
                    className="box" 
                    value={topic}
                    onChange={(e)=>
                        {setTopic(e.target.value);
                        setOldtopic("")}}
                    />
                </div>

                <div>
                    <label>Image Link :</label>
                    <input 
                    type="url" 
                    placeholder='Post image' 
                    className="box"
                    value={image}
                    onChange={(e)=>{setImage(e.target.value)}}
                    required/>
                </div> 

                <div>
                    <label>Discription :</label>
                    <textarea 
                    placeholder='Post Discription' 
                    className="box"
                    rows='5'
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                    required>

                    </textarea>
                </div>
                <div>
                    <label>Body :</label>
                    <textarea 
                    placeholder='Post Body' 
                    className="box"
                    rows='20'
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                    required>

                    </textarea>
                </div>
                <input type="submit" class="btn" value="Post"/>
                <ErrorMessage Message={error}/>
            </form>
        </div>
        }

    </div>
        
  )
}

export default AddPost;