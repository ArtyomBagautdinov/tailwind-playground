<template>
    <div class="px-6 py-6 flex flex-col justify-between items-start mx-auto md:max-w-md sm:max-w-md">
        <div class="flex flex-row items-center">
            <h3 class="text-xl uppercase w-1/2">
                <!-- <img class="h-5 w-5" src="@/assets/icons/check-mark.svg" alt="check-mark"> -->
                {{title}}
            </h3>
        </div>
        <div class="w-3/4 h-3/5 flex flex-row justify-start items-center p-5">
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
            <button></button>
        </div>
    </div>
</template>

<script>
export default {
    props : ['title','paragraph','imageUrl','listItems']
}
</script>
