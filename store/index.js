export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  Add(ctx) {
    ctx.commit(mutations.increment)
  }
}

export const getters = {
  count(state) {
    return state.counter++
  }
}
