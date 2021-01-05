import React, {useState} from "react";
import './Form.css';

const Form = (props) => {
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const onInputChange = (event) => {
    const newFormFields = {...formFields};
    const variableName = event.target.name;
    const variableValue = event.target.value;
    newFormFields[variableName] = variableValue;
    setFormFields(newFormFields);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.addUserCallback(formFields);
    setFormFields({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  }

  const validatePassword = () => {
    return formFields.password
  }

  return (
    <form>
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
      <input type="submit" value="Submit" onChange={onInputChange} onClick={onSubmit} />
    </form>
  );
};

export default Form;
