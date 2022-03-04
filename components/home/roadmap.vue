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
        <v-row class="my-16 py-16">
            <v-img :src="require('~/assets/images/timeline.svg')"></v-img>
        </v-row>
    </v-container>
</div>
</template>

<style>
.journey-box {
    width: 172px;
    height: 41px;
    background: #857cda;
    opacity: 0.3;
    border-radius: 15px;
}
</style>
