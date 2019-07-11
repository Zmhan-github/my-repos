<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">

:root {
  box-sizing: border-box;
  font-size: 0.875em;
}

*,
::before,
::after {
  box-sizing: inherit;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.2;
  margin: 0;
}

.header {
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
}
</style>
