<template>
    <div class="section-heading" :class="klass">
      <p>Information de contact</p>
      <h2><span>Les meilleurs moyens</span> de nous contacter</h2>
      <img src="/core-img/decor2.png" alt="">
    </div>
</template>

<script setup lang="ts">
  interface Props { 
    orientation: 'LEFT' | 'CENTER'
    color: String
  }

  const props = defineProps<Props>();

  const klass = computed(() => {
    let klass = '';
    klass = `${klass} ${props.orientation === 'CENTER' ?  'text-center' : ''}`
    klass = `${klass} ${props.color === 'WHITE' ?  'white' : ''}`
    return klass
  })
</script>