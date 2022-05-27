import React from 'react'
import { useState } from 'react'
// import './AddPostStyle.css'
import Postmethod from '../../Postmethod';
const AddPost = () => {
    const [slug , setSlug] = useState('');
    const [title , setTitle] = useState('');
    const [topic , setTopic] = useState('');
    const [body , setBody] = useState('');
    const [description , setDescription] = useState('');
    const [thumbnail , setThumbnail] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        let {err, mess} = await Postmethod(
        `/api/blogs/create/`,
        {
            "slug": slug,
            "title": title,
            "description": description,
            "thumbnail": thumbnail,
            "topic" :topic,
            "body": body
        }
        )
        console.log('message' , mess);
        console.log('error' , err);
        if(err)
        {
            // window.location.reload();
        }
        else{
            window.location.replace("/");
        }
    }
  return (
        
        <div className="Post-form-container container">
            
            <form action="#" className="commenting-form" onSubmit={ handleSubmit }>
                
                <h3>Add A New Post</h3>
                <div className="row">

                    <div className = "form-group col-md-12">
                        <label>Title :</label>
                        <input
                        type="text" 
                        placeholder='Post Title' 
                        className="form-control" 
                        value= { title }
                        onChange= { e => setTitle(e.target.value)}
                        required/>
                    </div>
                    <div className = "form-group col-md-12">
                        <label>Slug :</label>
                        <input
                        type="text" 
                        placeholder='Post Slug' 
                        className="form-control" 
                        value= {slug}
                        onChange= { e => setSlug(e.target.value)}
                        required/>
                    </div>
                    <div className = "form-group col-md-12">
                        <label>Topic :</label>
                        <input
                        type="text" 
                        placeholder='Post Topic' 
                        className="form-control" 
                        value= { topic }
                        onChange= { e => setTopic(e.target.value)}
                        required/>
                    </div>
                    <div className = "form-group col-md-12">
                        <label>Body :</label>
                        <textarea 
                        placeholder='Post Body' 
                        className="form-control" 
                        rows='4'
                        value= { body }
                        onChange= { e => setBody(e.target.value)}
                        required>

                        </textarea>
                    </div>
                    <div className = "form-group col-md-12">
                        <label>Description :</label>
                        <textarea 
                        placeholder='Post Discription' 
                        className="form-control" 
                        rows='2'
                        value= { description }
                        onChange= { e => setDescription(e.target.value)}
                        required>

                        </textarea>
                    </div>
                    <div className = "form-group col-md-12">
                        <label>Image Link :</label>
                        <input 
                        type="url" 
                        placeholder='Post image' 
                        className="form-control" 
                        value= { thumbnail }
                        onChange= { e => setThumbnail(e.target.value)}
                        required/>
                    </div> 
                    <input type="submit" class="btn btn-secondary"/>
                </div>
            </form>
        </div>
  )
}

export default AddPost