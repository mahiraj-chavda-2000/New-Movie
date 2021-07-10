import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/actions";
import { v1 as uuid } from "uuid";
import {
  MainWraper,
  HeaderStyle,
  Styledform,
  InputStyle,
  Button,
  ParaStyled,
} from "../../StyledComponents/RegisterStyled";

const LoginPage = () => {

  //useStates
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  let dispatch = useDispatch();

  //Changes handling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  //validation Function
  const validation = (name, value) => {
    switch (name) {
      case "email":
        if (!value) {
          return "Email is required";
        } else {
          return " ";
        }
      case "password":
        if (!value) {
          return "Password is required";
        } else {
          return " ";
        }
      default: {
        return " ";
      }
    }
  };

  //Submit Handle function
  const handleSubmit = async (event) => {
    event.preventDefault();
    let validationErrors = {};
    Object.keys(userDetails).forEach((name) => {
      const error = validation(name, userDetails[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

       dispatch(
         addUser({
           ...userDetails,
           id: uuid(),
         })
       );
      setUserDetails({
        email: "",
        password: "",
        conformPassword: "",
        fullName: "",
        phoneNumber: "",
      });
      return true;
    }
  };

  //function for render login
  const DisplayLogin = () => {
    return (
      <MainWraper>
        <Styledform>
          <HeaderStyle>Login</HeaderStyle>

          <InputStyle
            type="email"
            value={userDetails.email || ""}
            onChange={handleChange}
            name="email"
            placeholder="Email Address"
          />
          <ParaStyled>{errors.email}</ParaStyled>

          <InputStyle
            type="password"
            value={userDetails.password || ""}
            onChange={handleChange}
            name="password"
            id="password"
            placeholder="Password"
          />
          <ParaStyled>{errors.password}</ParaStyled>

          <Button type="submit" onClick={handleSubmit}>
           
            Submit
          </Button>
        </Styledform>
      </MainWraper>
    );
    
  }
  
  //render Login
  return (<div>{DisplayLogin()}</div>) ;
};

export default LoginPage;
