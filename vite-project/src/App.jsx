import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { ethers } from "ethers";
import abi from "./contractJSON/chai.json";
import "./App.css";
import AddUser from "./components/addUser";
import UserList from "./components/userList";
import UpdateUser from "./components/updateUser";
import DeleteUser from "./components/deleteUser";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("");

  useEffect(() => {
    const initialize = async () => {
      const contractAddress = "0xF83F28e186920184E4FEDf52a97fb25563cBF178";
      const contractABI = abi.abi;

      try {
        if (!window.ethereum) {
          alert("Please install MetaMask!");
        }
        const { ethereum } = window;
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(accounts[0]);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({ provider, signer, contract });
      } catch (error) {
        alert(error.message || "Error occurred while initializing.");
      }
    };
    initialize();
  }, []);

  const hideNavRoutes = ["/addUser", "/updateUser", "/deleteUser"]; // Routes where nav should be hidden

  return (
    <Router>
      <div className="divv">
        {hideNavRoutes.indexOf(window.location.pathname) === -1 && ( // Check if current route is in hidden list
         <div className="div_design">
          <nav  className="ul_design">
            <ul >
              <li>
                <Link to="/addUser" className="link_style">Add User</Link>
              </li>
              <li>
                <Link to="/updateUser" className="link_style">Update User</Link>
              </li>
              <li>
                <Link to="/deleteUser" className="link_style">Delete User</Link>
              </li>
              <li>
                <Link to="/userList" className="link_style">User List</Link>
              </li>
            </ul>
          </nav>
         </div>
          
        )}

        <Routes>
          <Route path="/addUser" element={<AddUser state={state} />} />
          <Route path="/updateUser" element={<UpdateUser state={state} />} />
          <Route path="/deleteUser" element={<DeleteUser state={state} />} />
          <Route
            path="/userList"
            element={<UserList state={state} account={account} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

export default App;
