<template>
  <div id="app">
    <header>
      <h1>Nentropic Technologies</h1>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>Creating unlikely order from disorder.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Global Styles */
body {
  background-color: black;
  color: white;
  font-family: monospace;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

main {
  flex: 1;
}

footer {
  margin-top: 20px;
  font-size: 14px;
}
</style>
