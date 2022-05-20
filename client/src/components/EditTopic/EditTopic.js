import { useState,useContext, useEffect } from "react";
import Putmethod from "../../Putmethod";
import Deletemethod from "../../Deletemethod";
import ErrorMessage from "../Messages/ErrorMessage";
import SuccessMessage from "../Messages/SuccessMessage";
import AreYouSure from "../AreYouSure/AreYouSure";
import { TopicsContext } from "../../pages/Topics/TopicsContext";

const EditTopic = ({topic}) => {
    const[disable,setDisable] = useState(true);
    const[topicname , setTopicname] = useState(topic.name);
    const[lasttopicname , setLastopicname] = useState();
    const[error,setError] = useState('');
    const[success,setSuccess] = useState('');
    const{topicscopy,setTopicscopy} = useContext(TopicsContext);
    
    useEffect(()=>{
        setTopicname(topic.name)
    },[topicscopy]);

    const enableEdit = () =>{
        setLastopicname(topicname)
        setDisable(false);
    }
    const confirmEdit = async() =>{
        //send api
        if (lasttopicname == topicname){
            setDisable(true);
            return
        }
        else if(topicname.length == 0){
            setTopicname(lasttopicname);
            setDisable(true);
            return
        }
        else{
            const {err , mess } = await Putmethod(`http://localhost:5000/api/topics/modify/${topic._id}`,{name:topicname});
            if(err){
                setError("ERROR : can't change the name");
                document.getElementById(`edit-topic-error${topic._id}`).style.display = 'block';
                setTimeout(()=>{
                    setError("");
                    document.getElementById(`edit-topic-error${topic._id}`).style.display = 'none';
                },500);
                setTopicname(lasttopicname);
                setDisable(true);
                return
            }
            else{
                setSuccess(mess);
                document.getElementById(`edit-topic-success${topic._id}`).style.display = 'block';
                setTimeout(()=>{
                    setSuccess("");
                    document.getElementById(`edit-topic-success${topic._id}`).style.display = 'none';
                },500);
                setDisable(true);
                return
            }
        } 
    }

    const popUp = ()=>{
        document.getElementById(`popup-container-edit-topic${topic._id}`).style.display = 'block';
    }
    
    const cancelDelete = () =>{
        document.getElementById(`popup-container-edit-topic${topic._id}`).style.display = 'none';
    }

    const confirmDelete = async () =>{
        const {err , mess } = await Deletemethod(`http://localhost:5000/api/topics/delete/${topic._id}`);
        if (err){
            setError("Error Deleting this Topic");
            document.getElementById(`edit-topic-error${topic._id}`).style.display = 'block';
            setTimeout(()=>{
                setError("");
                document.getElementById(`edit-topic-error${topic._id}`).style.display = 'none';
            },500);
        }
        else{
            
            setTopicscopy(topicscopy.filter((item)=>{
                return item._id != topic._id ;
            }));
        }
        document.getElementById(`popup-container-edit-topic${topic._id}`).style.display = 'none';
    }

    return (
        <>
        <div id={`popup-container-edit-topic${topic._id}`} className="pop-up-outer-custom">
            <AreYouSure confirmDelete={confirmDelete} cancelDelete={cancelDelete} name={'Topic'}/>
        </div>
        <div className="edit-topic">
            <form>
                <div className="edit-topic-input-error">
                    <input 
                    className="edit-topic-input" 
                    type="text" 
                    disabled={disable} 
                    value={topicname}
                    onChange={(e)=>{setTopicname(e.target.value)}}
                    />
                    <div style={{height:"11px",position:"relative",top:"-5px"}}>
                        <p id={`edit-topic-error${topic._id}`} className="edit-topic-p"> <ErrorMessage Message={error}/> </p>
                        <p id={`edit-topic-success${topic._id}`} className="edit-topic-p"><SuccessMessage Message={success} /></p>
                    </div>
                </div>
            </form> 
            {disable?
            <button onClick={enableEdit} className="edit-topic-submit-edit "><i class="fa-solid fa-pen-to-square"></i></button>:
            <button onClick={confirmEdit} className="edit-topic-submit-edit "><i class="fa-solid fa-check"></i></button>}
            <button onClick={popUp} className="btn-danger edit-topic-submit-delete"><i class="fa-solid fa-trash"></i></button>
        </div>
        </>
    );
}

export default EditTopic;