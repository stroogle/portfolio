<template>
    <section class="flex flex-col gap-4 mb-8" ref="section">
        <h3 class="text-4xl font-bold italic">
            Get In Contact.
        </h3>
        <div class="w-[220px] h-[1px] bg-black" />
        <a href="https://www.linkedin.com/in/colm-moore/" target="_blank">
            <h4 class="text-2xl font-bold italic flex items-center gap-2 text-gray-700">Linked In <Icon name="fe:link-external" /></h4>
        </a>
        <a href="mailto:contact@colm.tech">
            <h4 class="text-2xl font-bold italic flex items-center gap-2 text-gray-700">Email <Icon name="fe:mail"/></h4>
        </a>
    </section>
</template>

<script setup lang="ts">
const section = ref();

updateSection(section, "Contact Me")
</script>

<style scoped>

</style>