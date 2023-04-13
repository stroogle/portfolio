<template>
    <section class="flex flex-col gap-4" ref="section">
        <h3 class="text-4xl font-bold italic">
            What I Do.
        </h3>
        <div class="w-[220px] h-[1px] bg-black" />
        <h4 class="text-2xl font-bold italic">Languages</h4>
        <BadgeDisplay>
            <Badge v-for="lang in langs" :key="lang">
                {{lang}}
            </Badge>
        </BadgeDisplay>
        <h4 class="text-2xl font-bold italic">Databases</h4>
        <BadgeDisplay>
            <Badge v-for="db in dbs" :key="db">
                {{db}}
            </Badge>
        </BadgeDisplay>
        <h4 class="text-2xl font-bold italic">Web Libraries</h4>
        <BadgeDisplay>
            <Badge v-for="lib in web_libs" :key="lib">
                {{lib}}
            </Badge>
        </BadgeDisplay>
    </section>
</template>

<script setup lang="ts">

const langs = ["Typescript", "Javascript", "Rust", "Python", "Java", "PHP", "C", "C++"]

const dbs = ["MySQL", "MongoDB", "Postgres"]

const web_libs = ["NextJS", "Nuxt", "React", "Vue", "Astro"]

const section = ref();

updateSection(section, "What I Do")

</script>

<style scoped>

</style>