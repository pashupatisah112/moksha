<template>
<div>
    <v-dialog v-model="token" max-width="500">
        <v-card dark color="background" class="pa-5">
            <p class="text-h6 text-center">Start Your Vesting</p>
            <v-container>
                <v-row>
                    <v-col>
                        <label for="">Receiver Address</label>
                        <v-text-field dense outlined class="mt-2"></v-text-field>

                        <v-row>
                            <v-col cols="6">
                                <label for="">Select Coin</label>
                                <v-text-field dense outlined class="mt-2"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <label for="">Enter Amount</label>
                                <v-text-field dense outlined class="mt-2"></v-text-field>
                            </v-col>
                        </v-row>

                        <label for="">Till when you want to vest your amount, select preferred date</label>
                        <v-text-field dense outlined class="mt-2"></v-text-field>
                        <v-row justify="center">
                            <v-btn outlined>Connect Wallet</v-btn>

                        </v-row>
                    </v-col>

                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        token: {
            get() {
                return this.$store.state.vesting.token
            },
            set(value) {
                this.$store.commit('vesting/setTokenVesting', value)
            }
        }
    }
}
</script>
