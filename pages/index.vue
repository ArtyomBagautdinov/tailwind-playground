<template>
  <div>
    <page-header @goToSection="goToSection"/>
    <div ref="hero">
      <hero @goToSection="goToSection"/>
    </div>
    <div ref='benefits'>
      <benefits/>
    </div>
    <div ref='poolTypes'>
      <pool-types/>
    </div>
    <div ref='calcPrice'>
      <calc-price/>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/components/header'
import hero from '@/components/hero'
import about from '@/components/about'
import benefits from '@/components/benefits/benefits'
import poolTypes from '@/components/poolTypes/poolTypes'
import calcPrice from '@/components/calcPrice'

export default {
  components : {
    pageHeader,
    hero,
    about,
    benefits,
    poolTypes,
    calcPrice
  },
  methods : {
    goToSection(section){
      this.$refs[section].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
</script>
