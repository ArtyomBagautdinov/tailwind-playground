import Vue from 'vue'

const components = {
  About: () => import('../../components/about.vue' /* webpackChunkName: "components/about" */).then(c => c.default || c),
  Benefits: () => import('../../components/benefits.vue' /* webpackChunkName: "components/benefits" */).then(c => c.default || c),
  Header: () => import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Hero: () => import('../../components/hero.vue' /* webpackChunkName: "components/hero" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
