<template>
  <header class="bg-black absolute w-full">
      <div class="container mx-auto px-4">
        <div v-if="windowWidth>640" class="flex flex-row justify-between py-6">
          <a @click="scrollTo('benefits')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Главная</a>
          <a @click="scrollTo('benefits')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Преимущества</a>
          <a @click="scrollTo('benefits')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Виды бассейнов</a>
          <a @click="scrollTo('benefits')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Расчет стоимости</a>
          <a @click="scrollTo('benefits')" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Портфолио</a>
          <!-- <a class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Услуги</a> -->
          <!-- <a class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Вопросы</a> -->
          <!-- <a class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">О нас</a> -->
          <!-- <a class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center">Контакты</a> -->
        </div>
        <div v-else>
            <div class="flex flex-row justify-end py-6">
              <img @click="openMenu()" class="h-8 w-8 cursor-pointer" src="@/assets/icons/menu.svg" alt="menu">
          </div>
          <div v-if="showMenu" class="transition duration-500 flex flex-col items-center">
              <a @click="openMenu()" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Главная</a>
              <a @click="openMenu()" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Преимущества</a>
              <a @click="openMenu()" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Виды бассейнов</a>
              <a @click="openMenu()" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Расчет стоимости</a>
              <a @click="openMenu()" class="uppercase text-sm text-white cursor-pointer hover:text-yellow-400 transition duration-500 font-sans text-center py-2">Портфолио</a>

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
        this.showMenu = !this.showMenu;
      },
      scrollTo(section) {
          this.$emit('goToSection',section)
        }
    }
}


</script>

<style>

</style>