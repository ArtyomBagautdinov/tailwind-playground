<template>
    <div class="px-6 py-6 flex flex-col justify-between items-start mx-auto md:max-w-md sm:max-w-md">
        <div class="flex flex-row items-center">
            <h3 class="text-xl uppercase w-full">{{title}}</h3>
        </div>
        <div class="w-full h-full flex flex-row xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center items-center p-5">
            <img :src="imageUrl" alt="image">
        </div>
        <p>{{paragraph}}</p>
        <ul class="list-none mt-3">
            <li v-for="val in listItems" :key="val" class="flex flex-row items-center font-bold lg:text-sm xl:text-sm">
                <img class="w-4 h-4 m-0 mr-2" src="@/assets/icons/check.svg" alt="check">
                {{val}}
            </li>
        </ul>
        <div>
            <button class="mt-5 bg-blue-500 px-4 py-3 text-white uppercase text-sm focus:outline-none hover:bg-blue-700 transition duration-300">рассчитать стоимость</button>
        </div>
    </div>
</template>

<script>
export default {
    props : ['title','paragraph','imageUrl','listItems']
}
</script>
