<template>
  <div>
    <page-header @goToSection="goToSection"/>
    <hero @goToSection="goToSection"/>
    <div ref='benefits'>
      <benefits/>
    </div>
    
  </div>
</template>

<script>
import pageHeader from '@/components/header'
import hero from '@/components/hero'
import about from '@/components/about'
import benefits from '@/components/benefits'
export default {
  components : {
    pageHeader,
    hero,
    about,
    benefits
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
