<template>
<div>
    <v-container fluid>
        <v-row justify="center">
            <v-col align="center">
                <div class="journey-box">
                </div>
                <p class="title-color mt-n8">OUR JOURNEY</p>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" lg="8" md="10" align="center">
                <p class="title-text mb-10">Moksha Protocol Roadmap</p>
                <p style="color: #3701A6;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la</p>
            </v-col>
        </v-row>
        <v-row class="mt-16">
            <v-col cols="3" align="center" style="margin-bottom:-100px">
                <v-img max-width="150" class="ml-n14 mt-16" :src="require('~/assets/images/datebox.svg')">
                    <v-row justify="center" no-gutters>
                        <p class="mx-auto mt-4">2021 Q2</p>
                    </v-row>
                </v-img>
            </v-col>
            <v-col cols="3" align="center">
                <v-img max-width="150" class="ml-n7" :src="require('~/assets/images/datebox.svg')">
                    <v-row justify="center" no-gutters>
                        <p class="mx-auto mt-4">2021 Q1-Q2</p>
                    </v-row>
                </v-img>
            </v-col>
            <v-col cols="3" align="center" style="margin-bottom:-100px">
                <v-img max-width="150" class="ml-n16 mt-7" :src="require('~/assets/images/datebox.svg')">
                    <v-row justify="center" no-gutters>
                        <p class="mx-auto mt-4">2021 Q3</p>
                    </v-row>
                </v-img>
            </v-col>
            <v-col cols="3" align="right" style="margin-bottom:-100px">
                <v-img max-width="150" class="mt-5" :src="require('~/assets/images/datebox.svg')">
                    <v-row justify="center" no-gutters>
                        <p class="mx-auto mt-4">2021 Q2</p>
                    </v-row>
                </v-img>
            </v-col>

        </v-row>
        <v-row class="mb-16">
            <v-img :src="require('~/assets/images/timeline.svg')"></v-img>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>
.journey-box {
    width: 172px;
    height: 41px;
    background: #857cda;
    opacity: 0.3;
    border-radius: 15px;
}
</style>
