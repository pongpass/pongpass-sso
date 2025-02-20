<template>
    <div>
      <h2>Upload File</h2>
      <input type="file" @change="uploadFile">
    </div>
  </template>
  
  <script setup lang="ts">
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
  import { storage } from "@/firebase";
  
  const uploadFile = async (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
  
    const storageRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(storageRef, file);
  
    const url = await getDownloadURL(storageRef);
    console.log("File uploaded:", url);
  };
  </script>
  