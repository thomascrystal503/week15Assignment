import "./App.css";
import { useEffect, useState } from "react";
import EditModal from "./EditModal";
import NavBar from "./NavBar";
import { Form, Button, Table } from "react-bootstrap";

function App() {
  /* -- const for mockAPI, useState 
    used fetch and .then to get data from the API (TODO used async & await)
    used POST to show users
    used delete with specific id to be able to delete a specific user
    used put with a specific id to edit a specific user --*/
  //  ?????   WHY does line 148 user={user} when hovered over say Never    ????

  const API_URL = "https://6496271183d4c69925a2a84c.mockapi.io/runners";

  const [users, setUsers] = useState([]);

  const [newUserName, setNewUserName] = useState("");
  const [newUserJobTitle, setNewUserJobTitle] = useState("");
  const [newUserCompanyName, setNewUserCompanyName] = useState("");

  const [updatedUserName, setUpdatedUserName] = useState("");
  const [updatedJobTitle, setUpdatedJobTitle] = useState("");
  const [updatedCompanyName, setUpdatedCompanyName] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        setUsers(data);
        //console.log(data);
      });
  }

  function deleteUser(id) {
    fetch(API_URL + `/${id}`, {
      method: "DELETE",
    }).then(() => getUsers());
  }

  function postNewUser(e) {
    e.preventDefault();
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUserName,
        jobTitle: newUserJobTitle,
        companyName: newUserCompanyName,
      }),
    }).then(() => getUsers());
  }

  function updateUser(id, userObject) {
    //e.preventDefault();
    // console.log(newUserName);
    // console.log(newUserJobTitle);
    // console.log(newUserCompanyName);
    // let updatedUserObject = {
    //   name: newUserName,
    //   jobTitle: newUserJobTitle,
    //   companyName: newUserCompanyName,
    // };
    console.log(userObject);
    fetch(`${API_URL}/${userObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    }).then(() => getUsers());
  }

  // returning Navbar
  // add user FORM
  // TABLE to post the usersObject
  // modal to edit the userObject (I passed A LOT of props down. I am still figuring out props & state in REACT
  // But Hey, this is my first time using a modal in React. Glad it works. Now to refactor once I get the hang of this.)
  //TODO make the FORM & TABLE components
  //TODO add FOOTER component
  return (
    <div className="App">
      <NavBar />
      <Form>
        <Form.Group className="mb-3">
          <h3>Add New Client</h3>
          <label>Name</label>
          <input onChange={(e) => setNewUserName(e.target.value)}></input>
        </Form.Group>

        <Form.Group className="mb-3">
          <label>Job Title</label>
          <input onChange={(e) => setNewUserJobTitle(e.target.value)}></input>
        </Form.Group>

        <Form.Group className="mb-3">
          <label>Company Name</label>
          <input
            onChange={(e) => setNewUserCompanyName(e.target.value)}
          ></input>
        </Form.Group>

        <Button onClick={(e) => postNewUser(e)} variant="success">
          Submit
        </Button>
      </Form>

      <Table
        variant="default"
        style={{ width: "100%", margin: "20px auto" }}
        striped
        bordered
        responsive
      >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Job</th>
            <th scope="col">Company</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr scope="row">
              <td>{user.name}</td>
              <td>{user.jobTitle}</td>
              <td>{user.companyName}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>

                <EditModal
                  updateUser={updateUser}
                  id={user.id}
                  jobTitle={user.jobTitle}
                  companyName={user.companyName}
                  user={user}
                  updatedUserName={updatedUserName}
                  updatedJobTitle={updatedJobTitle}
                  updatedCompanyName={updatedCompanyName}
                  setUpdatedUserName={setUpdatedUserName}
                  setUpdatedJobTitle={setUpdatedJobTitle}
                  setUpdatedCompanyName={setUpdatedCompanyName}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
