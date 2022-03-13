<template>
<v-app dark>
    <client-only>
        <LayoutAppbar />
        <v-main>
            <Nuxt />
        </v-main>
        <LayoutFooter />
    </client-only>
</v-app>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style>
@import url('~/assets/styles/main.css');
@import url('~/assets/styles/color.css');
@import url('~/assets/styles/typography.css');
</style>
