<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    asyncData(context) {
        context.app.$myInjectedFunction('works with context');
    },
    mounted() {
        this.$myInjectedFunction('works in mounted');
    }
};
</script>

<style lang="scss">
</style>
