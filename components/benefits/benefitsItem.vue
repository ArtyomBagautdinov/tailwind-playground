<template>
    <div class="flex flex-row items-center justify-center p-4">
        <img class="w-20" :src="imageUrl" alt="estimate">
        <div class="flex flex-col items-start justify-center pl-4">
            <h3 class="font-bold text-base">{{title}}</h3>
            <p class="text-xs">{{paragraph}}</p>
        </div>
    </div>
</template>


<script>

export default {
   props : ['title','paragraph','imageUrl']
}
</script>
