<template>
    <section class="hero-image h-screen bg-cover flex flex-row justify-center items-center">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 ">
                <div class="flex flex-col justify-center items-center">
                    <h1 class="text-white leading-tight text-2xl sm:text-2xl md:text-xl text-center font-bold xl:text-6xl lg:text-4xl md:text-3xl">СТРОИТЕЛЬСТВО БАССЕЙНОВ КРАСНОДАРСКИЙ КРАЙ</h1>
                    <button class="border-solid border-4 border-yellow-500 text-white uppercase p-3 bg-black bg-opacity-50 hover:bg-yellow-500 hover:text-black transition duration-500 active:outline-none focus:outline-none m-5">Бесплатная консультация</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import screenWidthMixin from '@/mixins/screenWidth'
export default {
   mixins : [
       screenWidthMixin
   ],
   methods: {
        scrollTo(section) {
          this.$emit('goToSection',section)
        }
      }
}
</script>

<style>
    .hero-image {
        background-blend-mode: multiply;
        background-image: url("@/assets/hero.jpg");
        background-color: rgba(0, 0, 0, 0.5);
    }

</style>