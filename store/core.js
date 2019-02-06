export const state = () => ({
  page:{
    name: ''
  }
})

export const mutations = {
  setPageName (state, payload) {
    state.page.name = payload
  }
}