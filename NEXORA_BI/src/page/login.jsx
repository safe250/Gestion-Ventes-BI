import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../style/login.css";

const { Title } = Typography;

export default function LoginForm() {

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="login-page">
      
      {/* Partie gauche */}
       className="login-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h2>✓ Ajoutez et gérez facilement vos services</h2>
    

      {/* Partie droite */}
      <div className="login-right">
        <div className="login-card">
          <Title level={3}>Se connecter</Title>

          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            className="login-form"
          >
            
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Veuillez entrer votre email" },
                { type: "email", message: "Email invalide" }
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              label="Mot de passe"
              name="password"
              rules={[
                { required: true, message: "Veuillez entrer votre mot de passe" }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Mot de passe"
              />
            </Form.Item>
             <Form.Item  className="egister-text"S>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Se souvenir de moi</Checkbox>
            </Form.Item  >
            <a  href="/forgetpassword" >
             {('Forgot password')}
             </a> 
              </Form.Item>
            <Button type="primary" htmlType="submit" >
              Se connecter
            </Button>

          </Form>

        </div>
      </div>
    </div>
  );
}
