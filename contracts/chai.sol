
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract chai {
    struct User {
        string name;
        string email;
        string gender;
        string nationality;
    }
    
    User[] user;
    mapping(address => User) public users;
    uint256 public totalUsers;

    // Function to add a new user
    function addUser(string memory _name, string memory _email, string memory _gender, string memory _nationality) public {
        users[msg.sender] = User(_name, _email, _gender, _nationality);
        user.push(User(_name,_email,_gender,_nationality));
        totalUsers++;
    }

    // Function to delete a user
    function deleteUser() public {
        delete users[msg.sender];
        totalUsers--;
    }

    // Function to update a user's information
    function updateUser(string memory _name, string memory _email, string memory _gender, string memory _nationality) public {
        users[msg.sender] = User(_name, _email, _gender, _nationality);
    }

    // Function to get the total number of users
    function getTotalUsers() public view returns (uint256) {
        return totalUsers;
    }

    // Function to get a user's details by address
    function getUser() public view returns (User [] memory) {
      return user;
    }
}
