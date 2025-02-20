<template>
    <div class="container">
      <div class="login-box">
        <h2>Investor Login</h2>
        <p>Secure access For Investors.</p>
        <button @click="loginWithGoogle">Login with Google</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { auth } from "@/firebase";
  
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Investor logged in:", result.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-box {
    border: 1px solid white;
    padding: 20px;
    text-align: center;
  }
  
  button {
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: white;
    color: black;
  }
  </style>
  