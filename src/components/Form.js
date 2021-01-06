import React, {useState} from "react";
import './Form.css';

const Form = (props) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onInputChange = (event) => {
    const newUser = {...user};
    const variableName = event.target.name;
    const variableValue = event.target.value;
    newUser[variableName] = variableValue;
    setUser(newUser);
  }

  const validatePassword = () => {
    return user.password === user.confirm_password
  }

  return (
    <form onSubmit={(event) => props.onSubmitCallback(event, user)}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" type="text" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" type="text" onChange={onInputChange} />
      </div>
      <div className="form-group"></div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input name="email" type="text" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input name="password" type="text" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input name="confirmPassword" type="text" onChange={onInputChange} className={validatePassword} />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
