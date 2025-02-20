<template>
  <div class="container">
    <div class="login-box">
      <h2>Nentropic Technologies</h2>
      <p>Creating unlikely order from disorder.</p>
      <button @click="loginWithGoogle">Login with Google</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration (replace with your credentials)
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle Google login
const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Logged in:", result.user);
  } catch (error) {
    console.error("Login error:", error);
  }
};
</script>

<style scoped>
/* Global styles for the login page */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  color: white;
  font-family: monospace;
  margin: 0;
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
</style>
