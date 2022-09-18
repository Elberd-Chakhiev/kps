<template>
  <div>
    <ul class="flex gap-x-8">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  import HeaderItem from './HeaderItem.vue'
  export default {
    components: {
      HeaderItem
    }
  }
</script>