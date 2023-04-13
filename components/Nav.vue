<template>
    <nav
        ref="nav"
        class="px-4 py-2 shadow mt-4 w-[90%] mx-auto rounded sticky top-0 text-base transition-all bg-white z-50"
        :class="{top_screen: top == 0}"
        >
        
        <article class="flex justify-between w-[90%] max-w-[1000px] mx-auto">
           <p class="font-bold italic">colm.tech</p>
           <p class="font-bold italic uppercase">{{section_title}}</p> 
        </article>

    </nav>
</template>

<script setup lang="ts">

const nav = ref()
const {top} = useElementBounding(nav)

const section_title = useSection();

watch(top, () => {
    if(top.value == 16)
        section_title.value = "Home"
})

</script>

<style scoped>

.top_screen {
    @apply rounded-none w-full py-4 duration-300 ease-in-out;
}

</style>