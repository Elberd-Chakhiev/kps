<template>
  <li>
    <a
      class="
        relative
        before:content-['']
        before:absolute
        before:-bottom-2
        before:left-0
        before:border-b-2
        before:w-0
        before:h-1
        before:transition-all
        hover:before:w-full
        before:border-[#1860CF]
        hover:text-[#1860CF]
        transiton-colors
      "
      :href="href"
    >
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