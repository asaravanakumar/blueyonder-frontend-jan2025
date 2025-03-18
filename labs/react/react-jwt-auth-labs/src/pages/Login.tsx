import React, { FormEvent } from "react";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken";

function Login() {
  const handleSubmit = (
    email: HTMLInputElement,
    password: HTMLInputElement
  ) => {
    //reqres registered sample user
    const loginPayload = {
      email: email.value,
      password: password.value,
      // email: 'eve.holt@reqres.in',
      // password: 'cityslicka'
      // username: 'test2',
      // password: 'test123'
    };

    axios
      .post("https://reqres.in/api/login", loginPayload)
      // axios.post("http://localhost:7070/auth/login", loginPayload)

      .then((response) => {
        //get token from response
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.querySelector<HTMLInputElement>("#email");
        const password = form.querySelector<HTMLInputElement>("#password");
        if (email && password) {
          handleSubmit(email, password);
        }
      }}
    >
      <label htmlFor="email">Email</label>
      <br />
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" id="password" name="password" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
export default Login;
