<template>
    <div>
      <h2>Firestore Data</h2>
      <ul>
        <li v-for="doc in documents" :key="doc.id">{{ doc.text }}</li>
      </ul>
      <button @click="addData">Add Data</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { collection, addDoc, getDocs } from "firebase/firestore";
  import { db } from "@/firebase";
  
  const documents = ref([]);
  
  // Fetch Firestore Data
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "messages"));
    documents.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };
  
  // Add Data to Firestore
  const addData = async () => {
    await addDoc(collection(db, "messages"), { text: "Hello, Firestore!" });
    fetchData();
  };
  
  onMounted(fetchData);
  </script>
  