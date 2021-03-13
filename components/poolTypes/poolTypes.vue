<template>
  <section class="h-full bg-gray-100">
    <div class="container mx-auto px-4 py-6">
      <p class="text-gray-800 text-center xl:text-3xl lg:text-2xl md:text-large sm:text-base text-sm ">мы предлагаем вам</p>
      <h2 class="text-gray-900 leading-tight text-center font-bold xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl text-xl">Виды возводимых бассейнов</h2>
      <div class="grid xl:grid-cols-3 xl:gap-4 lg:grid-cols-3 lg:gap-4 md:grid-cols-1 md:gap-0 sm:grid-cols-1 sm:gap-0 grid-cols-1 gap-0 py-6">
          <pool-types-item v-for="val in poolTypesItems" :key="val.id" :imageUrl="val.imageUrl" :title="val.title" :paragraph="val.paragraph" />
      </div>
    </div>
  </section>
</template>


<script>
import poolTypesItem from '@/components/poolTypes/poolTypesItem.vue'
export default {
    components : {
        poolTypesItem
    },
    data(){
        return {
            poolTypesItems : [
                {
                    id: 1,
                    title: "композитный бассейн",
                    paragraph: "Композитные бассейны пользуются всё большей популярностью у потребителей. И неспроста, ведь искусственные водоёмы из композита обладают рядом значительных преимуществ:",
                    imageUrl : require('@/assets/images/compositePool.png')
                },
                {
                    id: 2,
                    title: "полипропиленовый бассейн",
                    paragraph: "Бассейны из полипропилена в несколько раз дешевле бетонных, материал устойчив к воздействию высоких и низких температур. Основные преимущества бассейнов из полипропилена:",
                    imageUrl : require('@/assets/images/polypropylenePool.png')
                },
                {
                    id: 3,
                    title: "бетонный бассейн",
                    paragraph: "Бетонный бассейн относится к наиболее сложным и затратным конструкциям, однако отличаются высокой долговечностью. Основные преимущества бассейнов из бетона:",
                    imageUrl : require('@/assets/images/concretePool.png')
                },
            ]
        }
    }
}
</script>

