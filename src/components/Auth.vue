<template>
  <div class="auth-container">
    <h2>Login to Nentropic Technologies</h2>
    <button @click="loginWithGoogle">Login with Google</button>
    <button @click="loginWithGitHub">Login with GitHub</button>
    <button @click="loginWithAtlassian">Login with Atlassian</button>
    <button @click="loginWithEmail">Login with Email</button>
  </div>
</template>

<script setup lang="ts">
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, OAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

// Allowed email domains
const allowedEmails = ["alex@timelesslove.ai"];
const allowedDomains = ["@nentropic.dev", "@synavate.tech"];

// Function to check allowed users
const isAllowed = (email: string | null) => {
  if (!email) return false;
  return allowedEmails.includes(email) || allowedDomains.some(domain => email.endsWith(domain));
};

// Google OAuth Login
const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const email = result.user.email;
    if (isAllowed(email)) {
      console.log("Access granted:", email);
    } else {
      alert("Access denied. Unauthorized email.");
      await auth.signOut();
    }
  } catch (error) {
    console.error("Google login error:", error);
  }
};

// GitHub OAuth Login
const loginWithGitHub = async () => {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const email = result.user.email;
    if (isAllowed(email)) {
      console.log("Access granted:", email);
    } else {
      alert("Access denied. Unauthorized email.");
      await auth.signOut();
    }
  } catch (error) {
    console.error("GitHub login error:", error);
  }
};

// Atlassian OAuth Login
const loginWithAtlassian = async () => {
  const provider = new OAuthProvider("microsoft.com"); // Atlassian uses Microsoft OAuth
  try {
    const result = await signInWithPopup(auth, provider);
    const email = result.user.email;
    if (isAllowed(email)) {
      console.log("Access granted:", email);
    } else {
      alert("Access denied. Unauthorized email.");
      await auth.signOut();
    }
  } catch (error) {
    console.error("Atlassian login error:", error);
  }
};
</script>

<style scoped>
.auth-container {
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
  margin: 5px;
}
button:hover {
  background-color: white;
  color: black;
}
</style>
