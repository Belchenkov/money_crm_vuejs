<template>
    <div class="app-loader">
        <div class="preloader-wrapper active">
            <div class="spinner-layer" :class="color">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loader",
        computed: {
            color() {
                const colors = [
                    'spinner-green-only',
                    'spinner-blue-only',
                    'spinner-red-only'
                ];

                return colors[Math.floor(Math.random() * (colors.length))];
            }
        }
    }
</script>

<style scoped>

</style>