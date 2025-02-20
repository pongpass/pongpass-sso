import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import App from "App.vue";
import Login from "../views/Login.vue";

// Firebase Configuration (Replace with your own credentials)
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id"
};

let auth;
try {
  // Initialize Firebase
  initializeApp(firebaseConfig);
  auth = getAuth();
} catch (error) {
  console.error("Failed to initialize Firebase:", error);
}

// Define Routes
const routes = [
  { path: "/", component: Login } // Default route directs to the login page
];

let router;
try {
  // Create Router
  router = createRouter({
    history: createWebHistory(),
    routes
  });
} catch (error) {
  console.error("Failed to create router:", error);
}

try {
  // Create Vue App and Mount It
  const app = createApp(App);
  if (router) {
    app.use(router);
  }
  app.mount("#app");
} catch (error) {
  console.error("Failed to create and mount Vue app:", error);
}

export { auth }; // Export auth globally if needed in other components
