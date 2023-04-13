<template>
    <section class="flex flex-col gap-4" ref="section">
        <h3 class="text-4xl font-bold italic">
            What I've Done.
        </h3>
        <div class="w-[220px] h-[1px] bg-black" />
        <h4 class="text-2xl font-bold italic">Steam Trade Bot</h4>
        <p class="text-base">
            A NodeJS application that took advantage of web scraping tools, steam’s api, and a crypto api to allow users to automatically buy/sell their in-game items for cryptocurrency. 
        </p>
        <h4 class="text-2xl font-bold italic">Binance Arbitrage</h4>
        <p class="text-base">
            This was originally a python based project that was later migrated to rust for speed purposes. This application scanned for triangular arbitrage opportunities in the market and would execute them immediately.
        </p>
        <h4 class="text-2xl font-bold italic">ETP</h4>
        <p class="text-base">
            Edgetech Protection is a client I do continuous maintenance work for to ensure their site runs smoothly. I also design solutions for custom features they want to integrate. 
        </p>
    </section>
</template>

<script setup lang="ts">

const section = ref();

updateSection(section, "What I've Done")

</script>

<style scoped>
.slanted {
    -webkit-clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
    clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}
</style>