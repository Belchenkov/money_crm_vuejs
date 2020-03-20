<template>
    <div>
        <Loader v-if="loading" />
        <div class="app-main-layout" v-else>
            <Navbar @click="isOpen = !isOpen" />

            <Sidebar v-model="isOpen" />

            <main class="app-content" :class="{ full: !isOpen }">
                <div class="app-page">
                    <router-view />
                </div>
            </main>

            <div class="fixed-action-btn">
                <router-link
                        class="btn-floating btn-large blue"
                        to="/record"
                        v-tooltip="'Создать новую запись'"
                >
                    <i class="large material-icons">add</i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from "../components/app/Sidebar";
    import Navbar from "../components/Navbar";
    import messages from "../utils/messages";

    export default {
        name: "MainLayout",
        data: () => ({
            isOpen: true,
            loading: true
        }),
        components: {
            Sidebar,
            Navbar
        },
        async mounted() {
            if (!Object.keys(this.$store.getters.info).length) {
                await this.$store.dispatch('fetchInfo');
            }

            this.loading = false;
        },
        computed: {
            error() {
                return this.$store.getters.error;
            }
        },
        watch: {
            error(fbError) {
                this.$error(messages[fbError.code] || 'Что-то пошло не так');
            }
        }
    }
</script>

<style scoped>

</style>
