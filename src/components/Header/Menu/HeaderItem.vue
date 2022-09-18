<template>
  <li>
    <a :href="href">
      {{ text }}
    </a>
  </li>
</template>
<script>
  export default {
    props: {
      href: String,
      text: String
    }
  }
</script>