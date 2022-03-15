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
        <v-row class="mt-16 hidden-sm-and-down">
            <v-col cols="3" align="center" style="margin-bottom:-100px">
                <v-img max-width="150" class="ml-n14 mt-16" :src="require('~/assets/images/datebox.svg')">
                    <v-row justify="center" no-gutters>
                        <p class="mx-auto mt-4 text-lg-body-1 text-md-body-2 text-caption">2021 Q2</p>
                    </v-row>
                </v-img>
            </v-col>
            <v-col cols="3" align="center">
                <v-img max-width="150" class="ml-n7" :src="require('~/assets/images/datebox.svg')">
                    <v-row justify="center" no-gutters>
                        <p class="mx-auto mt-4 text-lg-body-1 text-md-body-2 text-caption">2021 Q1-Q2</p>
                    </v-row>
                </v-img>
            </v-col>
            <v-col cols="3" align="center" style="margin-bottom:-100px">
                <v-img max-width="150" class="ml-n16 mt-7" :src="require('~/assets/images/datebox.svg')">
                    <v-row justify="center" no-gutters>
                        <p class="mx-auto mt-4 text-lg-body-1 text-md-body-2 text-caption">2021 Q3</p>
                    </v-row>
                </v-img>
            </v-col>
            <v-col cols="3" align="right" style="margin-bottom:-100px">
                <v-img max-width="150" class="mt-5" :src="require('~/assets/images/datebox.svg')">
                    <v-row justify="center" no-gutters>
                        <p class="mx-auto mt-4 text-lg-body-1 text-md-body-2 text-caption">2021 Q2</p>
                    </v-row>
                </v-img>
            </v-col>

        </v-row>
        <v-row class="mb-16 hidden-sm-and-down">
            <v-img :src="require('~/assets/images/timeline.svg')"></v-img>
        </v-row>
        <v-row justify="center" no-gutters class="hidden-md-and-up">
            <v-timeline>
                <v-timeline-item v-for="(item,i) in events" :key="i" fill-dot color="white" small>
                    <v-img :class="reverse(item,i)" width="250" :src="require('~/assets/images/datebox2.svg')">
                        <v-row justify="center pt-4" no-gutters>
                            <p class="mx-auto text-caption" :class="reverse(item,i)">{{item.title}}</p>
                        </v-row>
                    </v-img>
                </v-timeline-item>
            </v-timeline>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            events: [{
                    title: '2021 Q2'
                },
                {
                    title: '2021 Q1-Q2'
                },
                {
                    title: '2021 Q3'
                },
                {
                    title: '2021 Q2'
                }
            ]
        }
    },
    methods:{
        reverse(item,i){
            if(i%2 !=0){
                return 'reverse-img'
            }
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

.v-timeline-item__dot--small {
    width: 16px;
    height: 16px;
}

.v-timeline:before {
    width: 1px;
}

.theme--dark.v-timeline::before {
    background: linear-gradient(264.75deg, #FE87FF 3.04%, #FD2BFF 23.86%, #C202D3 41.34%, #5E0FFF 68.89%, #1905DA 99.63%);
}

.reverse-img {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}
</style>
