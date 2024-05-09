import { useState, useEffect } from "react";
//import "./UserList.css";
import "./get.css"
const userList = ({ state,account }) => {
    const [user, setUsers] = useState([]);
   const getuser = async(event)=>{
   
    event.preventDefault();
    const { contract } = state;
    const get = await contract.getUser(account)
       setUsers(get);
        await get.wait();
        alert("Fetched successully");
        window.location.reload();


   }

  
           

   return (
    <>
        <div className="center">
        <p>GET USER </p>
         <button onClick={getuser}>DELETE</button>
          {/* <form onSubmit={deleteuser} id="form">
           
            <div className="inputbox">
              <input type="submit" value="DElETE" id="submit" />
            </div>
          </form> */}
            
          </div>
    </>
    )
};

export default userList;
