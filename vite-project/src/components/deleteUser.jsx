
import "./deleteUser.css";


const deleteUser = ({state}) => {

    const deleteuser = async(event)=>{
        event.preventDefault();
        const {contract}=state;
        // const name = document.querySelector("#name").value;
        // const Email = document.querySelector("#email").value;
        // const gen= document.querySelector("#gender").value;
        // const nation= document.querySelector("#nationa").value;
        //const amount = document.querySelector("#amount").value;
        // const amount = {value:ethers.utils.parseEther("0.001")}
        const del= await contract.deleteUser()
        await del.wait();
        alert("deleted successfully");
        window.location.reload();
    }

  return (
  <>
      <div className="center">
      <p>DELETE USER </p>
       <button onClick={deleteuser}>DELETE</button>
        {/* <form onSubmit={deleteuser} id="form">
         
          <div className="inputbox">
            <input type="submit" value="DElETE" id="submit" />
          </div>
        </form> */}
          
        </div>
  </>
  )
}

export default deleteUser;