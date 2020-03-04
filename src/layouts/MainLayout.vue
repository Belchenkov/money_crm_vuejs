<template>
    <div class="app-main-layout">

        <Navbar @click="isOpen = !isOpen" />

        <Sidebar v-model="isOpen" />

        <main class="app-content" :class="{ full: !isOpen }">
            <div class="app-page">
                <router-view />
            </div>
        </main>

        <div class="fixed-action-btn">
            <a class="btn-floating btn-large blue" href="#">
                <i class="large material-icons">add</i>
            </a>
        </div>
    </div>
</template>

<script>
    import Sidebar from "../components/app/Sidebar";
    import Navbar from "../components/app/Navbar";

    export default {
        name: "MainLayout",
        data: () => ({
            isOpen: true
        }),
        components: {
            Sidebar,
            Navbar
        }
    }
</script>

<style scoped>

</style>