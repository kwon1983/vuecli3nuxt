<template>
    <div>
        <div id="app">
            <div id="nav">
                <nuxt-link to="/">Home</nuxt-link> |
                <nuxt-link to="/about">About</nuxt-link>
            </div>
        </div>
        <nuxt />
    </div>
</template>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
