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
    export default {
        name: "Sidebar",
        props: ['value'],
        data: () => ({
            links: [
                { title: 'Счет', url: '/', icon: 'account_balance_wallet', exact: true },
                { title: 'История', url: '/history', icon: 'history' },
                { title: 'Планирование', url: '/planning', icon: 'av_timer' },
                { title: 'Новая запись', url: '/record', icon: 'create' },
                { title: 'Категории', url: '/categories', icon: 'book' }
            ]
        })
    }
</script>

<style scoped>

</style>