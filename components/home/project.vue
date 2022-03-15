<template>
<div>
    <v-container>
        <v-row justify="center my-16">
            <p class="title-text title-color mt-10">Our Projects</p>
        </v-row>
        <v-row>
            <v-col align="center" cols="12" lg="4" md="6" v-for="(item, i) in projects" :key="i">
                <v-card width="250" height="300" class="mission-card mt-16" dark>
                    <v-col align="center">
                        <div class="mission-card-junior">
                            <v-icon color="white" x-large class="mt-5">{{item.icon}}</v-icon>
                        </div>
                            <p class="text--white mt-16 mb-10"> {{item.title}} </p>
                            <v-btn color="primary"> Explore Now</v-btn>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            projects: [{
                    title: "NFT Price Feed",
                    icon: "mdi-map"
                },
                {
                    title: "Token Vest",
                    icon: "mdi-database"
                },
                {
                    title: "Smart Contract For Nft",
                    icon: "mdi-clipboard-check"
                },
            ],
        }
    },
};
</script>

<style>
.mission-card {
    background: linear-gradient(180deg, rgba(57, 42, 197, 0.42) 0%,#041129 100%);
    /* opacity: 0.5; */
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
}

.mission-card-junior {
    margin-top: -80px;
    width: 100px;
    height: 100px;
    background: #5e0fff !important;
    opacity: 0.8;
    border-radius: 15px;
    border: 8px solid rgba(25, 5, 218, 0.5);

    /* border-image-source: linear-gradient(180deg, #1905DA 0%, rgba(25, 5, 218, 0) 100%); */
}
</style>
