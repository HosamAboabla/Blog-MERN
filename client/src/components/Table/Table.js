import AreYouSure from "../AreYouSure/AreYouSure";
import Deletemethod from "../../Deletemethod";
import { useState ,useContext} from "react";
import { UsersContext } from "../../pages/Users/UsersContext";

const Table = ({titles,data,buttons}) => {
    const[error,setError] = useState('');
    const{tableusers , setTableusers}=useContext(UsersContext)

    const popUp = (id) =>{
        let popUpElement = document.getElementById(`delete-users${id}`);
        console.log(popUpElement);
        popUpElement.style.display = 'block';
    }

    return (
        <>
            {data.map((instant)=>(
                <div id={`delete-users${instant[0]}`} className="pop-up-outer-custom2">
                    <AreYouSure 
                        confirmDelete={async ()=>{
                            const {err , mess } = await Deletemethod(`http://localhost:5000/api/users/delete/${instant[0]}`);
                            if (err){
                                setError("Error Deleting this user");
                                document.getElementById(`delete-user-error`).style.display = 'block';
                                setTimeout(()=>{
                                    setError("");
                                    document.getElementById(`delete-user-error`).style.display = 'none';
                                },500);
                            }
                            else{
                                setTableusers(tableusers.filter((item)=>{
                                    return item[0] != instant[0] ;
                                }));
                            }
                            document.getElementById(`delete-users${instant[0]}`).style.display = 'none';
                        }} 
                        cancelDelete={()=>{
                            document.getElementById(`delete-users${instant[0]}`).style.display = 'none';
                        }} 
                        name={'User'}/>
                </div>
            ))}
            
            <table className="table table-dark custom-table">
            <thead>
                <tr>
                    {titles.map((title)=><th className="table-dark" scope="col">{title}</th>)}
                    {buttons.map(()=><th className="table-dark" scope="col"></th>)}
                </tr>
            </thead>
            <tbody>

                {data.map((instant)=>
                <tr>
                    {instant.map((element)=><td className="table-dark" scope="col">{element}</td>)}
                    <td className="table-dark" scope="col">
                        <button type="button" 
                        onClick={()=>{
                            popUp(instant[0]);
                        }}
                        class="btn-danger table-button">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>)}
            </tbody>
            </table>
        </>
    );
}

export default Table;