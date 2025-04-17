import React from "react";
import AccountForm from "../components/AccountForm";

const LoginPage = ({ onLogin }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">🔐 Đăng nhập</h2>
      <AccountForm onLogin={onLogin} activeTab="login" />
    </div>
  );
};

export default LoginPage;