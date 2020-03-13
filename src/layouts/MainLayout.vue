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
            <router-link class="btn-floating btn-large blue" to="/record">
                <i class="large material-icons">add</i>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Sidebar from "../components/app/Sidebar";
    import Navbar from "../components/Navbar";

    export default {
        name: "MainLayout",
        data: () => ({
            isOpen: true
        }),
        components: {
            Sidebar,
            Navbar
        },
        async mounted() {
            if (!Object.keys(this.$store.getters.info).length) {
                await this.$store.dispatch('fetchInfo');
            }
        }
    }
</script>

<style scoped>

</style>