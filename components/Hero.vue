<template>
    <article
        class="text-center p-4 shadow-md rounded-lg flex flex-col gap-4"
    >
        <span class="flex flex-col gap-4 md:flex-row justify-center items-center">
            <img
                src="/avatar.svg"
                alt=""
                class="max-h-64"
            />
            <hgroup class="flex flex-col">
                <h3 class="text-3xl font-bold">
                    Colm Moore
                </h3>
                <h4 class="text-xl">
                    &lt;Software Engineer/&gt;
                </h4>
                <a class="hidden md:inline-block mt-4" href="mailto:contact@colm.tech">
                    <ButtonsPrimary>
                        Email Me!
                    </ButtonsPrimary>
                </a>
            </hgroup>
        </span>
        <a class="inline-block md:hidden" href="mailto:contact@colm.tech">
            <ButtonsPrimary>
                Email Me!
            </ButtonsPrimary>
        </a>
    </article>
</template>

<script setup lang="ts">


</script>

<style scoped>

</style>