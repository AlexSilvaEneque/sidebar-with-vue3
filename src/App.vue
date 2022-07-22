<script setup>
    import Sidebar from "./components/Sidebar.vue"
</script>

<template>
    <div class="app">
        <Sidebar />
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    :root {
        --light: #f2f2f2;
        --primary: #748da6;
        --secondary: #9cb4cc;
        --rare: #d3cedf;
        --endcolor: #f2d7d9;
        --sidebar-width: 300px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--light);
    }

    button {
        cursor: pointer;
        appearance: none;
        border: none;
        outline: none;
        background: none;
    }

    .app {
        display: flex;

        main {
            flex: 1 1 0;
            padding: 2rem;

            @media (max-width: 768px) {
                padding-left: 6rem;
            }
        }
    }
</style>