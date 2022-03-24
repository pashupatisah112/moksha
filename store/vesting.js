export const state = () => ({
  token:false
})

export const mutations = {
   setTokenVesting(state,payload){
      state.token=payload
   }

}