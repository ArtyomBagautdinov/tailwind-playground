<template>
    <section class="h-full bg-gray-200">
        <div class="container mx-auto px-4 py-6">
            <div class="bg-gradient-to-r from-green-500 to-blue-500 border-8 border-white px-6 py-8">
                <h3 class="text-white xl:text-base lg:text-base md:text-base sm:text-base text-sm uppercase font-extralight">
                    РАССЧИТАЙТЕ СТОИМОСТЬ БАССЕЙНА ОНЛАЙН
                </h3>
                <h2 class="text-white xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-2xl font-bold">Расчет стоимости</h2>
                <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2 py-2">
                    <div class="flex flex-col items-start">
                        <span class="text-white text-sm">Вид бассейна</span>
                        <select class="w-full focus:outline-none px-1 py-2 bg-white" >
                            <option value="Композитный бассейн">Композитный бассейн</option>
                            <option value="Каркасный бассейн">Каркасный бассейн</option>
                            <option value="Бетонный бассейн">Бетонный бассейн</option>
                        </select>
                    </div>
                    <div class="flex flex-col items-start ">
                        <span class="text-white text-sm">Начало строительства</span>
                        <select class="w-full focus:outline-none px-1 py-2 bg-white" >
                            <option value="Композитный бассейн">На этой неделе</option>
                            <option value="Каркасный бассейн">В этом месяце</option>
                            <option value="Бетонный бассейн">Через месяц</option>
                        </select>
                    </div>
                </div>
                <div class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-1 grid-cols-1 gap-2 py-2">
                    <div class="flex flex-col items-start">
                        <span class="text-white text-sm">Глубина</span>
                        <input placeholder="1.5 метра" class="w-full focus:outline-none px-1 py-2" type="text">
                    </div>
                     <div class="flex flex-col items-start ">
                        <span class="text-white text-sm">Ширина</span>
                        <input placeholder="2 метра" class="w-full focus:outline-none px-1 py-2" type="text">
                    </div>
                     <div class="flex flex-col items-start w">
                        <span class="text-white text-sm">Длина</span>
                        <input placeholder="3 метра" class="w-full focus:outline-none px-1 py-2" type="text">
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-2 py-2">
                    <div class="flex flex-col items-start">
                        <span class="text-white text-sm">Адресс строительства</span>
                        <input placeholder="г. Краснодар, ул.Советская 1" class="w-full focus:outline-none px-1 py-2" type="text">
                    </div>
                     
                </div>
                <div class="grid grid-col-1 gap-0 py-2">
                    <div class="flex flex-col items-start w-full">
                        <span class="text-white text-sm">Телефон</span>
                        <input placeholder="+7 (xxx) xxx-xx-xx" class="w-full focus:outline-none px-1 py-2" type="text">
                    </div>
                </div>
                <div class="flex flex-row justify-center items-center pt-5">
                    <button class="bg-white text-black py-3 px-4 text-sm uppercase font-bold focus:outline-none transition duration-100 hover:shadow-lg">рассчитать стомость</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>
