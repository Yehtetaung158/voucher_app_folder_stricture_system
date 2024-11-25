import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <>
        <LoginForm/>
      </>
    </div>
  );
};

export default LoginPage;
