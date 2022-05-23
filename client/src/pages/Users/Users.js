import Table from "../../components/Table/Table";
import SideBar from "../../components/SideBar/SideBar";
import ErrorMessage from "../../components/Messages/ErrorMessage";
import NewLoading from "../../components/Loading/NewLoading";
import { useEffect, useState , useContext} from "react";
import useFetch from "../../useFetch";
import { UsersContext } from "./UsersContext";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Users = () => {
    const titles = ["id","User name","Name","Plan"];
    const buttons = [<button type="button" class="btn-danger table-button"><i class="fa-solid fa-trash"></i></button>];
    const {data :users ,error:error, isPending:isPending} = useFetch('/api/users/list');
    const [tableusers , setTableusers] = useState([])
    const {user} = useContext(UserContext);
    useEffect(()=>{
        if(users){
            const arr = [] ;
            users.map((user)=>{
                const arr2 = [user._id ,user.userName ,`${user.firstName} ${user.lastName}`, user.plan ]
                arr.push(arr2)
            })
            setTableusers([...arr])
    
        }
    },[users])

    if (user != "admin"){
        return <Navigate to="/"/>
    }

    return (
    <>
    <div className="row">
        <div className="statistics-sidebar-custom col"><SideBar/></div>
        <div className="container col topics-container">
            <div className="row table-container">
                {error && <ErrorMessage Message={error} /> }
                {isPending && <NewLoading/>}
                <UsersContext.Provider value={{tableusers , setTableusers}} >
                {users &&
                    <Table
                    titles={titles}
                    data = {tableusers}
                    buttons={buttons} />}
                </UsersContext.Provider>
            </div>
        </div>
    </div>
    </>
    );
}

export default Users;