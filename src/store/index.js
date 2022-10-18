import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    card: []
  },
  mutations: {
    getProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    getProductsAction({ commit }) {
      if (!window.localStorage.getItem('Produtos')) {
        axios('https://fakestoreapi.com/products').then(res => {
          window.localStorage.setItem('Produtos', JSON.stringify(res.data));
          commit('getProducts', res.data)
        })
      }
      commit('getProducts', JSON.parse(localStorage.getItem('Produtos')))
    }
  },
  modules: {
  }
})