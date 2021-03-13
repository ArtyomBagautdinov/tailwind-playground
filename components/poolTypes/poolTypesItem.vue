<template>
    <div class="px-6 py-6 flex flex-col justify-between items-center">
        <div class="flex flex-row items-center">
            <h3 class="text-xl uppercase ">
                <!-- <img class="h-5 w-5" src="@/assets/icons/check-mark.svg" alt="check-mark"> -->
                {{title}}
            </h3>
        </div>
        
            <img class="w-3/4 h-3/5" :src="imageUrl" alt="image">
        <p class="text-center">{{paragraph}}</p>
    </div>
</template>

<script>
export default {
    props : ['title','paragraph','imageUrl']
}
</script>
