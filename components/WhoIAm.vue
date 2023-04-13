<template>
    <section ref="section" class="flex flex-col gap-4">
        <h3 class="text-4xl font-bold italic">
            Colm
            <br/>
            Moore
        </h3>
        <div class="w-[220px] h-[1px] bg-black" />
        <p>
            I am a student of software engineering with 4 years of experience in developing small-scale software tools and websites. Passionate about coding, I enjoy exploring new technologies to create innovative solutions. My expertise includes programming languages such as Java, Python, and JavaScript. I am looking to contribute my skills to challenging projects and expand my knowledge in the field.
        </p>
        <a href="mailto:contact@colm.tech" class="max-w-sm w-full mx-auto md:mx-0">
            <button
                class="bg-black text-white font-bold text-base w-full py-2 px-4 slanted hover:bg-white hover:text-black  ring-inset ring-black hover:ring-1 transition-all duration-300"
            >
                Contact Me.
            </button>
        </a>
    </section>
</template>

<script setup lang="ts">

const section = ref();
updateSection(section, "About Me")
// const title = useSection()

// const {top} = useElementBounding(section)

// watch(top, () => {
//     if(top.value > 0 && top.value < 56)
//         title.value = "About Me"
// })

</script>

<style scoped>
.slanted {
    -webkit-clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
    clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}

</style>