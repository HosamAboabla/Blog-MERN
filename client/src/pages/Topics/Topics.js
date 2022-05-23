import EditTopic from "../../components/EditTopic/EditTopic";
import NewTopic from "../../components/NewTopic/NewTopic";
import SideBar from "../../components/SideBar/SideBar";
import useFetch from "../../useFetch";
import NewLoading from "../../components/Loading/NewLoading";
import ErrorMessage from "../../components/Messages/ErrorMessage";
import { useEffect , useState } from "react";
import { TopicsContext } from "./TopicsContext";

const Topics = () => {

    const {data : topics ,error:error, isPending:isPending} = useFetch('http://localhost:5000/api/topics/list');
    const [topicscopy,setTopicscopy] = useState();


    useEffect(()=>{
        if(topics){
            setTopicscopy([...topics]);
        }
        
    },[topics])

    return (
        <div className="row">
            <div className="statistics-sidebar-custom col"><SideBar/></div>
            <div className="container col topics-container">
                <TopicsContext.Provider value={{topicscopy,setTopicscopy}}>
                    <div className="row add-topics-container">
                        <NewTopic/>
                    </div>
                    <hr></hr>
                    <div className="row edit-topics-div">
                        
                            {error && <ErrorMessage Message={error} /> }
                            {isPending && <NewLoading/>}
                            {topicscopy && topicscopy.map((topic)=><EditTopic topic={topic}/>)}
                        
                    </div>
                </TopicsContext.Provider>
            </div>
        </div>
    );
}

export default Topics;