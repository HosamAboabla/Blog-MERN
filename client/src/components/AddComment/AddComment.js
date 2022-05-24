import  { useState } from 'react';
import { useParams } from 'react-router-dom'
import Postmethod from '../../Postmethod';

const AddComment = () => {

    const [comment , setComment] = useState("");
    const { slug } = useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let {err, mess} = await Postmethod(
        `/api/comments//PostComments/${slug}`,
        {
            "text" : comment
        })
        console.log('message' , mess);
        console.log('error' , err);
        window.location.reload();


    }

    return (
        <div className="add-comment">
            <header>
                <h3 className="h6">Leave a reply</h3>
            </header>
            <form action="#" className="commenting-form" onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-12">
                    <textarea 
                    onChange={ e => setComment(e.target.value)}
                    value = {comment}
                    name="usercomment" 
                    id="usercomment" 
                    placeholder="Type your comment" 
                    className="form-control" 
                    />
                </div>
                <div className="form-group col-md-12">
                <button type="submit" className="btn btn-secondary">Submit Comment</button>
                </div>
            </div>
            </form>
        </div>
      
    )
  }
  
  export default AddComment