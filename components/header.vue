<template>
  <header class="bg-black fixed w-full">
      <div class="container mx-auto px-4">
        <div v-if="windowWidth>640" class="flex flex-row justify-between py-6">
          <a @click="scrollTo('hero')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Главная</a>
          <a @click="scrollTo('benefits')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Преимущества</a>
          <a @click="scrollTo('poolTypes')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Виды бассейнов</a>
          <a @click="scrollTo('calcPrice')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Расчет стоимости</a>
          <a @click="scrollTo('benefits')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Портфолио</a>
          <!-- <a class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Услуги</a> -->
          <!-- <a class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Вопросы</a> -->
          <!-- <a class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">О нас</a> -->
          <!-- <a class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Контакты</a> -->
        </div>
        <div v-else>
            <div class="flex flex-row justify-between py-6">
              <div class="flex flex-row" >
                <img class="mr-2 h-6 w-6" src="@/assets/icons/phone.svg" alt="phone">
                <a class="text-white" href="tel:+79186951245">+7 (918) 695-12-45</a>
              </div>
              <img @click="openMenu()" class="h-8 w-8 cursor-pointer" src="@/assets/icons/menu.svg" alt="menu">
          </div>
          <div ref="mobile_menu" class="h-0 duration-500 flex flex-col items-center overflow-x-hidden">
              <a @click="toggleAndGo('hero')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Главная</a>
              <a @click="toggleAndGo('benefits')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Преимущества</a>
              <a @click="toggleAndGo('poolTypes')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Виды бассейнов</a>
              <a @click="toggleAndGo('calcPrice')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Расчет стоимости</a>
              <a @click="toggleAndGo('benefits')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Портфолио</a>

              <!-- <a @click="openMenu()" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Услуги</a>
              <a @click="openMenu()" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Вопросы</a>
              <a @click="openMenu()" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">О нас</a>
              <a @click="openMenu()" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Контакты</a> -->
          </div>
        </div>
      </div>
    </header>
</template>

<script>
import screenWidthMixin from '@/mixins/screenWidth'

export default {
    mixins : [
       screenWidthMixin
    ],
    data(){
      return {
        showMenu : false
      }
    },
    methods : {
      openMenu(){
        
        if(!this.showMenu) {
          this.$refs.mobile_menu.classList.remove('h-0');
          this.$refs.mobile_menu.classList.add('h-screen');
          this.showMenu = !this.showMenu;
        }
        else {
          this.$refs.mobile_menu.classList.remove('h-screen');
          this.$refs.mobile_menu.classList.add('h-0');
          this.showMenu = !this.showMenu;
        }
      },
      toggleAndGo(section) {
          this.$refs.mobile_menu.classList.remove('h-screen');
          this.$refs.mobile_menu.classList.add('h-0');
          this.showMenu = !this.showMenu;
          this.$emit('goToSection',section)
      },
      scrollTo(section) {
          this.$emit('goToSection',section)
        }
    }
}


</script>

<style>

</style>