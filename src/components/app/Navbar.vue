<template>
    <nav class="navbar  light-green darken-3">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <a href="#" @click.prevent="$emit('click')">
                    <i class="material-icons black-text">dehaze</i>
                </a>
                <span class="black-text navbar-time">
                    <i class="material-icons left">access_time</i>
                    {{ date | date('datetime') }}
                </span>
            </div>

            <ul class="right hide-on-small-and-down">
                <li>
                    <a
                            class="dropdown-trigger black-text"
                            href="#"
                            data-target="dropdown"
                            ref="dropdown"
                    >
                        <i class="material-icons left">face</i>
                        USER NAME
                        <i class="material-icons right">arrow_drop_down</i>
                    </a>

                    <ul id='dropdown' class='dropdown-content'>
                        <li>
                            <router-link to="/profile" class="black-text">
                                <i class="material-icons">account_circle</i>Профиль
                            </router-link>
                        </li>
                        <li class="divider" tabindex="-1"></li>
                        <li>
                            <a href="!#" class="black-text" @click.prevent="logout">
                                <i class="material-icons">assignment_return</i>Выйти
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        data: () => ({
            date: new Date(),
            interval: null,
            dropdown: null
        }),
        mounted() {
            this.interval = setInterval(() => {
                this.date = new Date();
            }, 1000);

            this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
                constrainWidth: false
            });
        },
        beforeDestroy() {
            clearInterval(this.interval);

            if (this.dropdown && this.dropdown.destroy) this.dropdown.destroy();
        },
        methods: {
            async logout() {
                await this.$store.dispatch('logout');
                await this.$router.push('/login?message=logout');
            }
        }
    }
</script>

<style scoped>

</style>