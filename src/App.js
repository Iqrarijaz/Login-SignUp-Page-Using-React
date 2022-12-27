import logo from "./logo.svg";
import "./App.css";
import { UserOutlined } from "@ant-design/icons";

import { Card, Button, Input } from "antd";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div
          className="col-md-6 col-md-s-8 col-xs-8 d-flex"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <Card
            className=""
            style={{
              width: "60%",
              display: "flex",
              backgroundColor: "#FFFFFF",
              borderRadius: "0px",
              justifyContent: "flex-start",
              padding: "8px",
            }}
          >
            <h3
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "#374253",
              }}
            >
              Login
            </h3>
            <p
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "#6F7783",
              }}
            >
              Sign In to your account
            </p>
            <Input
              size="large"
              placeholder="Username"
              prefix={<UserOutlined style={{ marginRight: "4px" }} />}
              style={{
                marginBottom: "16px",
              }}
            />
            <Input.Password
              size="large"
              placeholder="Password"
              prefix={<UserOutlined style={{ marginRight: "4px" }} />}
              style={{
                marginBottom: "16px",
              }}
            />
            <div className="row" style={{}}>
              <div
                className="col"
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#321FDB",
                    fontSize: "16px",
                    height: "35px",
                    justifyContent: "center",
                  }}
                >
                  Login
                </Button>
              </div>
              <div className="col">
                <Button
                  type="link"
                  style={{ color: "#321FDB", fontSize: "16px" }}
                >
                  Forgot Password?
                </Button>
              </div>
            </div>
          </Card>
          <Card
            className=""
            style={{
              width: "40%",
              display: "flex",
              backgroundColor: "#321FDB",
              borderRadius: "0px",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <h3 style={{ color: "#FFFFFF", marginBottom: "20px" }}>Sign Up</h3>
            <Button
              style={{ color: "#321FDB", fontSize: "16px", height: "35px" }}
            >
              Register Now!
            </Button>
          </Card>
        </div>
      </header>
    </div>
  );
}

export default App;
