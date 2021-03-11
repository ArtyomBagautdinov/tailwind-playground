<template>
  <div>
    <page-header/>
    <hero @goToSection="goToSection"/>

    <!--
    <div ref='about'>
      <about/>
    </div> -->
    
  </div>
</template>

<script>
import pageHeader from '@/components/header'
import hero from '@/components/hero'
import about from '@/components/about'
export default {
  components : {
    pageHeader,
    hero,
    about
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
