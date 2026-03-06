<template>
    <app-header />
    comite layout
  <slot />
  <newsletter-area />
  <app-footer />
</template>
<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()

const { data: committee } = await useAsyncData('committee', () =>
  $fetch(`${runtimeConfig.public.apiBase}/api/committee`, {
    params: {
      populate: ['Membres'],
      fields: ['Titre']
    }
  })
);
console.log(committee.value)
</script>

