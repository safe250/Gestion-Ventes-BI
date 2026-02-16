import React, { useState } from "react";
import { Input, Button, Checkbox, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../style/login.css";

const { Title } = Typography;

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="login-page">
      
      {/* LEFT */}
      <div className="login-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h2>✓ Ajoutez et gérez facilement vos services</h2>
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <div className="login-card">
          <Title level={3}>Se connecter</Title>

          <form onSubmit={handleSubmit} className="login-form">
            <label>Email</label>
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Mot de passe</label>
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="remember-forgot">
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              >
                Se souvenir de moi
              </Checkbox>

              <a href="#">Mot de passe oublié ?</a>
            </div>

            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
            >
              Se connecter
            </Button>
          </form>

          <p className="register-text">
            Ou <a href="#">S'inscrire maintenant !</a>
          </p>
        </div>
      </div>
    </div>
  );
}
