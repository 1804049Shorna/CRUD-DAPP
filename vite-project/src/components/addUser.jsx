
import "./addUser.css";


const addUser = ({state}) => {

    const adduser = async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const name = document.querySelector("#name").value;
        const Email = document.querySelector("#email").value;
        const gen= document.querySelector("#gender").value;
        const nation= document.querySelector("#nationa").value;
        //const amount = document.querySelector("#amount").value;
        // const amount = {value:ethers.utils.parseEther("0.001")}
        const ADD = await contract.addUser(name,Email,gen,nation)
        await ADD.wait();
        alert("Adding is successul");
        window.location.reload();
    }

  return (
  <>
      <div className="center">
       <p>ADD USER </p>
        <form onSubmit={adduser} id="form">
          
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
          <span>Add here</span>
            <input type="submit" value="ADD" id="submit" />
          </div>   
        
         
        </form>
          
        </div>
  </>
  )
}

export default addUser