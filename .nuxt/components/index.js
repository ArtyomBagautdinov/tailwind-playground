export { default as About } from '../../components/about.vue'
export { default as Header } from '../../components/header.vue'
export { default as Hero } from '../../components/hero.vue'
export { default as Benefits } from '../../components/benefits/benefits.vue'
export { default as BenefitsItem } from '../../components/benefits/benefitsItem.vue'
export { default as PoolTypes } from '../../components/poolTypes/poolTypes.vue'
export { default as PoolTypesItem } from '../../components/poolTypes/poolTypesItem.vue'

export const LazyAbout = import('../../components/about.vue' /* webpackChunkName: "components/about" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyHero = import('../../components/hero.vue' /* webpackChunkName: "components/hero" */).then(c => c.default || c)
export const LazyBenefits = import('../../components/benefits/benefits.vue' /* webpackChunkName: "components/benefits" */).then(c => c.default || c)
export const LazyBenefitsItem = import('../../components/benefits/benefitsItem.vue' /* webpackChunkName: "components/benefits-item" */).then(c => c.default || c)
export const LazyPoolTypes = import('../../components/poolTypes/poolTypes.vue' /* webpackChunkName: "components/pool-types" */).then(c => c.default || c)
export const LazyPoolTypesItem = import('../../components/poolTypes/poolTypesItem.vue' /* webpackChunkName: "components/pool-types-item" */).then(c => c.default || c)
