import React, {useState} from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import "./styles.css";

// SET UP STATE FOR A NEW USER
// SET UP STATE FOR A LIST OF USERS
// CREATE A FUNCTION TO STORE INPUT FIELD DATA
  //onChange in Form.js --> updateUser
  //onClick in App.js --> onUserCallback
  //
// WHEN NEW USER DATA IS SUBMITTED, ADD IT TO OUR LIST OF USERS
// DISPLAY LIST OF USERS IN RESULTS

// ADD BONUSES

function App() {

  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    const newUsers = [...users, newUser];
    //create new user?
    setUsers(newUsers);
  }

  return (
    <div className="App">
      <Form onUserCallback={addUser} />
      <Results />
    </div>
  );
};

export default App;