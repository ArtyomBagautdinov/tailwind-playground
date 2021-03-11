export { default as About } from '../../components/about.vue'
export { default as Benefits } from '../../components/benefits.vue'
export { default as Header } from '../../components/header.vue'
export { default as Hero } from '../../components/hero.vue'

export const LazyAbout = import('../../components/about.vue' /* webpackChunkName: "components/about" */).then(c => c.default || c)
export const LazyBenefits = import('../../components/benefits.vue' /* webpackChunkName: "components/benefits" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyHero = import('../../components/hero.vue' /* webpackChunkName: "components/hero" */).then(c => c.default || c)
