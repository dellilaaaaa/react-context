import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { userContext } from "../context/userProvider";

function Login() {
  let history = useHistory();
  let { isLogin, setIsLogin } = useContext(userContext)
  console.log(isLogin)
  console.log(setIsLogin)
  let [dataLogin, setDataLogin] = useState([]);
  useEffect(() => {
    axios("https://618e643350e24d0017ce1267.mockapi.io/user").then((result) => {
      console.log(result.data);
      setDataLogin(result.data);
    });
  }, []);
  console.log(dataLogin);
  // const loginJSON = JSON.stringify(dataLogin);
  //   console.log(loginJSON);

  // localStorage.setItem("dataLogin", loginJSON);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };
  console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();
    // const ambilLogin = localStorage.getItem("dataLogin");
    // const userLokal = JSON.parse(ambilLogin);
    // console.log(user);
    // console.log(userLokal);
    // const banding = dataLogin.find(
    //   (item) =>
    //     item.username === user.username && item.password === user.password
    // );
    // console.log(banding);
    if (
      // user.username === userLokal.username &&
      // user.password === userLokal.password
      // user.username === true && user.password === true
      // banding
      dataLogin.find(
        (item) =>
          item.username === user.username && item.password === user.password
      )
    ) {
      localStorage.setItem("isLogin", "true");
      setIsLogin(true)
      // console.log(setDataLogin)
      history.push("/");
    } else {
      alert("username dan password salah");
    }
  };
  return (
    <div className="Login2">
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="username"
                placeholder="Masukan username Anda"
                value={user.username}
                name="username"
                onChange={handleChangeUser}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Masukan Password Anda"
                value={user.password}
                name="password"
                onChange={handleChangeUser}
              />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
