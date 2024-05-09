
import "./update.css";


const updateUser = ({state}) => {

    const updateuser = async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const name = document.querySelector("#name").value;
        const Email = document.querySelector("#email").value;
        const gen= document.querySelector("#gender").value;
        const nation= document.querySelector("#nationa").value;
        //const amount = document.querySelector("#amount").value;
        // const amount = {value:ethers.utils.parseEther("0.001")}
        const update = await contract.updateUser(name,Email,gen,nation)
        await update.wait();
        alert("Updated successully");
        window.location.reload();
    }

  return (
  <>
      <div className="center">
       <p>Update User Info </p>
        <form onSubmit={updateuser} id="form">
          <div className="inputbox"> 
           <span>Name</span>
            <input type="text" required="required" id="name" />
           
          </div>
          <div className="inputbox">
             <span>Email</span>
            <input type="email" required="required" id="email" />
           
          </div>
          <div className="inputbox">
            <span>Gender</span>
            <input type="text" required="required" id="gender" />
            
          </div>
          <div className="inputbox"> 
          <span>Nationality</span>
            <input  type="text" required="required" id="nationa" />
           
          </div>
          <div className="inputbox">
          <span>Update here</span>
            <input type="submit" value="Update" id="submit" />
          </div>
        </form>
          
        </div>
  </>
  )
}

export default updateUser;