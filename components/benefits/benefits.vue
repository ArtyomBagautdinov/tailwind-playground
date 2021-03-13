<template>
  <section class="h-full bg-gray-300">
    <div class="container mx-auto px-4 py-6">
      <p class="text-gray-800 text-center xl:text-3xl lg:text-2xl md:text-large sm:text-base text-sm">что получает наш клиент</p>
      <h2 class="text-gray-900 leading-tight text-center font-bold xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl text-xl">Наши преимущества</h2>
      <div class="grid xl:grid-cols-3 xl:gap-4 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-1 sm:grid-cols-2 sm:gap-1 grid-cols-1 gap-0 py-6">
        <benefits-item v-for="val in benefitsItems" :key="val.id" :title="val.title" :paragraph="val.paragraph" :imageUrl="val.imageUrl"/>
      </div>
    </div>
  </section>
</template>

<script>
import screenWidthMixin from '@/mixins/screenWidth'
import benefitsItem from '@/components/benefits/benefitsItem'
export default {
   mixins : [
       screenWidthMixin
   ],
   components : {
     benefitsItem
   },
   data(){
     return {
       benefitsItems : [
       {
         id: 1,
         title: 'Низкие цены',
         paragraph: 'Закупаем оборудование по оптовым ценам',
         imageUrl : require('@/assets/icons/price.svg')
       },
       {
         id: 2,
         title: 'Честная смета',
         paragraph: 'Вы не заплатите больше сметной стоимости',
         imageUrl : require('@/assets/icons/estimate.svg')
       },
       {
         id: 3,
         title: 'Опытные мастера',
         paragraph: 'Будут работать мастера с опытом от 3-х лет',
         imageUrl : require('@/assets/icons/architect.svg')
       },
       {
         id: 4,
         title: 'Скидка 10 %',
         paragraph: 'Система индивидуальных скидок на оборудование',
         imageUrl : require('@/assets/icons/sale.svg')
       },
       {
         id: 5,
         title: 'Бесплатный замер',
         paragraph: 'Бесплатный замер и расчет сметы строительства',
         imageUrl : require('@/assets/icons/size.svg')
       },
       {
         id: 6,
         title: 'Поэтапная оплата',
         paragraph: 'Поэтапная оплата за работу по факту выполнения',
         imageUrl : require('@/assets/icons/steps.svg')
       }
     ]
     }
   }

}
</script>
