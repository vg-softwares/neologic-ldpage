<template>
    <div id="app">
        <MainPage></MainPage>
    </div>
</template>

<script>
    import MainPage from './components/MainPage.vue';
    export default {
        components: {
            MainPage,
        },
    };
</script>
<style>
    /* Define fundo escuro para toda a aplicação */
    body {
        background-color: #121212; /* fundo escuro */
        color: white; /* cor do texto clara */
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Sobrescreva quaisquer outros estilos padrão */
    #app {
        min-height: 100vh;
    }
</style>
