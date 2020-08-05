<template>
  <div id="app">
    <nav id="links">
      <router-link :to="{ path: 'lista' }">Lista</router-link>
      <router-link :to="{ path: 'cadastro' }">○ Cadastro</router-link>
    </nav>

    <div id="wrapper">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <footer id="footer">
      Weuller Costa - 2020
    </footer>
  </div>
</template>

<script lang="js">
export default {
  name: 'App'
}
</script>

<style lang="css">
  @import './assets/fonts/fonts.css';
</style>

<style lang="scss">
  body, h1 {
    margin: 0;
    padding: 0;
    border: 0;
  }

  form, div {
    box-sizing: border-box;
  }

  #app {
    font-family: 'nunitoregular', Helvetica, Arial, sans-serif;
    font-weight: bolder;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: #445566;
  }

  #links {
    align-items: center;
    background: #17222D;
    box-sizing: border-box;
    display: flex;
    flex-direction: row-reverse;
    height: 3rem;
    padding: 0 3%;
    width: 100%;
    a {
      color: white;
      text-decoration: none;
      margin-left: 1rem;
    }
  }

  #header {
    align-items: center;
    background-color: #EFF4F9;
    font-family: 'aliceregular', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 8rem;
    display: flex;
    h1 {
      letter-spacing: 0.02em;
      font-size: 4.125rem;
      font-weight: 500;
    }
  }

  #wrapper {
    flex-grow: 1;
  }

  #root-content, #content-title {
    width: 50%;
    margin: 0 auto;
  }

  @media all and (max-width: 992px) {
    #root-content, #content-title {
      width: 70%;
    }
  }

  @media all and (max-width: 768px) {
    #root-content, #content-title {
      width: 100%;
      margin: 0;
      padding: 2%;
    }
  }

  #footer {
    align-items: center;
    background-color: #1188EE;
    box-sizing: border-box;
    color: white;
    display: flex;
    height: 8rem;
    width: 100%;
    font-size: 1.250rem;
    align-self: end;
    padding: 0 3% 0.125rem 3%;
  }

  label {
    margin-top: 1rem;
    display: block;
  }

  input[type="text"], select, input[type="button"], button {
    border-radius: 0.3rem;
    box-sizing: border-box;
    font-size: 1.1250rem;
    padding: 1.0625rem 1rem 1rem 1rem;
    font-family: 'nunitoregular', Helvetica, Arial, sans-serif;
  }

  input[type="text"], select {
    background-color: rgb(239,244,249);
    border: 0;
    box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
    color: rgb(189,207,223);
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    input:focus, select:focus {
      border: 0;
    }
  }

  input[type="text"]::placeholder, select::placeholder {
    color: rgb(189, 207, 223);
    opacity: 1;
  }

  select {
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    padding-right: 1rem;
    background-origin: content-box;
  }

  input[type="button"], button {
    background-color: #1188EE;
    border: 0;
    color: white;
    font-weight: lighter;
  }

  input[type="radio"], input[type="checkbox"] {
    padding-left: 0;
  }

  .error {
    font-weight: normal;
    color: red;
    margin-bottom: 0.75rem;
    margin-top: 0.125rem;
  }

  table {
    border: 0.125rem solid rgb(239,244,249);
    width: 100%;
    padding: 0;
    margin: 0;
    border-collapse: collapse;

    th, td {
      border-right: 0.125rem solid rgb(239,244,249);
      padding: 1rem;
      text-align: left;
    }

    td {
      border-top: 0.125rem solid rgb(239,244,249);
    }

    th:last-of-type, td:last-of-type {
      border-right: 0;
    }
  }

  hr {
    border: 0;
    border-bottom: 0.125rem solid rgb(239,244,249);
    margin-bottom: 3rem;
  }

  .mt-1 {
    margin-top: 0.5rem;
  }

  .mt-2 {
    margin-top: 1rem;
  }

  .mb-1 {
    margin-bottom: 0.5rem;
  }

  .mb-2 {
    margin-bottom: 1rem;
  }

  .mb-3 {
    margin-bottom: 2rem;
  }
  .highlight {
    color: #1188EE;
  }

  .normal-font {
    font-weight: normal;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
