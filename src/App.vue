<template>
  <div id="app">
    <h1>Welcome to IE Bank Corp!</h1>
    <nav>
      <ul>
        <li><RouterLink to="/">Go to Home</RouterLink></li>
        <li><RouterLink to="/accounts">Go to Accounts</RouterLink></li>
        <!-- <li><RouterLink to="/skull">Go to Skull</RouterLink></>li> -->
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  margin-top: 0px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #7b7b7b;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #bdbdbd;
}
</style>