import { useContext,useState } from "react";
import ErrorMessage from "../Messages/ErrorMessage";
import SuccessMessage from "../Messages/SuccessMessage";
import Postmethod from "../../Postmethod";
import { TopicsContext } from "../../pages/Topics/TopicsContext";
const NewTopic = () => {
    const[topicname , setTopicname] = useState('');
    const[error,setError] = useState('');
    const[success,setSuccess] = useState('');
    const {topicscopy,setTopicscopy} = useContext(TopicsContext);

    const addTopicHandler = async()=>{
        const {err , mess ,id } = await Postmethod(`http://localhost:5000/api/topics/add`,{name:topicname});
        if(err){
            setError("ERROR adding this topic");
            document.getElementById('add-topic-error').style.display = 'block';
            setTimeout(()=>{
                setError("");
                document.getElementById('add-topic-error').style.display = 'none';
            },500);
            return
        }
        else{
            setTopicscopy([...topicscopy,{name:topicname,_id:id}]);
            setSuccess(mess);
            setTopicname("");
            document.getElementById('add-topic-success').style.display = 'block';
            setTimeout(()=>{
                setSuccess("");
                document.getElementById('add-topic-success').style.display = 'none';
            },500);
            
            return
        }
    }
    const prevent = (event)=>{
        event.preventDefault();
    }
    return (
        <div className="new-topic">
            <form onSubmit={prevent}>
                <div className="new-topic-input-error">
                    <input 
                    className="new-topic-input" 
                    type="text" 
                    placeholder="New topic" 
                    value={topicname}
                    onChange={(e)=>{setTopicname(e.target.value)}}
                    />
                    <div style={{height:"11px",position:"relative",top:"-5px"}}>
                        <p id="add-topic-error" className="add-topic-p"> <ErrorMessage Message={error}/> </p>
                        <p id="add-topic-success" className="add-topic-p"><SuccessMessage Message={success} /></p>
                    </div>
                </div>
                <button onClick={addTopicHandler} className="new-topic-submit" ><i class="fa-solid fa-plus"></i></button>
            </form>
        </div>
    );
}

export default NewTopic;