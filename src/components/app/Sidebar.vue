<template>
    <ul class="sidenav app-sidenav" :class="{ open: value }">
        <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
        >
            <a href="#" class="waves-effect waves-orange pointer">
                <i class="material-icons">{{ link.icon }}</i>
                {{ link.title }}
            </a>
        </router-link>
    </ul>
</template>

<script>
    import localizeFilter from "../../filters/localize.filter";

    export default {
        name: "Sidebar",
        props: ['value'],
        data: () => ({
            links: [
                { title: localizeFilter('MenuBill'), url: '/', icon: 'account_balance_wallet', exact: true },
                { title: localizeFilter('MenuHistory'), url: '/history', icon: 'history' },
                { title: localizeFilter('MenuPlanning'), url: '/planning', icon: 'av_timer' },
                { title: localizeFilter('MenuRecord'), url: '/record', icon: 'create' },
                { title: localizeFilter('MenuCategory'), url: '/categories', icon: 'book' }
            ]
        })
    }
</script>

<style scoped>

</style>
