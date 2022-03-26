<template>
<div>
    <v-app-bar color="background" style="position: absolute; top: 0" app flat class="px-md-5">
        <p class="logo-text text-lg-h4 text-md-h5 text-h6">Mosksha Protocol</p>
        <v-spacer></v-spacer>
        <v-row class="hidden-md-and-down">
            <v-btn text>Roadmap</v-btn>
            <v-btn text>
                Open Source Products
                <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
            <v-btn text>FAQs</v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined rounded class="ml-3" @click="$router.push({path:'/token-vesting'})">Start Token Vesting</v-btn>

            <!-- <v-btn outlined rounded @click="$store.commit('vesting/setTokenVesting',true)">Start Token Vesting</v-btn> -->
        </v-row>
        <v-btn class="hidden-lg-and-up" light text dark @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer color="background" v-model="drawer" absolute temporary right app>
        <v-list>
            <v-list-item>
                <v-list-item-title>Roadmap</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title>Open Source Products</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title>FAQs</v-list-item-title>
            </v-list-item>
            <v-btn outlined rounded small class="ml-3" @click="$router.push({path:'/token-vesting'})">Start Token Vesting</v-btn>

            <!-- <v-btn outlined rounded small class="ml-3" @click="$store.commit('vesting/setTokenVesting',true)">Start Token Vesting</v-btn> -->

        </v-list>
    </v-navigation-drawer>
    <Token />
</div>
</template>

<script>
import Token from '../home/tokenVesting.vue';
export default {
    components: {
        Token
    },
    data() {
        return {
            drawer: false
        }
    }
}
</script>
