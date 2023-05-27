//The main entry point of our application
<template>
    <the-header></the-header>
    <router-view></router-view>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default { 
    components: { 
        TheHeader // importing it because it is a local component
    }
};
</script>
<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

    * {
    box-sizing: border-box;
    }

    html {
    font-family: "Roboto", sans-serif;
    }

    body {
    margin: 0;
    }
</style>