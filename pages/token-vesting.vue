<template>
<div>
    <v-card dark color="background" class="pa-5 pt-16" :height="height">
        <p class="text-h6 text-center">Start Your Vesting</p>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" lg="6" md="8">
                    <label for="">Receiver Address</label>
                    <v-text-field dense outlined class="mt-2"></v-text-field>

                    <v-row>
                        <v-col cols="6">
                            <label for="">Select Coin</label>
                            <v-select v-model="coin" :items="coins" item-text="coin" item-value="coin" dense outlined class="mt-2"></v-select>
                        </v-col>
                        <v-col cols="6">
                            <label for="">Enter Amount</label>
                            <v-text-field dense outlined class="mt-2" placeholder="0.00"></v-text-field>
                        </v-col>
                    </v-row>

                    <label for="">Till when you want to vest your amount, select preferred date</label>
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field dense v-model="date" placeholder="03/03/2022" outlined readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="date" :active-picker.sync="activePicker" :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                    </v-menu>
                    <v-row justify="center">
                        <div class="btn-bg">
                            <div class="btn-bg-2">
                                <v-btn text>Connect Wallet</v-btn>
                            </div>

                        </div>
                    </v-row>
                </v-col>

            </v-row>
        </v-container>
    </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            height: 0,
            coins: [{
                    coin: 'SOL'
                },
                {
                    coin: 'ETH'
                }
            ],
            coin: 'ETH',
            activePicker: null,
            date: null,
            menu: false,
        }
    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
        },
    },
    mounted() {
        this.height = window.innerHeight
    },
    methods: {
        save(date) {
            this.$refs.menu.save(date)
        },
    }
}
</script>

<style scoped>
.btn-bg {
    border-radius:5px;
    padding: 1px;
    background: linear-gradient(264.75deg, #FE87FF 3.04%, #FD2BFF 23.86%, #C202D3 41.34%, #5E0FFF 68.89%, #1905DA 99.63%);
}
.btn-bg-2{
    border-radius:5px;
   background-color: #061A40;
}
</style>
