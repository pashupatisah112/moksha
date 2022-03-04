<template>
  <div>
    <v-card :height="height" color="background">
      <v-container>
        <v-row justify="center" style="margin-top: 25%">
          <v-col align="center">
            <p class="headline">
              Building Open Source Products to Support Solona Blockchain
            </p>
            <v-btn color="primary" class="mt-16">Explore Now</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-container> </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: 0,
    };
  },
  mounted() {
    this.height = window.innerHeight - 60;
  },
};
</script>
<style>
.headline {
  font-family: Poppins;
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0em;
  background: linear-gradient(
    264.75deg,
    #5e0fff 5.65%,
    #fd2bff 23.86%,
    #ffd373 49.93%,
    #fd2bff 85.76%,
    #1905da 94.71%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>