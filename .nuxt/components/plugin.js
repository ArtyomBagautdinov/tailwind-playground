import Vue from 'vue'

const components = {
  About: () => import('../../components/about.vue' /* webpackChunkName: "components/about" */).then(c => c.default || c),
  Header: () => import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Hero: () => import('../../components/hero.vue' /* webpackChunkName: "components/hero" */).then(c => c.default || c),
  Benefits: () => import('../../components/benefits/benefits.vue' /* webpackChunkName: "components/benefits" */).then(c => c.default || c),
  BenefitsItem: () => import('../../components/benefits/benefitsItem.vue' /* webpackChunkName: "components/benefits-item" */).then(c => c.default || c),
  PoolTypes: () => import('../../components/poolTypes/poolTypes.vue' /* webpackChunkName: "components/pool-types" */).then(c => c.default || c),
  PoolTypesItem: () => import('../../components/poolTypes/poolTypesItem.vue' /* webpackChunkName: "components/pool-types-item" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
